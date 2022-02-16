import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-bar'>
            <p>Developed by Asia Le</p>
            <div className='footer-nav'>
                <a href='https://github.com/le-as-a' target='_blank' rel="noreferrer noopener"><i class="fab fa-github-square fa-3x"></i></a>
                <a href='https://www.linkedin.com/in/asia-le-073860103/' target='_blank' rel="noreferrer noopener"><i class="fab fa-linkedin fa-3x"></i></a>
            </div>
        </div>
    );
};

export default Footer;