from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post

posts_routes = Blueprint('posts', __name__)

@posts_routes.route('/')
@login_required
def get_posts():
    # posts = Post.query.filter(Post.user_id == )
    pass
