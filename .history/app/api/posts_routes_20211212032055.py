from flask import Blueprint, request, session, jsonify
from flask_login import login_required
from app.models import Post, Photo, User, Comment
from wtforms.validators import DataRequired
from app.forms.post_form import PostForm
from app.forms.comment_form import CommentForm
from datetime import datetime
from app.models import db
import boto3
import botocore
from app.config import Config
from app.aws_s3 import upload_file_to_s3


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

# READ ONE POST
@posts_routes.route("/<int:id>")
@login_required
def get_one_post(id):
    post = Post.query.get(id)
    if post:
        return post.to_dict()
    else:
        return "Post not found", 404

# READ ALL POSTS
@posts_routes.route('/')
# @login_required
def posts():
    userId = session['_user_id']
    user = User.query.get(userId).to_dict()
    results = Post.query.filter(Post.user_id.in_(
        user["following"])).order_by(Post.createdAt.desc()).all()

    results_dict = {post.id: post.to_dict() for post in results}
    return results_dict


#POST ROUTE WITHOUT AWS UPLOAD
# @posts_routes.route('/', methods=["POST"])
# @login_required
# def create_post():
#     form=PostForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         post = Post(
#             user_id=form.data['user_id'],
#             description=form.data['description'],
#             createdAt= datetime.now(),
#             updatedAt= datetime.now()
#         )
#         db.session.add(post)
#         db.session.commit()
#         photo = Photo(
#             url=form.data['url'],
#             user_id=form.data['user_id'],
#             post_id=post.id,
#             createdAt= datetime.now(),
#             updatedAt= datetime.now())
#         db.session.add(photo)
#         db.session.commit()
#         return post.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@posts_routes.route('/', methods=["POST"])
@login_required
def create_post():
    form=PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    file = request.files["file"]
    file_url = upload_file_to_s3(file, Config.S3_BUCKET)
    post = Post(
        user_id=form.data['user_id'],
        description=form.data['description'],
        createdAt= datetime.now(),
        updatedAt= datetime.now()
    )
    db.session.add(post)
    db.session.commit()
    photo = Photo(
        url=file_url,
        user_id=form.data['user_id'],
        post_id=post.id,
        createdAt= datetime.now(),
        updatedAt= datetime.now())
    db.session.add(photo)
    db.session.commit()
    return post.to_dict()
    # return {'errors': validation_errors_to_error_messages(form.errors)}, 400


# UPDATE ONE POST
@posts_routes.route("/<int:id>", methods=["PUT"])
# @login_required
def update_post(id):
    post = Post.query.get(id)
    req = request.get_json()
    print("!!!!!!", req)
    if post:
        post.description = req
        db.session.commit()
        return post.to_dict()
    else:
        return "Post not found", 404

# DELETE ONE POST
@posts_routes.route("/<int:id>", methods=["DELETE"])
# @login_required
def delete_post(id):
    print('id', id)
    post = Post.query.get(id)
    print("******************", post)
    if post:
        db.session.delete(post)
        db.session.commit()
        return "Ok", 200
    else:
        return "Post not found", 404


# READ ALL COMMENTS ON ONE POST
@posts_routes.route('/<int:id>/comments')
@login_required
def get_comments(id):
    post = Post.query.get(id)
    if post:
        comments = Comment.query.filter(
            Comment.post_id == id).all()
        print("1111112222222", comments)
        comments_dict = {comment.id: comment.to_dict() for comment in comments}
        print("2351235312445123", comments_dict)

        return comments_dict

# CREATE NEW COMMENT ON ONE POST
@posts_routes.route('/<int:id>/comments', methods=["POST"])
@login_required
def create_comment(id):
    req = request.get_json()
    if req:
        print("request", req)
        comment = Comment(
            user_id=req['id'],
            content=req['comment'],
            post_id=id,
            createdAt=datetime.now(),
            updatedAt=datetime.now()
        )

        db.session.add(comment)
        db.session.commit()

        return comment.to_dict()

# UPDATE ONE COMMENT
@posts_routes.route("/<int:id>/comments/<int:comment_id>", methods=["PUT"])
@login_required
def update_comment(id, comment_id):
    req = request.get_json()
    print("rob", req)

    ################### Is there a need to query for Post before deleting a comment?

    # post = Post.query.get(id)
    # if post:
    #     for key, value in request.form:
    #         setattr(post, key, value)
    #     db.session.commit()
    #     return post.to_dict()
    comment = Comment.query.get(comment_id)
    if comment:
        comment.content = req['content']
        db.session.commit()
        return comment.to_dict()
    else:
        return "Comment not found", 404

# DELETE ONE COMMENT ON ONE POST
@posts_routes.route("/<int:id>/comments/<int:comment_id>", methods=["DELETE"])
# @login_required
def delete_comment(id, comment_id):
    # post = Post.query.get(id)
    # if post:
    #     db.session.delete(post)
    #     db.session.commit()
    #     return "Ok", 200
    comment = Comment.query.get(comment_id)
    if comment:
        db.session.delete(comment)
        db.session.commit()
        return 'Ok', 200
    else:
        return "Post not found", 404
