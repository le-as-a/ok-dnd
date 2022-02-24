import './campaignpage.css';
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { update_campaign, delete_campaign } from '../../store/campaign';
import { useDispatch } from 'react-redux';


const CampaignPage = ({user, campaigns}) => {
    const userId = user?.id;
    const dispatch = useDispatch();
    const history = useHistory();
    const { campaignId } = useParams();
    const current = campaigns[campaignId];
    const [editStatus, setEditStatus] = useState(false);
    const [name, setName] = useState(current?.name);
    const [about, setAbout] = useState(current?.about);
    const [playerMax, setPlayerMax] = useState(current?.player_max);
    const [expReq, setExpReq] = useState(current?.exp_req);
    const [themes, setThemes] = useState(current?.themes);
    const [confirm, setConfirm] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [errors, setErrors] = useState([]);

    const editClick = e => {
        e.preventDefault();
        setEditStatus(true);
        setConfirm(false);
    }

    const saveClick = async e => {
        e.preventDefault();
        let errors = [];

        if (name.length < 3 || name.length > 30) errors.push("Name must be between 3-30 characters.");
        if (about.length < 3 || about.length > 500) errors.push("Description must be between 3-500 characters.");
        if (playerMax < 1 || playerMax > 8) errors.push("Player max must be between 1-8.");
        if (expReq < 1 || expReq > 3) errors.push("Experience level required must be between 1-3.");
        if (!themes) errors.push("Must include at least one theme.");

        const updated = {
            campaignId,
            name,
            about,
            player_max: playerMax,
            exp_req: expReq,
            themes
        }

        if (errors.length === 0) {
            await dispatch(update_campaign(updated))
            setEditStatus(false);
            setConfirm(false);
        } else {
            setShowErrors(true);
            setErrors(errors);
        }
    }

    const delClick = async e => {
        e.preventDefault();
        if (confirm) {
            await dispatch(delete_campaign(current?.id));
            history.push(`/users/${userId}/campaigns`);
        }
        setConfirm(true);
        setEditStatus(false);
    }

    if (!user) return null;

    return (
        <div className='single-campaign'>
            <ul type='none'>
                <li><u>Name:</u> {editStatus ? (
                    <input
                        placeholder={`${current?.name}`}
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type='text'
                        id='name-input'
                    />
                ) : current?.name}</li>
                <li><u>About:</u><br />
                    {editStatus ? (
                        <textarea
                            placeholder={`${current?.about}`}
                            name='about'
                            value={about}
                            onChange={e => setAbout(e.target.value)}
                            id='desc-input'
                        />
                    ) : current?.about}
                </li>
                <li><u>Player Max:</u> {editStatus ? (
                    <input
                        placeholder={`${current?.player_max}`}
                        name='player_max'
                        value={playerMax}
                        onChange={e => setPlayerMax(e.target.value)}
                        type='number'
                        min='1'
                        max='8'
                        id='pmax-input'
                    />
                ) : current?.player_max}</li>
                <li><u>Experience Level Required:</u> {editStatus ? (
                    <input
                        placeholder={`${current?.exp_req}`}
                        name='exp_req'
                        value={expReq}
                        onChange={e => setExpReq(e.target.value)}
                        type='number'
                        min='1'
                        max='3'
                        id='lvl-req-input'
                    />
                ) : current?.exp_req}</li>
                <li><u>Themes:</u><br />
                    {editStatus ? (
                        <input
                            placeholder={`${current?.themes}`}
                            name='themes'
                            value={themes}
                            onChange={e => setThemes(e.target.value)}
                            type='text'
                            id='campaign-themes-input'
                        />
                    ) : current?.themes}
                </li>
            </ul>
            {user?.id === current?.user_id && (
                <>
                    {editStatus ? <button className='pref-but' onClick={saveClick}>Save</button> : <button className='pref-but' onClick={editClick}>Edit</button> }
                    <button className='pref-but' onClick={delClick}>Delete</button>
                    {confirm && <p>Are you sure you want to delete this campaign?</p>}
                </>
            )}
            <ul id='errors-list' type='none'>
                {showErrors && errors.map((e, i) => <li key={`${i}`}>{e}</li>)}
            </ul>
        </div>
    );
}
export default CampaignPage;