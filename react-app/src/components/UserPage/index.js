import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { edit_questionnaire, del_questionnaire } from '../../store/questionnaire';
import './userpage.css';

function UserPage({user}) {
  const questionnaire = useSelector(state => state.questionnaire.questionnaire);
  const dispatch = useDispatch();
  const userId = user?.id;
  const [editStatus, setEditStatus] = useState(false);
  const [expLvl, setExpLvl] = useState(questionnaire?.exp_lvl);
  const [background, setBackground] = useState(questionnaire?.background);
  const [confirm, setConfirm] = useState(false);
  
  let themes = " ";
  let currThemes = questionnaire?.themes;
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
  }, [isPuzzle, isCombat, isStory, isExploration, isRoleplay,
    isComedy, isSandbox, isLinear, isChoicesMatter, isMagicHeavy,
    isMagicScarce, isCharacterDevelopment, isEpisodic, isLongterm])


  if (currThemes) {
    currThemes = currThemes.split(" ");
    
    if (currThemes.includes("puzzles")) showThemes.push("Puzzles");
    if (currThemes.includes ("combat")) showThemes.push("Combat");
    if (currThemes.includes("story")) showThemes.push("Story");
    if (currThemes.includes("exploration")) showThemes.push("Exploration");
    if (currThemes.includes ("roleplay")) showThemes.push("Roleplay");
    if (currThemes.includes("comedy")) showThemes.push("Comedy");
    if (currThemes.includes("sandbox")) showThemes.push("Sandbox");
    if (currThemes.includes("linear")) showThemes.push("Linear");
    if (currThemes.includes("choices")) showThemes.push("Choices");
    if (currThemes.includes("magicH")) showThemes.push("Magic Heavy");
    if (currThemes.includes("magicS")) showThemes.push("Magic Scarce");
    if (currThemes.includes("charDev")) showThemes.push("Character Development");
    if (currThemes.includes("episodic")) showThemes.push("Episodic");
    if (currThemes.includes("longterm")) showThemes.push("Longterm");
    numThemes = showThemes.length - 1;
  }

  console.log(currThemes)
  
  const saveEdit = async e => {
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
    
    const updated = {
      exp_lvl: expLvl,
      themes,
      background,
      user_id: userId
    }
    await dispatch(edit_questionnaire(updated));
    setEditStatus(false);
    setConfirm(false);
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

  const delClick = async e => {
    e.preventDefault();
    if (confirm) await dispatch(del_questionnaire(userId));
    else {
      setConfirm(true);
      setEditStatus(false);
    }
  }
  
  if (!user) {
    return null;
  }
  
  return (
    <div className='user'>
      <div className='about-user'>
        <div className='user-info'>
          <u>Username:</u> <span>{user?.username}</span><br />
          <u>Email Address:</u> <span>{user?.email}</span>
        </div>
        <div className='user-background'>
          <u>Background:</u><br />
          {editStatus ? (
            <textarea
              placeholder={`${questionnaire?.background}`}
              name='background'
              value={background}
              onChange={e => setBackground(e.target.value)}
              type='text'
              id='user-bg'
            />
          ) : questionnaire?.background ? questionnaire.background : <span>Nothing here right now...</span>}
        </div>
      </div>
      <div className='preference-settings'>
        {questionnaire ? (
          <>
            <ul type='none'>
              <li><h3>Preferences:</h3></li>
              <li>
                <u>Experience Level:</u> {editStatus ? (
                  <input
                    name='exp_lvl'
                    value={expLvl}
                    onChange={e => setExpLvl(e.target.value)}
                    type='number'
                    min='1'
                    max='3'
                    id='exp-lvl'
                  />
                ) : questionnaire?.exp_lvl}
              </li>
              <li>
                <u>Preferred Themes:</u><br />
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
            <div className='pref-buttons'>
              {editStatus ? <button onClick={saveEdit} className='user-buttons'>Save</button> : <button onClick={editClick} className='user-buttons' id='edit-space'>Edit</button>} <button onClick={delClick} className='user-buttons'>Delete</button>
              {confirm && <p>Are you sure you want to delete your preferences?</p>}
            </div>
          </>) : (
            <>
              <p>Oops! You don't have any preferences set.</p>
              <NavLink to={`/users/${userId}/questionnaire/new`} id='new-pref'>
                Fill out your preferences here.
              </NavLink>
            </>
          )}
      </div>
    </div>
  );
}
export default UserPage;
