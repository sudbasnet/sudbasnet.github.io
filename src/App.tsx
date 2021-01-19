import React from 'react';
import Wrapper from './components/Wrapper';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return <BrowserRouter>
      <Wrapper />
    </BrowserRouter>;

}

export default App;
