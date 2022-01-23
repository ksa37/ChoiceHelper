import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <header>
        <div >
          골라줘!
        </div>
        
        <div className='header-icon-group' >
          <FontAwesomeIcon className='header-icon' icon={faPlus} />
        </div>
      </header>

      <div>
        <img src={"clouds/1.png"}/>
        <img src={"clouds/2.png"}/>
      </div>

      <div className='button-area'>
        <p className='shake-text'>버튼을 누르는 대신 흔들어줘!</p>
        <button className='pick-button'>골라줘!</button>
      </div>
    </>
  );
}

export default App;
