from flask import Blueprint, jsonify, session
from flask_login import login_required
from app.models import db, follows, User


# from app.models import Post

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/')
@login_required
def get_posts():
    userId = session['_user_id']
    # res = session.query(db.User).get(userId)
    # res = follows.query.filter(follows.follower_id == userId)
    # follows = db.User.query.join(db.follows).filter(userId == db.follows.follower_id)
    res = User.query.join(follows).all()
    print(res)
    # posts = db.Post.query.join(db.Like).join(db.Photo).filter(db.Post.user_id)
    return '1'
