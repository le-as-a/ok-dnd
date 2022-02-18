// constants
const CREATE_CAMPAIGN = 'session/CREATE_CAMPAIGN';
const READ_ALL_CAMPAIGNS = 'session/READ_ALL_CAMPAIGNS';
const READ_USER_CAMPAIGNS = 'session/READ_USER_CAMPAIGNS';
const READ_CAMPAIGN = 'session/READ_CAMPAIGN';
const UPDATE_CAMPAIGN = 'session/UPDATE_CAMPAIGN';
const DELETE_CAMPAIGN = 'session/DELETE_CAMPAIGN';

const newCampaign = campaign => ({
    type: CREATE_CAMPAIGN,
    payload: campaign
});

export const create_campaign = 
({name, about, player_max, exp_req, themes, user_id}) => async dispatch => {
    const res = await fetch('/api/campaigns/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            about,
            player_max,
            exp_req,
            themes,
            user_id
        }),
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(newCampaign(data));
        return data;
    }
}

const getAllCampaigns = campaigns => ({
    type: READ_ALL_CAMPAIGNS,
    payload: campaigns
});

export const read_campaigns = () => async dispatch => {
    const res = await fetch(`/api/campaigns/`);
    if (res.ok) {
        const campaigns = await res.json();
        dispatch(getAllCampaigns(campaigns));
    }
}

const getUserCampaigns = campaigns => ({
    type: READ_USER_CAMPAIGNS,
    payload: campaigns
});

export const user_campaigns = user_id => async dispatch => {
    const res = await fetch(`/api/campaigns/${user_id}`);
    if (res.ok) {
        const campaigns = await res.json()
        dispatch(getUserCampaigns(campaigns));
    }
}

const oneCampaign = campaign => ({
    type: READ_CAMPAIGN,
    payload: campaign
});

export const show_campaign = campaign_id => async dispatch => {
    const res = await fetch(`/api/campaigns/${campaign_id}`);
    if (res.ok) {
        const campaign = await res.json();
        dispatch(oneCampaign(campaign));
        return campaign;
    }
}

const updateCampaign = campaign => ({
    type: UPDATE_CAMPAIGN,
    payload: campaign
});

export const update_campaign = ({ campaignId, name, about, player_max, exp_req, themes }) =>
async dispatch => {
    const res = await fetch(`/api/campaigns/${campaignId}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            about,
            player_max,
            exp_req,
            themes
        }),
    });
    if (res.ok) {
        const updated = await res.json();
        dispatch(updateCampaign(updated));
        return updated;
    }
}

const deleteCampaign = campaign_id => ({
    type: DELETE_CAMPAIGN,
    payload: campaign_id
});

export const delete_campaign = campaign_id => async dispatch => {
    const res = await fetch(`/api/campaigns/${campaign_id}/delete`, { method: 'DELETE' });
    if (res.ok) {
        dispatch(deleteCampaign(campaign_id));
    }

}

const initialState = {};
export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case CREATE_CAMPAIGN:
            newState = { ...state, [action.payload.id]: action.payload }
            return { ...newState };
        case READ_ALL_CAMPAIGNS:
            newState = { ...state, ...action.payload };
            return newState;
        case READ_USER_CAMPAIGNS:
            newState = { ...state, ...action.payload };
            return newState;
        case READ_CAMPAIGN:
            newState = { ...state, [action.payload.id]: action.payload };
            return { ...newState };
        case UPDATE_CAMPAIGN:
            newState = { ...state, [action.payload.id]: action.payload };
            return { ...newState };
        case DELETE_CAMPAIGN:
            newState = state;
            delete newState[action.payload.id];
            return newState;
        default:
            return state;
    }
}