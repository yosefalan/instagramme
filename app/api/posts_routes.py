from flask import Blueprint
from flask_login import login_required
from app.models import Post, Photo


posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/all')
@login_required
def posts():
    posts = Post.query.all()
    photo = Photo.query.filter_by(post_id=1).all()
    print("********", Photo.query.filter_by(post_id=1).all())
    return posts[0].description


    # userId = session['_user_id']
    # # res = session.query(db.User).get(userId)
    # # res = follows.query.filter(follows.follower_id == userId)
    # # follows = db.User.query.join(db.follows).filter(userId == db.follows.follower_id)
    # res = User.query.join(follows).all()
    # print(res)
    # posts = db.Post.query.join(db.Like).join(db.Photo).filter(db.Post.user_id)
    # return dict.fromkeys(posts, "#")
