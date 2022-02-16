import collections
from flask import Blueprint, request, jsonify
from app.forms.campaign_form import CampaignForm
from app.models import db, Campaign

campaign_routes = Blueprint('campaigns', __name__)

@campaign_routes.route('/')
def view_campaigns():
    all_campaigns = Campaign.query.all()
    collection = {}
    for c in all_campaigns:
        collection[c.id] = c.to_dict()
    return collection
    

@campaign_routes.route('/new', methods=['POST'])
def new():
    form = CampaignForm()
    campaign = Campaign(
        name=form.data['name'],
        about=form.data['about'],
        player_max=form.data['player_max'],
        exp_req=form.data['exp_req'],
        themes=form.data['themes'],
        user_id=form.data['user_id']
    )
    db.session.add(campaign)
    db.session.commit()
    return campaign.to_dict()

@campaign_routes.route('/<campaign_id>')
def info(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    return campaign

@campaign_routes.route('/<user_id>')
def all(user_id):
    campaigns = Campaign.query.filter(Campaign.user_id == user_id)
    collection = {}
    for c in campaigns:
        collection[c.id] = c.to_dict()
    return collection

@campaign_routes.route('/<campaign_id>/edit', methods=['PUT'])
def edit(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    data = request.json

    campaign.name = data.name
    campaign.about = data.about
    campaign.player_max = data.player_max
    campaign.exp_req = data.exp_req
    campaign.themes = data.themes
    db.session.commit()

    return campaign.to_dict()

@campaign_routes.route('/<campaign_id>/delete', methods=['DELETE'])
def delete(campaign_id):
    campaign = Campaign.query.get(campaign_id)
    db.session.delete(campaign)
    db.session.commit()
    return campaign_id