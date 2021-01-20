import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import { RouteComponentProps, withRouter } from 'react-router-dom';


const Wrapper: React.FC<RouteComponentProps> = props => {
    let page = props.location.pathname.substring(1);
    if (page.length === 0) {
        page = 'home'
    }
    
    return <div className={'wrapper-' + page}>
    <Header />
    <Main />
    <Footer />
  </div>
}

export default withRouter(Wrapper);