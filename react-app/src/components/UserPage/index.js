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

  const editClick = e => {
    e.preventDefault();
    setEditStatus(true);
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
  }

  const delClick = async e => {
    e.preventDefault();
    await dispatch(del_questionnaire(userId));
  }
  
  if (!user) {
    return null;
  }
  
  return (
    <>
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      {questionnaire && (
        <>
          <li>
            <strong>Experience Level</strong> {editStatus ? (
              <input
                placeholder={`${questionnaire?.exp_lvl}`}
                name='exp_lvl'
                value={expLvl}
                onChange={e => setExpLvl(e.target.value)}
                type='number'
              />
            ) : questionnaire?.exp_lvl}
          </li>
          <li>
            <strong>Themes</strong> {editStatus ? (
              <input
                placeholder={`${questionnaire?.themes}`}
                name='themes'
                value={themes}
                onChange={e => setThemes(e.target.value)}
                type='text'
              />
            ) : questionnaire?.themes}
          </li>
          <li>
            <strong>Background</strong> {editStatus ? (
              <input
                placeholder={`${questionnaire?.background}`}
                name='background'
                value={background}
                onChange={e => setBackground(e.target.value)}
                type='text'
              />
            ) : questionnaire?.background}
          </li>
          {editStatus ? <button onClick={saveEdit}>Save</button> : <button onClick={editClick}>Edit</button>} <button onClick={delClick}>Delete</button>
        </>
      )}
      {!questionnaire && (
          <NavLink to={`/users/${userId}/questionnaire/new`}><button>Set Preferences</button></NavLink>
      )}
    </ul>
    </>
  );
}
export default UserPage;
