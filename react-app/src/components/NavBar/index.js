import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';
import './navbar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const userId = user?.id;
  const dispatch = useDispatch();
  const onLogout = async e => {
    await dispatch(logout());
  }

  let navBar;
  if (user) {
    navBar = (
      <div className='user_nav'>
        <div className='user_navlinks'>
          <NavLink
            to={`/users/${userId}/matches`}
            exact={true}
            activeClassName='active'
            className='navbar_links'
          >Matches
          </NavLink>
          <NavLink
            to={`/users/${userId}/campaigns`}
            exact={true}
            activeClassName='active'
            className='navbar_links'
          >Campaigns
          </NavLink>
          <NavLink
            to={`/users/${userId}/chats`}
            exact={true}
            activeClassName='active'
            className='navbar_links'
          >Messages
          </NavLink>
        </div>
        <div className='user_info'>
          <NavLink
            to={`/users/${user?.id}`}
            activeClassName='active'
            className='navbar_links'
            exact={true}
          >{user?.username}
          </NavLink>
          <LogoutButton />
        </div>
      </div>
    );
  }
  else {
    navBar = (
      <div className='guest_nav'>
        <p>Have an account?</p>
        <NavLink exact={true} to='/login'><button onClick={onLogout} className='auth-buttons' id='login-b'>Log In</button></NavLink>
      </div>
    )
  }
  return navBar;
}

export default NavBar;
