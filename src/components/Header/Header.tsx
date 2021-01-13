import React from 'react';

const Header: React.FC = () => {
    return <header className="header">
        <nav className="nav">
            <ul className="nav-links">
                <li><a className="nav-link" href="/">01.Home</a></li>
                <li><a className="nav-link" href="/">02.Resume</a></li>
                <li><a className="nav-link" href="/">03.Adventures</a></li>
            </ul>
        </nav>
    </header>
};

export default Header;