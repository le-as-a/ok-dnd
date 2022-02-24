import './404errorpage.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = ({user}) => {
    let view;
    if (user) {
        view = (
            <div className='loggedin-error'>
                <h2>Hi, {user?.username}.</h2>
                This page is either under development or doesn't exist.<br />
                <NavLink to={`/users/${user?.id}`}>Please redirect to your userpage.</NavLink>
            </div>
        )
    } else {
        view = (
            <div className='loggedout-error'>
                <h2>Hello guest, you've reached an error.</h2>
                This page is either under development or doesn't exist.<br />
                <NavLink to='/'>Please redirect back to the main page.</NavLink>
            </div>
        )
    }

    return view;
}

export default ErrorPage;