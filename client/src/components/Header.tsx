import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default function Header(){
  return(
    <header>
      <div >
        골라줘!
      </div>
      
      <div className='header-icon-group' >
        <FontAwesomeIcon className='header-icon' icon={faPlus} />
      </div>
    </header>
  )
}