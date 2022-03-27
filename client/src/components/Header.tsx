import React, { useState } from 'react';
import '../App.css';
import './Header.css';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { addOption } from '../modules/Options';
import Modal from 'react-modal';

export default function Header(){
  const dispatch = useDispatch();
  const { clouds, color } = useSelector((state: RootStateOrAny) => ({
    clouds: state.options.clouds,
    color: state.options.color
  }));

  const defaultColor = [0, 1, 2];
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function addCloud(event: any){
    event.preventDefault();
    if(clouds.length>=7){
      openModal();
      console.log("7 options are maximum. Now there are", clouds.length);
    }else{
      dispatch(addOption(defaultColor[(color+1)%3],""));
    } 
  };
  return(
  <div className="header-group">
    골라줘!
    {/* refresh button */}
    <button className='add-button' onClick={addCloud}>
      <p>+추가하기</p>
    </button>
    <Modal 
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      7개가 생성가능한 최대 구름수입니다!
    </Modal>
  </div>
  )
}