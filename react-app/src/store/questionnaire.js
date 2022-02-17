// constants
const NEW_Q = 'session/NEW_Q';
const GET_Q = 'session/GET_Q';
const EDIT_Q = 'session/EDIT_Q';
const DEL_Q = 'session/DEL_Q';

const newQue = que => ({
    type: NEW_Q,
    payload: que
});

export const new_questionnaire = (exp_lvl, themes, background) => async dispatch => {
    const res = await fetch('/api/questionnaire/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            exp_lvl,
            themes,
            background,
        }),
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(newQue(data));
        return data;
    }
}

const getQue = que => ({
    type: GET_Q,
    payload: que
});

export const get_questionnaire = (user_id) => async dispatch => {
    const res = await fetch(`/api/questionnaire/${user_id}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(getQue(data));
        return data;
    }
}

const editQue = que => ({
    type: EDIT_Q,
    payload: que
});

export const edit_questionnaire = ({ exp_lvl, themes, background, user_id }) => async dispatch => {
    const res = await fetch(`/api/questionnaire/${user_id}/edit`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            exp_lvl,
            themes,
            background
        }),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(editQue(data));
        return data;
    }
}

const delQue = que => ({
    type: DEL_Q,
    payload: que
});

export const del_questionnaire = (user_id) => async dispatch => {
    const res = await fetch(`/api/questionnaire/${user_id}/delete`, { method: 'DELETE' });
    if (res.ok) {
        const data = res.json();
        dispatch(delQue(data));
        return data;
    }
}

const initialState = { questionnaire: null };
export default function reducer(state = initialState, action) {
    let newState;
    switch(action.type) {
        case NEW_Q:
            newState = { ...state, questionnaire: action.payload };
            return newState;
        case GET_Q:
            newState = { ...state, questionnaire: action.payload };
            return newState;
        case EDIT_Q:
            newState = { ...state, questionnaire: action.payload };
            return newState;
        case DEL_Q:
            return { questionnaire: null };
        default:
            return state;
    }
}