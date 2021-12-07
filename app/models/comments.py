from .db import db
import datetime



class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    content = db.Column(db.String(255), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)
    updatedAt = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)

    user = db.relationship('User', back_populates='comments')
    posts = db.relationship('Post', back_populates='comments')
