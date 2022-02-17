from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Questionnaire, db
from app.forms import QuestionnaireForm

q_routes = Blueprint('questionnaire', __name__)

@q_routes.route('/new', methods=['POST'])
def new():
    form = QuestionnaireForm()
    questionnaire = Questionnaire(
        exp_lvl=form.data['exp_lvl'],
        themes=form.data['themes'],
        background=form.data['background'],
        user_id=form.data['user_id']
    )
    db.session.add(questionnaire)
    db.session.commit()
    return questionnaire.to_dict()


@q_routes.route('/<user_id>/')
def get(user_id):
    questionnaire = Questionnaire.query.filter(Questionnaire.user_id == user_id).first()
    return questionnaire.to_dict()

@q_routes.route('/<user_id>/edit', methods=['PUT'])
def edit(user_id):
    form = QuestionnaireForm()
    questionnaire = Questionnaire.query.filter(Questionnaire.user_id == user_id).first()

    questionnaire.exp_lvl = form.data['exp_lvl']
    questionnaire.themes = form.data['themes']
    questionnaire.background = form.data['background']
    db.session.commit()

    return questionnaire.to_dict()

@q_routes.route('/<user_id>/delete', methods=['DELETE'])
def delete(user_id):
    questionnaire = Questionnaire.query.filter(Questionnaire.user_id == user_id).first()
    q_id = questionnaire.id
    db.session.delete(questionnaire)
    db.session.commit()
    return questionnaire.to_dict()