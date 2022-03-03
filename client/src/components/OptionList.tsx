import React, { useState } from 'react';
import OptionCloud from './OptionCloud';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addOption } from '../modules/Options';

export default function OptionList(){
  // const [currentColor, setCurrentColor] = useState(3);
  
  const dispatch = useDispatch();
  const defaultColor = [0, 1, 2];
  const getOptionClouds = () =>{
    let content:any = [];
    for(let i=0; i<3; i++){
      content.push(<OptionCloud color={defaultColor[i]} key={i} />);
      dispatch(addOption(defaultColor[i],""));
      console.log("Why twice...");
    }
    return content;
  };
  return(
    <>
      {getOptionClouds()}
    </>
  )
}