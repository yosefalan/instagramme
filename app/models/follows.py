from .db import db




class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    other_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.Timestamp, nullable=False)
    updated_at = db.Column(db.Timestamp, nullable=False)

    user = db.relationship('User', back_populates='follows')
    other_user = db.relationship('User', back_populates='follows')
