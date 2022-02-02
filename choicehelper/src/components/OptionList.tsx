import React, { useState } from 'react';
import OptionCloud from './OptionCloud';
import '../App.css';



const defaultColor = [0, 1];
const getOptionClouds = () =>{
  let content = [];
  for(let i=0; i<2; i++){
    content.push(<OptionCloud color={defaultColor[i]} key={i} />);
  }
  return content;
}
export default function OptionList(){
  const [currentColor, setCurrentColor] = useState(3);
  return(
    <>
      {getOptionClouds()}
    </>
  )
}