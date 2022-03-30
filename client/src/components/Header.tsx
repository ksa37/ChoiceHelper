import React, { useState } from 'react';
import '../App.css';
import './Header.css';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { addOption } from '../modules/Options';
import Modal from 'react-modal';
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';

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
      ToastsStore.warning("7개까지만 만들어줘");
      console.log("7 options are maximum. Now there are", clouds.length);
    }else{
      dispatch(addOption(defaultColor[(color+1)%3],""));
    } 
  };
  return(
  <div className="header-group">
    골라줘!
    <button className='add-button' onClick={addCloud}>
      <p>+추가하기</p>
    </button>
    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER}/>
  </div>
  )
}