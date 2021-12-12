from flask import Blueprint, jsonify
from flask_login import login_required

from app.models import db, User, Post


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

@user_routes.route('/<int:id>/followers')
def get_followers(id):
    user = User.query.get(id).to_dict()
    followers = User.query.filter(User.id.in_(user["followers"])).all()
    followers_dict = {}
    for follower in followers:
        followers_dict[follower.to_dict()["id"]] = follower.to_dict()
    return followers_dict
    # followers = User.query.filter(User.id.in_.user["followers"]).all()
    # return {follower.id: follower.to_dict() for follower in followers}
<<<<<<< HEAD
=======


@user_routes.route('/<int:id>/following')
def get_following(id):
    user = User.query.get(id).to_dict()
    following = User.query.filter(User.id.in_(user["following"])).all()
    following_dict = {}
    for followee in following:
        following_dict[followee.to_dict()["id"]] = followee.to_dict()
    return following_dict

# DELETE ONE FOLLOWER
@user_routes.route('/<int:id>/followers/<int:followerId>', methods=["DELETE"])
def delete_follower(id, followerId):
    user = User.query.get(id)
    follower = User.query.get(followerId)
    user.followers.remove(follower)
    db.session.commit()
    return "ok", 200
    #still working on this

# UNFOLLOW ONE
@user_routes.route('/<int:id>/following/<int:followedId>', methods=["DELETE"])
def delete_followed(id, followedId):
    user = User.query.get(id)
    followed = User.query.get(followedId)
    user.following.remove(followed)
    db.session.commit()
    return "ok", 200
    #still working on this

# FOLLOW ONE
@user_routes.route('/<int:id>/following/<int:followedId>', methods=["PUT"])
def add_followed(id, followedId):
    user = User.query.get(id)
    followed = User.query.get(followedId)
    user.following.append(followed)
    db.session.commit()
    return "ok", 200
    #still working on this


>>>>>>> 5a7a3f84776be445bb6b34c68279be3230bb6af1
