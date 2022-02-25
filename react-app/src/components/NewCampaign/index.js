import './newcampaign.css';
import React, { useState, useEffect } from 'react';
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
    const [showErrors, setShowErrors] = useState(false);
    const [errors, setErrors] = useState([]);
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
        let errors = [];
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
            name,
            about,
            player_max: playerMax,
            exp_req: expReq,
            themes,
            user_id: userId
        };
        let noSpacesTheme = themes.trim();
        if (name.length < 3 || name.length > 30) errors.push("Name must be between 3-30 characters.");
        if (about.length < 3 || about.length > 500) errors.push("Description must be between 3-500 characters.");
        if (playerMax < 1 || playerMax > 8) errors.push("Player max must be between 1-8.");
        if (expReq < 1 || expReq > 3) errors.push("Experience level required must be between 1-3.");
        if (!noSpacesTheme) errors.push("Must include at least one theme.");

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