import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


const Header: React.FC = props => {
    return <header className="header">
        <nav className="nav">
            <ul className="nav-links">
                <li><NavLink className="nav-link" activeClassName="active" exact to="/">01.Home</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" exact to="/resume">02.Resume</NavLink></li>
                <li><NavLink className="nav-link" activeClassName="active" exact to="/adventures">03.Adventures</NavLink></li>
            </ul>
        </nav>
    </header>
};

export default withRouter(Header);