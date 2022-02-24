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
    const [showErrors, setShowErrors] = useState(false);
    const [errors, setErrors] = useState([]);
    
    const onClick = async e => {
        e.preventDefault();
        let errors = [];
        const data = {
            name,
            about,
            player_max: playerMax,
            exp_req: expReq,
            themes,
            user_id: userId
        };

        if (name.length < 3 || name.length > 30) errors.push("Name must be between 3-30 characters.");
        if (about.length < 3 || about.length > 500) errors.push("Description must be between 3-500 characters.");
        if (playerMax < 1 || playerMax > 8) errors.push("Player max must be between 1-8.");
        if (expReq < 1 || expReq > 3) errors.push("Experience level required must be between 1-3.");
        if (!themes) errors.push("Must include at least one theme.");

        if (errors.length === 0) {
            setShowErrors(false);
            await dispatch(create_campaign(data));
            history.push(`/users/${userId}/campaigns`);
        } else {
            setShowErrors(true);
            console.log(errors);
        }

        setErrors(errors);
    }

    return (
        <div className='new-campaign-page'>
            <form id='campaign-create-form'>
                <div id='campaign-name-input'>
                    <label for='name' className='cc-labels'>
                        Campaign Name: 
                    </label><br />
                    <input
                        name='name'
                        value={name}
                        placeholder='name of the campaign...'
                        onChange={e => setName(e.target.value)}
                        type='text'
                        id='input-box-name'
                    />
                </div><br />
                <label for='about' className='cc-labels'>
                    Details:
                </label><br />
                <textarea
                    name='about'
                    value={about}
                    placeholder='details of campaign...'
                    onChange={e => setAbout(e.target.value)}
                    id='about-input'
                /><br />
                <div id='maxes-container'>
                    <div id='pm-container'>
                        <label for='player_max' className='cc-labels'>
                            Player Max: 
                        </label><br />
                        <input
                            name='player_max'
                            value={playerMax}
                            onChange={e => setPlayerMax(e.target.value)}
                            type='number'
                            min='1'
                            max='8'
                            className='number-style'
                        />
                    </div>
                    <div id='er-container'>
                        <label for='exp_req' className='cc-labels'>
                            Experience Level Required: 
                        </label><br />
                        <input
                            name='exp_req'
                            value={expReq}
                            onChange={e => setExpReq(e.target.value)}
                            type='number'
                            min='1'
                            max='3'
                            className='number-style'
                        />
                    </div>
                </div><br />
                <label for='themes' className='cc-labels'>
                    Campaign Themes: 
                </label><br />
                <input
                    name='themes'
                    value={themes}
                    placeholder='ex: combat, exploration, puzzles...'
                    onChange={e => setThemes(e.target.value)}
                    type='text'
                    id='themes-input'
                /><br /><br />
                <button id='create-button' onClick={onClick}>Create</button>
            </form>
            {showErrors && (
                <ul id='errors-list' type='none'>
                    {errors.map((e, i) => <li key={`${i}`}>{e}</li>)}
                </ul>
            )}
        </div>
    );
}

export default NewCampaign;