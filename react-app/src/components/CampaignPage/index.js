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

    const editClick = e => {
        e.preventDefault();
        setEditStatus(true);
        setConfirm(false);
    }

    const saveClick = async e => {
        e.preventDefault();
        const updated = {
            campaignId,
            name,
            about,
            player_max: playerMax,
            exp_req: expReq,
            themes
        }
        await dispatch(update_campaign(updated))
        setEditStatus(false);
        setConfirm(false);
    }

    const delClick = async e => {
        e.preventDefault();
        if (confirm) {
            await dispatch(delete_campaign(current?.id));
            history.push(`/users/${userId}/campaigns`);
        }
        setConfirm(true);
    }

    if (!user) return null;

    return (
        <div>
            <ul>
                <li><u>Name:</u> {editStatus ? (
                    <input
                        placeholder={`${current?.name}`}
                        name='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type='text'
                    />
                ) : current?.name}</li>
                <li><u>About:</u><br />
                    {editStatus ? (
                        <textarea
                            placeholder={`${current?.about}`}
                            name='about'
                            value={about}
                            onChange={e => setAbout(e.target.value)}
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
                        />
                    ) : current?.themes}
                </li>
            </ul>
            {user?.id === current?.user_id && (
                <>
                    {editStatus ? <button onClick={saveClick}>Save</button> : <button onClick={editClick}>Edit</button> }
                    <button onClick={delClick}>Delete</button>
                    {confirm && <p>Are you sure you want to delete this campaign?</p>}
                </>
            )}
        </div>
    );
}
export default CampaignPage;