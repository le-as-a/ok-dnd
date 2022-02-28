import './campaignpage.css';
import React, { useState, useEffect } from 'react';
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
    const [confirm, setConfirm] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [errors, setErrors] = useState([]);

    let themes = " ";
    let currThemes = current?.themes;
    let showThemes = [];
    let numThemes = 0;

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

        if (!editStatus && !name) setName(current?.name);
        if (!editStatus && !about) setAbout(current?.about);
    }, [isPuzzle, isCombat, isStory, isExploration, isRoleplay,
        isComedy, isSandbox, isLinear, isChoicesMatter, isMagicHeavy,
        isMagicScarce, isCharacterDevelopment, isEpisodic, isLongterm, 
        editStatus, name, about, current])

    if (currThemes) {
        currThemes = currThemes.split(" ");

        if (currThemes.includes("puzzles")) showThemes.push("Puzzles");
        if (currThemes.includes("combat")) showThemes.push("Combat");
        if (currThemes.includes("story")) showThemes.push("Story");
        if (currThemes.includes("exploration")) showThemes.push("Exploration");
        if (currThemes.includes("roleplay")) showThemes.push("Roleplay");
        if (currThemes.includes("comedy")) showThemes.push("Comedy");
        if (currThemes.includes("sandbox")) showThemes.push("Sandbox");
        if (currThemes.includes("linear")) showThemes.push("Linear");
        if (currThemes.includes("choices")) showThemes.push("Choices Matter");
        if (currThemes.includes("magicH")) showThemes.push("Magic Heavy");
        if (currThemes.includes("magicS")) showThemes.push("Magic Scarce");
        if (currThemes.includes("charDev")) showThemes.push("Character Development");
        if (currThemes.includes("episodic")) showThemes.push("Episodic");
        if (currThemes.includes("longterm")) showThemes.push("Longterm");
        numThemes = showThemes.length - 1;
    }

    const editClick = e => {
        e.preventDefault();

        if (currThemes.includes("puzzles")) setIsPuzzle(true);
        if (currThemes.includes("combat")) setIsCombat(true);
        if (currThemes.includes("story")) setIsStory(true);
        if (currThemes.includes("exploration")) setIsExploration(true);
        if (currThemes.includes("roleplay")) setIsRoleplay(true);
        if (currThemes.includes("comedy")) setIsComedy(true);
        if (currThemes.includes("sandbox")) setIsSandbox(true);
        if (currThemes.includes("linear")) setIsLinear(true);
        if (currThemes.includes("choices")) setIsChoicesMatter(true);
        if (currThemes.includes("magicH")) setIsMagicHeavy(true);
        if (currThemes.includes("magicS")) setIsMagicScarce(true);
        if (currThemes.includes("charDev")) setIsCharacterDevelopment(true);
        if (currThemes.includes("episodic")) setIsEpisodic(true);
        if (currThemes.includes("longterm")) setIsLongterm(true);

        setEditStatus(true);
        setConfirm(false);
    }

    const saveClick = async e => {
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
        let noSpacesTheme = themes.trim();
        if (name.length < 3 || name.length > 30) errors.push("Name must be between 3-30 characters.");
        if (about.length < 3 || about.length > 500) errors.push("Description must be between 3-500 characters.");
        if (playerMax < 1 || playerMax > 8) errors.push("Player max must be between 1-8.");
        if (expReq < 1 || expReq > 3) errors.push("Experience level required must be between 1-3.");
        if (!noSpacesTheme) errors.push("Must include at least one theme.");

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

    const cancelClick = () => {
        setConfirm(false);
        setEditStatus(false);
        setShowErrors(false);
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
                    ) : showThemes.map((theme, iter) => {
                        if (iter !== numThemes) return <span>{theme}, </span>;
                        return <span>{theme}</span>
                    })}
                </li>
            </ul>
            {user?.id === current?.user_id && (
                <>
                    {editStatus ? <><button className='pref-but' onClick={saveClick}>Save</button><button className='pref-but' onClick={cancelClick}>Cancel</button></> : <button className='pref-but' onClick={editClick}>Edit</button> }
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