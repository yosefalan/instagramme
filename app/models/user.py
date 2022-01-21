from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from .follows import follows
from .post import Post
from .photos import Photo
from .likes import Like
from .comments import Comment
import datetime


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    profile_image = db.Column(db.String(255), default="http://mamba-instagramme.s3.amazonaws.com/profile_copy.jpg")
    hashed_password = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)

    followers = db.relationship(
        'User',
        secondary=follows,
        primaryjoin=(follows.c.follower_id==id),
        secondaryjoin=(follows.c.followed_id==id),
        backref=db.backref('following', lazy='dynamic'),
        lazy='dynamic'
    )

    # use a User query to get the signed in user and on that user object can we directly access "following"

    likes = db.relationship('Like', back_populates='user')
    posts = db.relationship('Post', back_populates='user')
    comments = db.relationship('Comment', back_populates='user')
    photos = db.relationship('Photo', back_populates='user')



    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        followers = [user.id for user in self.followers]
        followers.append(self.id)
        following = [user.id for user in self.following]
        following.append(self.id)
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_image': self.profile_image,
            'followers': followers,
            'following': following,
        }

    def to_mydict(self):
        return {
            'id': self.id,
            'username': self.username,
            'profile_image': self.profile_image if self.profile_image else None,
            'following': [followed.to_safe() for followed in self.following],
            'followers': [follower.to_safe() for follower in self.followers],
        }

    def to_safe(self):
        return {
            'id': self.id,
            'username': self.username,
            'profile_image': self.profile_image
        }