import React from 'react';
import './Header.css';
import { NavLink, withRouter } from 'react-router-dom';


const Header: React.FC = props => {
    return <header className="header">
        <nav className="nav">
            <ul className="nav-links">
                <li><NavLink className="nav-link" activeClassName="active" exact to="/">01.Home</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" exact to="/resume">02.Resume</NavLink></li>
                <li className="wip-tooltip-container"><NavLink className="nav-link disabled" exact to="/adventures">03.Adventures</NavLink>
                    <span className="wip-tooltip-text"><span>Working On It 😓</span></span>
                </li>
            </ul>
        </nav>
    </header>
};

export default withRouter(Header);