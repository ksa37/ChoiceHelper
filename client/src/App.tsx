import React from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import OptionCloud from './components/OptionCloud';
import OptionList from './components/OptionList';
import PickedView from './components/PickedView';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Header/>
          <OptionList/>
          <Button buttonOption={0}/>
        </div>
      } />
      <Route path="/picked" element={<PickedView/>} />
    </Routes>
  );
}

export default App;
