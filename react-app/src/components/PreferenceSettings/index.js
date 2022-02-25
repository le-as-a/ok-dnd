import React, { useState, useEffect } from "react";
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
    const [allErrors, setAllErrors] = useState([]);
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

    // theme classes
    const [puzzleClass, setPuzzleClass] = useState("theme-inactive");
    const [combatClass, setCombatClass] = useState("theme-inactive");
    const [storyClass, setStoryClass] = useState("theme-inactive");
    const [exploreClass, setExploreClass] = useState("theme-inactive");
    const [rpClass, setRpClass] = useState("theme-inactive");
    const [comedyClass, setComedyClass] = useState("theme-inactive");
    const [sandboxClass, setSandboxClass] = useState("theme-inactive");
    const [linearClass, setLinearClass] = useState("theme-inactive");
    const [choicesClass, setChoicesClass] = useState("theme-inactive");
    const [mhClass, setMhClass] = useState("theme-inactive");
    const [msClass, setMsClass] = useState("theme-inactive");
    const [charClass, setCharClass] = useState("theme-inactive");
    const [episodicClass, setEpisodicClass] = useState("theme-inactive");
    const [longtermClass, setLongtermClass] = useState("theme-inactive");

    const puzzleClick = (e) => {
        e.preventDefault();
        setIsPuzzle(!isPuzzle);
    }
    const combatClick = (e) => {
        e.preventDefault();
        setIsCombat(!isCombat);
    }
    const storyClick = (e) => {
        e.preventDefault();
        setIsStory(!isStory);
    }
    const exploreClick = (e) => {
        e.preventDefault();
        setIsExploration(!isExploration);
    }
    const rpClick = (e) => {
        e.preventDefault();
        setIsRoleplay(!isRoleplay);
    }
    const comedyClick = (e) => {
        e.preventDefault();
        setIsComedy(!isComedy);
    }
    const sandboxClick = (e) => {
        e.preventDefault();
        setIsSandbox(!isSandbox);
    }
    const linearClick = (e) => {
        e.preventDefault();
        setIsLinear(!isLinear);
    }
    const choicesClick = (e) => {
        e.preventDefault();
        setIsChoicesMatter(!isChoicesMatter);
    }
    const mhClick = (e) => {
        e.preventDefault();
        setIsMagicHeavy(!isMagicHeavy);
    }
    const msClick = (e) => {
        e.preventDefault();
        setIsMagicScarce(!isMagicScarce);
    }
    const charClick = (e) => {
        e.preventDefault();
        setIsCharacterDevelopment(!isCharacterDevelopment);
    }
    const episodicClick = (e) => {
        e.preventDefault();
        setIsEpisodic(!isEpisodic);
    }
    const longtermClick = (e) => {
        e.preventDefault();
        setIsLongterm(!isLongterm);
    }

    useEffect(e => {
        if (isPuzzle) setPuzzleClass("theme-active");
        else setPuzzleClass("theme-inactive");

        if (isCombat) setCombatClass("theme-active");
        else setCombatClass("theme-inactive");

        if (isStory) setStoryClass("theme-active");
        else setStoryClass("theme-inactive");

        if (isExploration) setExploreClass("theme-active");
        else setExploreClass("theme-inactive");

        if (isRoleplay) setRpClass("theme-active");
        else setRpClass("theme-inactive");

        if (isComedy) setComedyClass("theme-active");
        else setComedyClass("theme-inactive");

        if (isSandbox) setSandboxClass("theme-active");
        else setSandboxClass("theme-inactive");

        if (isLinear) setLinearClass("theme-active");
        else setLinearClass("theme-inactive");

        if (isChoicesMatter) setChoicesClass("theme-active");
        else setChoicesClass("theme-inactive");

        if (isMagicHeavy) setMhClass("theme-active");
        else setMhClass("theme-inactive");

        if (isMagicScarce) setMsClass("theme-active");
        else setMsClass("theme-inactive");

        if (isCharacterDevelopment) setCharClass("theme-active");
        else setCharClass("theme-inactive");

        if (isEpisodic) setEpisodicClass("theme-active");
        else setEpisodicClass("theme-inactive");

        if (isLongterm) setLongtermClass("theme-active");
        else setLongtermClass("theme-inactive");
    }, [isPuzzle, isCombat, isStory, isExploration, isRoleplay, 
        isComedy, isSandbox, isLinear, isChoicesMatter, isMagicHeavy, 
        isMagicScarce, isCharacterDevelopment, isEpisodic, isLongterm])

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

        let errors = [];
        let noSpaceTheme = themes.trim();
        if (expLvl < 1 || expLvl > 3) errors.push("Experience level required must be between 1-3.");
        if (!noSpaceTheme) errors.push("Must include at least one theme.");
        if (background.length < 3 || background.length > 500) errors.push("Background must be between 3 and 500 characters.");
        setAllErrors(errors);

        if (allErrors.length === 0) {
            const data = {
                exp_lvl: expLvl,
                themes,
                background,
                user_id: userId
            }
            await dispatch(new_questionnaire(data));
            history.push(`/users/${userId}`);
        } 
    }

    return (
        <div className="new-questionnaire">
            {!questionnaire && (
                <>
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
                            <button className={puzzleClass} onClick={puzzleClick}>Puzzles</button>
                            <button className={combatClass} onClick={combatClick}>Combat</button>
                            <button className={storyClass} onClick={storyClick}>Story</button>
                            <button className={exploreClass} onClick={exploreClick}>Exploration</button>
                            <button className={rpClass} onClick={rpClick}>Roleplay</button>
                            <button className={comedyClass} onClick={comedyClick}>Comedy</button>
                            <button className={sandboxClass} onClick={sandboxClick}>Sandbox</button>
                            <button className={linearClass} onClick={linearClick}>Linear</button>
                            <button className={choicesClass} onClick={choicesClick}>Choices Matter</button>
                            <button className={mhClass} onClick={mhClick}>Magic Heavy</button>
                            <button className={msClass} onClick={msClick}>Magic Scarce</button>
                            <button className={charClass} onClick={charClick}>Character Development</button>
                            <button className={episodicClass} onClick={episodicClick}>Episodic</button>
                            <button className={longtermClass} onClick={longtermClick}>Longterm</button>
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
                    <ul id='errors-list'>
                        {allErrors.map((e, i) => <li key={`${i}`}>{e}</li>)}
                    </ul>
                </>
            )}

            {questionnaire && <Redirect to={`/users/${userId}`} />}
        </div>
    )
}

export default PreferenceSettings;