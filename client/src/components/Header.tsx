import React from 'react';
import '../App.css';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { addOption } from '../modules/Options';


export default function Header(){
  const dispatch = useDispatch();
  const { clouds, color } = useSelector((state: RootStateOrAny) => ({
    clouds: state.options.clouds,
    color: state.options.color
  }));

  const defaultColor = [0, 1, 2];

  function addCloud(event: any){
    event.preventDefault();
    if(clouds.length>=7){
      console.log("7 options are maximum. Now there are", clouds.length);
    }else{
      dispatch(addOption(defaultColor[(color+1)%3],""));
    } 
  };
  return(
  <div className="header-group">
    골라줘!
    <button className='add-button' onClick={addCloud}>
      {/* <FontAwesomeIcon className='header-icon' icon={faPlus} /> */}
      <p>+추가하기</p>
    </button>
  </div>
  )
}