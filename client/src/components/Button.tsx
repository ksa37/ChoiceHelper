import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPost, fetchPosts } from '../api';
import '../App.css';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'; 
import { setPicked } from '../modules/Options';

export default function Button({buttonOption}:any){
  const optionText = ["골라줘!", "공유하기"];
  const [btnOpt, setBtnOpt] = useState(buttonOption);
  const linkUrls = ["/picked", "/"]; 

  const dispatch = useDispatch(); 
  const {clouds} = useSelector((state: RootStateOrAny) => ({
    clouds: state.options.clouds
  }));

  // redux 조회해서 몇가지 옵션이 존재하는지 확인, validate 유무도 확인(글자가 없으면 안됨)
  // 그 숫자 중에 랜덤 숫자를 뽑아서 반환하고 이 결과를 redux 또는 서버에 저장
  // 서버에 저장하면 이후에 서버에서 선택된 옵션에 대한 정보를 받아와서 보여주기
  // 아니면 redux에서 가져와서 보여주기
  function randomPick(optionNumber: number){
    return Math.floor(Math.random()*optionNumber);
  }; 
// async
  const onClick =  async () => {
    const picked = randomPick(clouds.length);
    console.log(clouds[picked].color, clouds[picked].text);
    dispatch(setPicked(picked, clouds[picked].id, clouds[picked].text));

    switch(btnOpt){
      case(0):{
        setBtnOpt(1);
        // 골라줘! -> 공유하기

        // 최신순 정렬 데이터 fetch -> picked view에 redux를 이용해 전달
        try {
          // data fetch test
          const { data } = await fetchPosts();
          // const cnt = await countPosts()
          console.log("Data fetch and count test:");
          console.log(data);
          console.log("The number of running our service:");
          console.log(data.length + 1);
          console.log("=======================================")
          // console.log(cnt.data);
        } catch(error) {
          if (error instanceof Error){
            console.log(error.message);
          }
        }
        
        // random pick 후 db에 올리기

        const options: string[] = clouds.map((cloud:any)=>cloud.text);
        const selected_option: string = clouds[picked].text;
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
          console.log("Data Post Done:");
          console.log(data);
          console.log("=======================================")
        } catch(error) {
          if (error instanceof Error){
            console.log(error.message);
          }
        }

        break;
      }case(1):{
        setBtnOpt(0); // 버튼 바꾸지 않고 유지해도 될듯?
        // 공유하기
        break;
      }
    }
  };

  

  return(
  <div className='button-area'>
    {btnOpt===0&&<p className='shake-text'>버튼을 누르는 대신 흔들어줘!</p>}
    <Link to={linkUrls[btnOpt]}>
      <button className='pick-button' onClick={onClick}>{optionText[btnOpt]}</button>
    </Link>
  </div>
)}