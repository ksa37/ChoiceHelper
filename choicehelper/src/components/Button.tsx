import React from 'react';
import '../App.css';


export default function Button(){
  return(
  <div className='button-area'>
    <p className='shake-text'>버튼을 누르는 대신 흔들어줘!</p>
    <button className='pick-button'>골라줘!</button>
  </div>
)}