import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { new_questionnaire } from "../../store/questionnaire";

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
        <>
            {!questionnaire && (
                <form>
                    <legend>Set your preferences OR <NavLink to={`/users/${userId}`}>Skip for now</NavLink></legend>
                    <label for='experience'>How much experience do you have with DND?</label> <input
                        name='experience'
                        value={expLvl}
                        placeholder='experience level...'
                        onChange={e => setExpLvl(e.target.value)}
                        type='number'
                        min='1'
                        max='3'
                    /><br />
                    <strong><u>Level 1 - Beginner:</u></strong> <br />
                    Never played before to played 1-2 short-lived campaigns.<br />
                    <strong><u>Level 2 - Intermediate:</u></strong> <br />
                    Played a campaign or two for a while, still have some things to learn.<br />
                    <strong><u>Level 3 - Advanced:</u></strong> <br />
                    Been playing for a few years, comfortable with rules, have done or interested in running my own campaign.<br />
                    
                    <hr />
                    <label for='themes'>What aspects of DND are you interested in?</label>
                    <input
                        name='themes'
                        value={themes}
                        placeholder='themes...'
                        onChange={e => setThemes(e.target.value)}
                        type='text'
                    />
                    <hr />
                    <label for='background'>Tell us more about you as a player:</label><br />
                    <textarea
                        name='background'
                        value={background}
                        placeholder='Start writing here...'
                        onChange={e => setBackground(e.target.value)}
                    /><br />
                    <button onClick={onClick}>Save</button>
                </form>
            )}
            {questionnaire && <Redirect to={`/users/${userId}`} />}
        </>
    );
}

export default PreferenceSettings;