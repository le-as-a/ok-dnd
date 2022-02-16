from .db import db
from flask_login import UserMixin

class Questionnaire(db.Model, UserMixin):
    __tablename__ = 'questionnaires'

    id = db.Column(db.Integer, primary_key=True)
    exp_lvl = db.Column(db.Integer, nullable=False)
    themes = db.Column(db.String, nullable=False)
    background = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, unique=True)

    users = db.relationship('User', back_populates='questionnaires')

    def to_dict(self):
        return {
            'id': self.id,
            'exp_lvl': self.exp_lvl,
            'themes': self.themes,
            'background': self.background,
            'user_id': self.user_id
        }