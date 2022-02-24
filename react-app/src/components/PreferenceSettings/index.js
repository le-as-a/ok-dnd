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
    const [background, setBackground] = useState('');
    let themes = ' ';

    // theme buttons
    const [isPuzzle, setIsPuzzle] = useState(false);
    const [isCombat, setIsCombat] = useState(false);
    const [isStory, setIsStory] = useState(false);
    const [isExploration, setIsExploration] = useState(false);
    const [isRoleplay, setIsRoleplay] = useState(false);
    const [isComedy, setIsComedy] = useState(false);
    const [isSandbox, setIsSandbox] = useState(false);
    const [isLinear, setIsLinear] = useState(false);
    const [isChoicesMatter, setIsChoicesMatter] = useState(false);
    const [isMagicHeavy, setIsMagicHeavy] = useState(false);
    const [isMagicScarce, setIsMagicScarce] = useState(false);
    const [isCharacterDevelopment, setIsCharacterDevelopment] = useState(false);
    const [isEpisodic, setIsEpisodic] = useState(false);
    const [isLongterm, setIsLongterm] = useState(false);

    const puzzleClick = () => setIsPuzzle(!isPuzzle);
    const combatClick = () => setIsCombat(!isCombat);
    const storyClick = () => setIsStory(!isStory);
    const exploreClick = () => setIsExploration(!isExploration);
    const rpClick = () => setIsRoleplay(!isRoleplay);
    const comedyClick = () => setIsComedy(!isComedy);
    const sandboxClick = () => setIsSandbox(!isSandbox);
    const linearClick = () => setIsLinear(!isLinear);
    const choicesClick = () => setIsChoicesMatter(!isChoicesMatter);
    const mhClick = () => setIsMagicHeavy(!isMagicHeavy);
    const msClick = () => setIsMagicScarce(!isMagicScarce);
    const charClick = () => setIsCharacterDevelopment(!isCharacterDevelopment);
    const episodicClick = () => setIsEpisodic(!isEpisodic);
    const longtermClick = () => setIsLongterm(!isLongterm);

    const onClick = async e => {
        e.preventDefault();
        if (isPuzzle) themes += "puzzles ";
        if (isCombat) themes += "combat ";
        if (isStory) themes += "story ";
        if (isExploration) themes += "exploration ";
        if (isRoleplay) themes += "roleplay ";
        if (isComedy) themes += "comedy ";
        if (isSandbox) themes += "sandbox ";
        if (isLinear) themes += "linear ";
        if (isChoicesMatter) themes += "choices ";
        if (isMagicHeavy) themes += "magicH ";
        if (isMagicScarce) themes += "magicS ";
        if (isCharacterDevelopment) themes += "charDev ";
        if (isEpisodic) themes += "episodic ";
        if (isLongterm) themes += "longterm ";

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
                    <div id='theme-buttons'>
                        <button>Puzzles</button>
                        <button>Combat</button>
                        <button>Story</button>
                        <button>Exploration</button>
                        <button>Roleplay</button>
                        <button>Comedy</button>
                        <button>Sandbox</button>
                        <button>Linear</button>
                        <button>Choices Matter</button>
                        <button>Magic Heavy</button>
                        <button>Magic Scarce</button>
                        <button>Character Development</button>
                        <button>Episodic</button>
                        <button>Longterm</button>
                    </div>
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
    )
}

export default PreferenceSettings;