import React from 'react';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Adventures from './Adventures/Adventures';
import { Route } from 'react-router-dom';

const Main: React.FC = () => {
    return <React.Fragment>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/adventures" exact component={Adventures}/>
        <Route path="/" exact component={Home} />
    </React.Fragment>
    
}
//<Home />
export default Main;

