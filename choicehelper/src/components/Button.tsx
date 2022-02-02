import React, { useState } from 'react';
import '../App.css';


export default function Button({buttonOption}:any){
  const optionText = ["골라줘!", "다른 것도 골라줘!"]
  const [btnOpt, setBtnOpt] = useState(buttonOption);
  const onClick = ()=>{
    switch(btnOpt){
      case(0):{
        setBtnOpt(1);
        break;
      }case(1):{
        setBtnOpt(0);
        break;
      }
    }
  }
  return(
  <div className='button-area'>
    {btnOpt===0&&<p className='shake-text'>버튼을 누르는 대신 흔들어줘!</p>}
    <button className='pick-button' onClick={onClick}>{optionText[btnOpt]}</button>
  </div>
)}