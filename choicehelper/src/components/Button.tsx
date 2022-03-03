import React, { useState } from 'react';
import { countPosts, createPost, fetchPosts } from '../api';
import '../App.css';


export default function Button({buttonOption}:any){
  const optionText = ["골라줘!", "다른 것도 골라줘!"]
  const [btnOpt, setBtnOpt] = useState(buttonOption);
  const onClick = async () => {

    // const picked = randomPick(options);

    switch(btnOpt){
      case(0):{
        setBtnOpt(1);
        // 골라줘! -> 공유하기
        // random pick 후 db에 올리기

        const options: string[] = ["hi"];
        const selected_option: string = 'hello';
        const repeat: number = 0;
        const createdAt = new Date();

        try {
          const { data } = await createPost({
            "options": options,
            "repeat": repeat,
            "selected_option": selected_option,
            // "selected_option": picked,
            "createdAt": createdAt
          })
        } catch(error) {
          if (error instanceof Error){
            console.log(error.message);
          }
        }

        break;
      }case(1):{
        setBtnOpt(0);
        try {
          // data fetch
          const { data } = await fetchPosts()
          const cnt = await countPosts()
          console.log("Data fetch and count test");
          console.log(data);
          console.log(data.length);
          console.log(cnt.data);
        } catch(error) {
          if (error instanceof Error){
            console.log(error.message);
          }
        }
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
    <button className='pick-button' onClick={onClick}>{optionText[btnOpt]}</button>
  </div>
)}