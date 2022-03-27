import React, { useState } from 'react';
import OptionCloud from './OptionCloud';
import '../App.css';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'; 
import { addOption } from '../modules/Options';
import Modal from 'react-modal';
// function 

export default function OptionList(){

  // const [initialized, setInitialized] = useState(0);
  // const dispatch = useDispatch(); 

  const { clouds} = useSelector((state: RootStateOrAny) => ({
    clouds: state.options.clouds,
  }));

  // console.log(initialized);
  // if(initialized===0){
  //   for(let i=0; i<2; i++){
  //     dispatch(addOption(i%3, ""));      
  //   }
  //   setInitialized(1);
  // }
  
  const getOptionClouds = () =>{
    let content:any = [];

    clouds.map((cloud:any)=>{
      content.push(<OptionCloud color={cloud.color} id={cloud.id} key={cloud.id} />);
    })
    return content;
  };

  return(
    <>
      {getOptionClouds()}
      {/* <Modal isOpen={true}>
        This is Modal content
      </Modal> */}
    </>
  )
}