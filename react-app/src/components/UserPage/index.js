import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edit_questionnaire } from '../../store/questionnaire';
import './userpage.css';

function UserPage({user}) {
  const questionnaire = useSelector(state => state.questionnaire.questionnaire)
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
      expLvl,
      themes,
      background,
      user_id: userId
    }
    await dispatch(edit_questionnaire(updated));
    setEditStatus(false);
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
                placeholder={`${expLvl}`}
                name='exp_lvl'
                value={expLvl}
                onChange={e => setExpLvl(e.target.value)}
                type='number'
              />
            ) : questionnaire?.exp_lvl}
          </li>
          <li>
            <strong>Themes</strong> {questionnaire?.themes}
          </li>
          <li>
            <strong>Background</strong> {questionnaire?.background}
          </li>
          {editStatus ? <button onClick={saveEdit}>Save</button> : <button onClick={editClick}>Edit</button>} <button>Delete</button>
        </>
      )}
      {!questionnaire && (
        <button>Set Preferences</button>
      )}
    </ul>
    </>
  );
}
export default UserPage;
