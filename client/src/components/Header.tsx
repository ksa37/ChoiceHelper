import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';


export default function Header(){
  function addCloud(event: any){
    event.preventDefault();
    console.log("Hi");

    
  };
  return(
  <div className="header-group">
    골라줘!
    <button onClick={addCloud}><FontAwesomeIcon className='header-icon' icon={faPlus} /></button>
  </div>
  )
}