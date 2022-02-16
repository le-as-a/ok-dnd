import React from 'react';
import './userpage.css';

function UserPage({user, questionnaire}) {
  const userId = user?.id;
  
  if (!user) {
    return null;
  }
  
  return (
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
      <li>
        <strong>Experience Level</strong> {questionnaire?.exp_lvl}
      </li>
      <li>
        <strong>Themes</strong> {questionnaire?.themes}
      </li>
      <li>
        <strong>Background</strong> {questionnaire?.background}
      </li>
    </ul>
  );
}
export default UserPage;
