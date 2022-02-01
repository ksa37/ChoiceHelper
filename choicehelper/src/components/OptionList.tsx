import React from 'react';
import OptionCloud from './OptionCloud';
import '../App.css';

const defaultColor = [1, 2];
const getOptionClouds = () =>{
  let content = [];
  for(let i=0; i<2; i++){
    content.push(<OptionCloud/>);
  }
  return content;
}
export default function OptionList(){
  return(
    <>
      {getOptionClouds()}
    </>
  )
}