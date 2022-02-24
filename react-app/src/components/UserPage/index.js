import React, { useState } from 'react';
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
  const [themes, setThemes] = useState(questionnaire?.themes);
  const [background, setBackground] = useState(questionnaire?.background);
  const [confirm, setConfirm] = useState(false);

  let currThemes = questionnaire?.themes;
  let showThemes = "";

  if (currThemes) {
    currThemes = currThemes.split(" ");
    
    if (currThemes.includes("puzzles")) showThemes += "| Puzzles |";
    if (currThemes.includes ("combat")) showThemes += "| Combat |";
    if (currThemes.includes("story")) showThemes += "| Story |";
    if (currThemes.includes("exploration")) showThemes += "| Exploration |";
    if (currThemes.includes ("roleplay")) showThemes += "| Roleplay |";
    if (currThemes.includes("comedy")) showThemes += "| Comedy |";
    if (currThemes.includes("sandbox")) showThemes += "| Sandbox |";
    if (currThemes.includes("linear")) showThemes += "| Linear |";
    if (currThemes.includes("choices")) showThemes += "| Choices |";
    if (currThemes.includes("magicH")) showThemes += "| Magic Heavy |";
    if (currThemes.includes("magicS")) showThemes += "| Magic Scarce |";
    if (currThemes.includes("charDev")) showThemes += "| Character Development |";
    if (currThemes.includes("episodic")) showThemes += "| Episodic |";
    if (currThemes.includes("longterm")) showThemes += "| Longterm |";
  }

  const editClick = e => {
    e.preventDefault();
    setEditStatus(true);
    setConfirm(false);
  }

  const saveEdit = async e => {
    e.preventDefault();
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
                  <input
                    placeholder={`${questionnaire?.themes}`}
                    name='themes'
                    value={themes}
                    onChange={e => setThemes(e.target.value)}
                    type='text'
                    id='theme-edit'
                  />
                ) : showThemes}

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
