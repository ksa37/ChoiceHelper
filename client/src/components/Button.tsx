import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPost, fetchPosts } from '../api';
import '../App.css';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'; 
import { setButtonOpt, setPicked } from '../modules/Options';
import {ToastsStore} from 'react-toasts';
import { Shake } from '../modules/Shake';

export default function Button({buttonOption}:any){
  const optionText = ["골라줘!", "공유하기"];
  // const [btnOpt, setBtnOpt] = useState(buttonOption);
  const linkUrls = ["/picked", "/"]; 

  const dispatch = useDispatch(); 
  const {clouds, pickedOption, btnOpt} = useSelector((state: RootStateOrAny) => ({
    clouds: state.options.clouds,
    pickedOption: state.options.pickedOption,
    btnOpt: state.options.btnOpt
  }));

  console.log(btnOpt);

  // const shake = new Shake({threshold: 15, timeout: 1000});

  // shake.addEventListener('shake', ev => {
  //   console.log('Shake!', ev.detail.timeStamp, ev.detail.acceleration);
  // });

  // // Then, in response to a user-initiated event:
  // const approved = await shake.start();
  
  // redux 조회해서 몇가지 옵션이 존재하는지 확인, validate 유무도 확인(글자가 없으면 안됨)
  // 그 숫자 중에 랜덤 숫자를 뽑아서 반환하고 이 결과를 redux 또는 서버에 저장
  // 서버에 저장하면 이후에 서버에서 선택된 옵션에 대한 정보를 받아와서 보여주기
  // 아니면 redux에서 가져와서 보여주기
  function randomPick(optionNumber: number){
    return Math.floor(Math.random()*optionNumber);
  }; 

  const [banLink, setBanLink] = useState(false);
  function banPage() {
    setBanLink(true);
  };
  function permitPage() {
    setBanLink(false);
  };

  useEffect(()=>{
    const cloudsTexts = clouds.map((item:any)=>item.text);
    if(cloudsTexts.includes('')){
      banPage();
    }else{
      permitPage();
    }
  },[clouds])

  const onClick =  async () => {
    switch(btnOpt){
      case(0):{
        // 글자 없으면 전달 안되게 하기 
        const cloudsTexts = clouds.map((item:any)=>item.text);
        if(cloudsTexts.includes('')){
          ToastsStore.warning("구름을 모두 채워줘");
            return;
        }

        // 고르기
        const picked = randomPick(clouds.length);
        console.log(clouds[picked].color, clouds[picked].text);
        dispatch(setPicked(picked, clouds[picked].id, clouds[picked].text));
        
        
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

        dispatch(setButtonOpt(1));

        break;
      }case(1):{
        // 공유하기
        const pickedText = pickedOption.text;
        const pickList = clouds.map((item:any)=> item.text);
        const shareStr:string = pickList.join() + ' 중에서 ' + pickedText + '선택완료!';
        
        console.log(shareStr);
        console.log(navigator.share);
        if (typeof navigator.share !== "undefined") {
          window.navigator.share(
            {
              title: '골라줘! 결과는?', // 공유될 제목
              text: shareStr, // 공유될 설명
              url: '', // 공유될 URL
            });
        }
        break;
      }
    }
  };

  

  return(
  <div className='button-area'>
    {/* {btnOpt===0&&<p className='shake-text'>버튼을 누르는 대신 흔들어줘!</p>} */}
    <button className='pick-button' onClick={onClick}>
      {banLink || btnOpt===1
        ? <>{optionText[btnOpt]}</>
        : <Link to="/picked" style={{textDecoration:'none', color:'white'}}>
          {optionText[btnOpt]}
        </Link>
      }
    </button>
  </div>
)}