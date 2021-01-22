import React from 'react';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Adventures from './Adventures/Adventures';
import { Route, Switch } from 'react-router-dom';

const Main: React.FC = () => {
    return <Switch>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/adventures" exact component={Adventures}/>
        <Route component={Home}/>
    </Switch>
    
}
//<Home />
export default Main;

