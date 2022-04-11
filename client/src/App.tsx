import React from 'react';
import './App.css';
import PickedView from './components/PickedView';
import {Route, Routes} from 'react-router-dom';
import PickView from './components/PickView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PickView/>} />
      <Route path="/picked" element={<PickedView/>} />
    </Routes>
  );
}

export default App;
