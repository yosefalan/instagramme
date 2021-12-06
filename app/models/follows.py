from .db import db


follows = db.Table(
    'follows',
    db.Column('follower_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('followed_id', db.Integer, db.ForeignKey('users.id'))
)

# class Follow(db.Model):
#     __tablename__ = 'follows'

#     id = db.Column(db.Integer, primary_key=True)
#     other_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     createdAt = db.Column(db.DateTime, nullable=False)
#     updatedAt = db.Column(db.DateTime, nullable=False)

#     user = db.relationship('User', back_populates='follows')
#     other_user = db.relationship('User', back_populates='follows')
