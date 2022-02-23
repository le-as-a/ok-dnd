import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { new_questionnaire } from "../../store/questionnaire";
import './preferencesettings.css';

const PreferenceSettings = ({user, questionnaire}) => {
    const userId = user?.id;
    const dispatch = useDispatch();
    const history = useHistory();
    const [expLvl, setExpLvl] = useState(1);
    const [themes, setThemes] = useState('');
    const [background, setBackground] = useState('');

    const onClick = async e => {
        e.preventDefault();
        const data = {
            exp_lvl: expLvl,
            themes,
            background,
            user_id: userId
        }
        await dispatch(new_questionnaire(data));
        history.push(`/users/${userId}`);
    }

    return (
        <div className="new-questionnaire">
            {!questionnaire && (
                <form id='new-q'>
                    <div id='exp-create'>
                        <label className="q-label" for='experience'>How much experience do you have with DND?</label> 
                        <input
                            name='experience'
                            value={expLvl}
                            placeholder='experience level...'
                            onChange={e => setExpLvl(e.target.value)}
                            type='number'
                            min='1'
                            max='3'
                            id='exp-input'
                        />
                    </div>
                    <div id='exp-lvls'>
                        <div className="el">
                            <u>Level 1 - Beginner:</u><br />
                            Never played before to played 1-2 short-lived campaigns.
                        </div><div className="el">
                            <u>Level 2 - Intermediate:</u><br />
                            Played a campaign or two for a while, still have some things to learn.
                        </div><div className="el">
                            <u>Level 3 - Advanced:</u><br />
                            Been playing for a few years, have done or interested in running my own campaign.
                        </div>
                    </div>
                    
                    <label className="q-label" for='themes'>What aspects of DND are you interested in?</label>
                    <input
                        name='themes'
                        value={themes}
                        placeholder='themes...'
                        onChange={e => setThemes(e.target.value)}
                        type='text'
                        id='theme-input'
                    />
                    <label className="q-label" for='background'>Tell us more about you as a player:</label>
                    <textarea
                        name='background'
                        value={background}
                        placeholder='Start writing here...'
                        onChange={e => setBackground(e.target.value)}
                        id='bg-input'
                    /><br />
                    <div id='q-create-b'>
                        <button className="pref-but" onClick={onClick}>Save</button> <NavLink to={`/users/${userId}`}><button className="pref-but">Skip</button></NavLink>
                    </div>
                </form>
            )}
            {questionnaire && <Redirect to={`/users/${userId}`} />}
        </div>
    );
}

export default PreferenceSettings;