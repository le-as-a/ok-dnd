from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextField
from wtforms.validators import DataRequired, NumberRange

class CampaignForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired()]
    )
    about = TextField(
        'about', validators=[DataRequired()]
    )
    player_max = IntegerField(
        'player_max', validators=[DataRequired(), NumberRange(1,8)]
    )
    exp_req = IntegerField(
        'exp_req', validators=[DataRequired(), NumberRange(1,3)]
    )
    themes = StringField(
        'themes', validators=[DataRequired()]
    )
    user_id = IntegerField(
        'user_id', validators=[DataRequired()]
    )