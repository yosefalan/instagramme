from flask import Blueprint, request, session
from flask_login import login_required
from app.models import Post, Photo, User
from wtforms.validators import DataRequired
from app.forms.post_form import PostForm
from datetime import datetime
from app.models import db


posts_routes = Blueprint('posts', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@posts_routes.route('/')
# @login_required
def posts():
    userId = session['_user_id']
    user = User.query.get(userId).to_dict()
    results = Post.query.filter(Post.user_id.in_(user["following"])).order_by(Post.createdAt.desc()).all()

    results_dict = {post.id: post.to_dict() for post in results}
    return results_dict

@posts_routes.route('/new', methods=["POST"])
@login_required
def create_post():
    form=PostForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post(
            user_id=form.data['user_id'],
            description=form.data['description'],
            createdAt= datetime.datetime.now,
            updatedAt= datetime.datetime.now
        )
        db.session.add(post)
        db.session.commit()
        photo = Photo(
            url=form.data['url'],
            user_id=form.data['user_id'],
            post_id=post.id,
            createdAt= datetime.datetime.now,
            updatedAt= datetime.datetime.now
        )
        db.session.add(photo)
        db.session.commit()
        return post.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@posts_routes.route("/<int:id>")
@login_required
def get_one_post(id):
    post = Post.query.get(id)
    if post:
        return post.to_dict()
    else:
        return "Post not found", 404

@posts_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_post(id):
    post = Post.query.get(id)
    if post:
        for key, value in request.form:
          setattr(post, key, value)
        db.session.commit()
        return post.to_dict()
    else:
        return "Post not found", 404

@posts_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    if post:
        db.session.delete(post)
        db.session.commit()
        return "Ok", 200
    else:
        return "Post not found", 404
