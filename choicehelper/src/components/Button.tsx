import axios from 'axios';
import React, { useState } from 'react';
import { createPost } from '../api';
import '../App.css';


export default function Button({buttonOption}:any){
  const optionText = ["골라줘!", "다른 것도 골라줘!"]
  const [btnOpt, setBtnOpt] = useState(buttonOption);
  const onClick = async () => {

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

    const options: string[] = ["hi"];
    const selected_option: string = 'hello';
    const repeat: number = 0;
    const createdAt: Object = {};

    // axios.post('http://localhost:4000/posts', {
    //   "options": options,
    //   "repeat": repeat,
    //   "selected_option": selected_option
    //   // "selected_option": selected_option,
    //   // "createdAt": createdAt
    // }).then(function (res) {
    //   console.log(res);
    // }).catch(function (err){
    //   console.log(err);
    // })

    try {
      const { data } = await createPost({
        "options": options,
        "repeat": repeat,
        "selected_option": selected_option,
        // "createdAt": createdAt
      })
    } catch(error) {
      if (error instanceof Error){
        console.log(error.message);
      }
    }

    // axios.get('http://localhost:4000/posts')
    //     .then((response) => {console.log(response)})
    //     .catch((error) => {
    //       if (error instanceof Error){
    //         console.log(error.message);
    //         }
    //     })
    
    // axios({
    //   method: 'get',
    //   url: 'http://localhost:4000/posts',
    //   responseType: 'stream'
    // })
    //   .then(function (response) {
    //     console.log(response)
    //   });
  }

  function randomPick(optionNumber: number){
    return Math.floor(Math.random()*optionNumber);
  } 

  return(
  <div className='button-area'>
    {btnOpt===0&&<p className='shake-text'>버튼을 누르는 대신 흔들어줘!</p>}
    <button className='pick-button' onClick={onClick}>{optionText[btnOpt]}</button>
  </div>
)}