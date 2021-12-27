import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Orders from './components/Orders';
import './sass/main.sass';


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Orders/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
