import React from 'react';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import OptionCloud from './components/OptionCloud';
import OptionList from './components/OptionList';
import PickedView from './components/PickedView';

function App() {
  const pickingProcess = true;
  return (
    <>
      {pickingProcess
      ?
      <>
        <Header/>
        <OptionList/>
        <Button buttonOption={0}/>
      </>
      : <PickedView/>
      }
      
    </>
  );
}

export default App;
