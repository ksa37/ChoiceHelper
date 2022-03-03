import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export default function Button({buttonOption}:any){
  const optionText = ["골라줘!", "공유하기"]
  const [btnOpt, setBtnOpt] = useState(buttonOption);
  const linkUrls = ["/picked", "/"]; 
  const onClick = ()=>{

    // const picked = randomPick(options);

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

  function randomPick(optionNumber: number){
    return Math.floor(Math.random()*optionNumber);
  } 

  return(
  <div className='button-area'>
    {btnOpt===0&&<p className='shake-text'>버튼을 누르는 대신 흔들어줘!</p>}
    <Link to={linkUrls[btnOpt]}><button className='pick-button' onClick={onClick}>{optionText[btnOpt]}</button></Link>
  </div>
)}