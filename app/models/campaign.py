from .db import db

class Campaign(db.Model):
    __tablename__ = 'campaigns'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    about = db.Column(db.Text, nullable=False)
    player_max = db.Column(db.Integer, nullable=False)
    exp_req = db.Column(db.Integer, nullable=False)
    themes = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    users = db.relationship('User', back_populates='campaigns')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'about': self.about,
            'player_max': self.player_max,
            'exp_req': self.exp_req,
            'themes': self.themes,
            'user_id': self.user_id
        }