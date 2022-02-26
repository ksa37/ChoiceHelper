import React from 'react';
import { createPost } from './api';
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import OptionCloud from './components/OptionCloud';
import OptionList from './components/OptionList';

function onClick() {
  const options: string[] = [];
  const selected_option: string = '';
  const createdAt: Object = {};
  createPost({
    "options": options,
    "selected_option": selected_option,
    "createdAt": createdAt
  })
}

function App() {
  
  // const data = createPost({
  //   options: [],
  //   selected_option: '',
  //   createAt: {}
  // })

  return (
    <>
      <Header/>
      <OptionList/>
      <Button onClick={onClick} buttonOption={0}/>
    </>
  );
}

export default App;
