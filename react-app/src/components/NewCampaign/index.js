import './newcampaign.css';
import React, { useState } from 'react';
import { create_campaign } from '../../store/campaign';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const NewCampaign = ({user}) => {
    const userId = user?.id;
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [playerMax, setPlayerMax] = useState(1);
    const [expReq, setExpReq] = useState(1);
    const [themes, setThemes] = useState('');

    const onClick = async e => {
        e.preventDefault();
        const data = {
            name,
            about,
            player_max: playerMax,
            exp_req: expReq,
            themes,
            user_id: userId
        }

        await dispatch(create_campaign(data));
        history.push(`/users/${userId}/campaigns`);
    }

    return (
        <>
            <form>
                <label for='name'>
                    Campaign Name: 
                </label><br />
                <input
                    name='name'
                    value={name}
                    placeholder='name of the campaign...'
                    onChange={e => setName(e.target.value)}
                    type='text'
                /><br /><br />
                <label for='about'>
                    Details:
                </label><br />
                <textarea
                    name='about'
                    value={about}
                    placeholder='details of campaign...'
                    onChange={e => setAbout(e.target.value)}
                /><br /><br />
                <label for='player_max'>
                    Player Max: 
                </label><br />
                <input
                    name='player_max'
                    value={playerMax}
                    onChange={e => setPlayerMax(e.target.value)}
                    type='number'
                    min='1'
                    max='8'
                /><br /><br />
                <label for='exp_req'>
                    Experience Level Required: 
                </label><br />
                <input
                    name='exp_req'
                    value={expReq}
                    onChange={e => setExpReq(e.target.value)}
                    type='number'
                    min='1'
                    max='3'
                /><br /><br />
                <label for='themes'>
                    Campaign Themes: 
                </label><br />
                <input
                    name='themes'
                    value={themes}
                    placeholder='ex: combat, exploration, puzzles...'
                    onChange={e => setThemes(e.target.value)}
                    type='text'
                /><br /><br />
                <button onClick={onClick}>Create Campaign</button>
            </form>
        </>
    );
}

export default NewCampaign;