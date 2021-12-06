from .db import db




class Photo(db.Model):
    __tablename__ = 'photos'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    created_at = db.Column(db.Timestamp, nullable=False)
    updated_at = db.Column(db.Timestamp, nullable=False)

    user = db.relationship('User', back_populates='photos')
    post = db.relationship('Post', back_populates='photos')
