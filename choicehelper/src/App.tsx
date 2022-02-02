import React from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import OptionCloud from './components/OptionCloud';
import OptionList from './components/OptionList';

function App() {
  return (
    <>
      <Header/>
      <OptionList/>
      <Button buttonOption={0}/>
    </>
  );
}

export default App;
