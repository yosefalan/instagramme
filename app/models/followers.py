# from .db import db




# class Follower(db.Model):
#     __tablename__ = 'followers'

#     id = db.Column(db.Integer, primary_key=True)
#     other_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#     createdAt = db.Column(db.DateTime, nullable=False)
#     updatedAt = db.Column(db.DateTime, nullable=False)

#     user = db.relationship('User', back_populates='followers')
#     other_user = db.relationship('User', back_populates='followers')
