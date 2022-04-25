import React from 'react'
import Header from './Header'
import OptionList from './OptionList'
import Button from './Button'
import './PickView.css';
import { addOption } from '../modules/Options';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';


export default function PickView(){
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
    <div>
      <Header/>
      <OptionList/>
      <div className='add-button-container' onClick={addCloud}>
        <FontAwesomeIcon className='add-icon' icon={faPlusCircle} 
          // style={{color: 'gray'}}
        />
        <p>구름 추가하기</p>
      </div>
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER}/>
      <Button buttonOption={0}/>
    </div>
  )
}
