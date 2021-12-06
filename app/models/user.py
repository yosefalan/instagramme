from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
from .follows import follows
from .post import Post
from .photos import Photo
from .likes import Like
from .comments import Comment


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    profile_image = db.Column(db.String(255))
    hashed_password = db.Column(db.String(255), nullable=False)

    followers = db.relationship(
        'User',
        secondary=follows,
        primaryjoin=(follows.c.follower_id==id),
        secondaryjoin=(follows.c.followed_id==id),
        backref=db.backref('following', lazy='dynamic'),
        lazy='dynamic'
    )

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
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }
