from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Post

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/posts')
# @login_required
def get_user_posts(id):
    posts = Post.query.filter(Post.user_id == id).all()
    if posts:
        return {post.id: post.to_dict() for post in posts}
    else:
        return {} 