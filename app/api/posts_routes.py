from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post

posts_routes = Blueprint('posts', __name__)
