from .db import db




class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.Timestamp, nullable=False)
    updated_at = db.Column(db.Timestamp, nullable=False)
    
    user = db.relationship('User', back_populates='posts')
