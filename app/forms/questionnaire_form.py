from flask_wtf import FlaskForm
from wtforms import StringField, TextField, IntegerField
from wtforms.validators import DataRequired, NumberRange

class QuestionnaireForm(FlaskForm):
    exp_lvl = IntegerField(
        'exp_lvl', validators=[DataRequired(), NumberRange(1,3)]
    )
    themes = StringField(
        'themes', validators=[DataRequired()]
    )
    background = TextField(
        'background', validators=[DataRequired()]
    )
    user_id = IntegerField(
        'user_id', validators=[DataRequired()]
    )