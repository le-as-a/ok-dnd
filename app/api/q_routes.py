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
        user_id=form.data['user_id'])
    db.session.add(questionnaire)
    db.session.commit()
    return questionnaire.to_dict()


@q_routes.route('/<user_id>')
def get(user_id):
    questionnaire = Questionnaire.query.filter(Questionnaire.user_id == user_id).first()
    return questionnaire.to_dict()

@q_routes.route('/<user_id>/edit', methods=['PUT'])
@login_required
def edit(user_id):
    questionnaire = Questionnaire.query.filter(Questionnaire.user_id == user_id).first()
    q_data = request.json

    questionnaire.exp_lvl = q_data['exp_lvl']
    questionnaire.themes = q_data['themes']
    questionnaire.background = q_data['background']
    db.session.commit()

    return jsonify(questionnaire.to_dict())

@q_routes.route('/delete', methods=['DELETE'])
@login_required
def delete():
    userId = current_user.id
    questionnaire = Questionnaire.query.filter(Questionnaire.user_id == userId).first()
    q_id = questionnaire.id
    db.session.delete(questionnaire)
    db.session.commit()
    return q_id