import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../store/session";
import './mainpage.css';

const MainPage = () => {
    const dispatch = useDispatch();

    const handleDemoLogin = async (e) => {
        e.preventDefault();
        await dispatch(login('demo@aa.io', 'password'));
    };
    
    return (
        <div className="main-page">
            <div className="left-main">
                <img
                    className="graphic-title"
                    alt='dnd for every lonely nerd'
                    src='https://i.imgur.com/3oGyMAy.png'
                />
                <p>
                    OK DND is the only Dungeons and Dragons app that matches you
                    based on what matters to you. You deserve to find the dream Dungeons
                    and Dragons team. Meet them today!
                </p>
                <NavLink exact to='/register'><button className="auth-buttons" id='register-b'>JOIN OK DND</button></NavLink>
                <button onClick={handleDemoLogin} className="auth-buttons" id='demo-b'>Demo User</button>
            </div>
            <div className="right-main">
                <img alt='halfling' src='https://i.redd.it/09m83vcmcoo61.png' />
            </div>
        </div>
    );
}

export default MainPage;