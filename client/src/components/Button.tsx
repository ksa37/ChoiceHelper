import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPost, fetchPosts } from '../api';
import '../App.css';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'; 
import { setButtonOpt, setPicked } from '../modules/Options';
import {ToastsStore} from 'react-toasts';

declare global {
  interface Window {
    Kakao: any; // ๐๏ธ turn off type checking
  }
}

export default function Button({buttonOption}:any){
  const optionText = ["๊ณจ๋ผ์ค!", "์นด์นด์ค๋ก ๊ณต์ ํ๊ธฐ"];
  // const [btnOpt, setBtnOpt] = useState(buttonOption);
  const linkUrls = ["/picked", "/"]; 

  const dispatch = useDispatch(); 
  const {clouds, pickedOption, btnOpt} = useSelector((state: RootStateOrAny) => ({
    clouds: state.options.clouds,
    pickedOption: state.options.pickedOption,
    btnOpt: state.options.btnOpt
  }));

  // console.log(btnOpt);
  
  // redux ์กฐํํด์ ๋ช๊ฐ์ง ์ต์์ด ์กด์ฌํ๋์ง ํ์ธ, validate ์ ๋ฌด๋ ํ์ธ(๊ธ์๊ฐ ์์ผ๋ฉด ์๋จ)
  // ๊ทธ ์ซ์ ์ค์ ๋๋ค ์ซ์๋ฅผ ๋ฝ์์ ๋ฐํํ๊ณ  ์ด ๊ฒฐ๊ณผ๋ฅผ redux ๋๋ ์๋ฒ์ ์ ์ฅ
  // redux์์ ์ ํ๋ ์ต์์ ๋ํ ์ ๋ณด๋ฅผ ๋ฐ์์์ ๋ณด์ฌ์ฃผ๊ธฐ

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

  useEffect(()=>{
    if(btnOpt===1){
      const pickedText = pickedOption.text;
        const pickList = clouds.map((item:any)=> item.text);
        const shareStr:string = pickList.join() + ' ์ค์์ ' + pickedText + '์ ํ์๋ฃ!';
      window.Kakao.Link.createDefaultButton({
        container: '#create-kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '๊ณจ๋ผ์ค! ๊ฒฐ๊ณผ๋?',
          description: shareStr,
          imageUrl:
            '',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '๊ณจ๋ผ์ค! ํด๋ณด๊ธฐ',
            link: {
              mobileWebUrl: 'https://choice-helper-diuni-ksa37.netlify.app',
              webUrl: 'https://choice-helper-diuni-ksa37.netlify.app',
            },
          }
        ],
      });
    }
  }, [btnOpt])

  const onClick =  async () => {
    switch(btnOpt){
      case(0):{
        // ๊ธ์ ์์ผ๋ฉด ์ ๋ฌ ์๋๊ฒ ํ๊ธฐ 
        const cloudsTexts = clouds.map((item:any)=>item.text);
        if(cloudsTexts.includes('')){
          ToastsStore.warning("๊ตฌ๋ฆ์ ๋ชจ๋ ์ฑ์์ค");
            return;
        }

        // ๊ณ ๋ฅด๊ธฐ
        const picked = randomPick(clouds.length);
        console.log(clouds[picked].color, clouds[picked].text);
        dispatch(setPicked(picked, clouds[picked].id, clouds[picked].text));
        
        
        // random pick ํ db์ ์ฌ๋ฆฌ๊ธฐ
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
      }
      // case(1):{
      //   // ๊ณต์ ํ๊ธฐ
      //   const pickedText = pickedOption.text;
      //   const pickList = clouds.map((item:any)=> item.text);
      //   const shareStr:string = pickList.join() + ' ์ค์์ ' + pickedText + '์ ํ์๋ฃ!';
        

      //   // if (typeof navigator.share !== "undefined") {
      //   //   window.navigator.share(
      //   //     {
      //   //       title: '๊ณจ๋ผ์ค! ๊ฒฐ๊ณผ๋?', // ๊ณต์ ๋  ์ ๋ชฉ
      //   //       text: shareStr, // ๊ณต์ ๋  ์ค๋ช
      //   //       url: '', // ๊ณต์ ๋  URL
      //   //     });
      //   // }else {
        
      //   // }
      //   break;
      // }
    }
  };

  return(
  <div className='button-area'>
    {btnOpt===0
      ? <>
        {banLink
        ? <button className='pick-button'>{optionText[btnOpt]}</button>
        : <Link to="/picked" style={{textDecoration:'none', color:'black'}} onClick={onClick}>
            <button className='pick-button'>{optionText[btnOpt]}</button>
          </Link>
        }
      </>
      : <button className='pick-button' id="create-kakao-link-btn" onClick={onClick}> {optionText[btnOpt]} </button>
    }


    {/* {banLink || btnOpt===1
      ? <button className='pick-button' id="create-kakao-link-btn" onClick={onClick}> {optionText[btnOpt]} </button>
      : <Link to="/picked" style={{textDecoration:'none', color:'black'}} onClick={onClick}>
        <button className='pick-button'>{optionText[btnOpt]}</button>
      </Link>
    } */}
  </div>
)}

