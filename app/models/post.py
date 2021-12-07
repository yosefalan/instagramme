from .db import db
from .follows import follows
from .photos import Photo
from .likes import Like
from .comments import Comment
from SQLAlchemy import DateTime
import datetime

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(DateTime, default=datetime.datetime.now)
    updatedAt = db.Column(DateTime, default=datetime.datetime.now)

    user = db.relationship('User', back_populates='posts')
    likes = db.relationship('Like', back_populates='posts')
    comments = db.relationship('Comment', back_populates='posts')
    photos = db.relationship('Photo', back_populates='posts')
