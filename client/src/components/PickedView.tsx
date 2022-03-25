import React from 'react';
import Button from './Button';
import '../App.css';
import { fetchPosts } from '../api';
import { useAsync } from 'react-async';
import PickedOptionList from './PickedOptionList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import { RootStateOrAny, useSelector } from 'react-redux';

async function getData() {
  const { data } = await fetchPosts();
  return data;
}

const imgPath = ["/clouds/1.png", "/clouds/2.png", "/clouds/3.png"];

function PickedCloud(props:any){
  return(
    <div className='img-container'>
      <img src={imgPath[props.color]}/>
      {<p className='text-after-input'>{props.text}</p>}
    </div>
  )
};

export default function PickedView(props:any){
  const backgroundColors = ['#FFF8E8', '#FFF2F2', '#F2F7FF'];
  const accPicked = 1;

  const {pickedOption} = useSelector((state: RootStateOrAny) => ({
    pickedOption: state.options.pickedOption
  }));

  
  //[['껌', '사탕'], ['로맨스', '액션', '공포'], ['짜장면', '탕수육']];

  const { data: data, error, isLoading } = useAsync({
    promiseFn: getData,
  });

  // const pickedData = data?.map((item: any)=>item.options);
  const pickedData = data ? data.map((item: any)=>item.options)
                    :[['껌', '사탕'], ['로맨스', '액션', '공포'], ['짜장면', '탕수육']];
  const pickedNum = data ? data.length : 1;

  return(
    <div style={{backgroundColor: backgroundColors[pickedOption.color], height: '100vh'}} >
      <Link to='/' style={{color:'black'}}>
        <p style={{textAlign:'right', margin:'0 10px', paddingTop:'10px'}}>
          다른 것도 골라줘!
          <FontAwesomeIcon icon={faUndo} />
        </p> 
      </Link>

      <h2 style={{margin:'0 10px' }}>당신의 운명은 ..</h2>
      <PickedCloud color={pickedOption.color} text={pickedOption.text}/>
      <p style={{textAlign: 'center'}}>총 {pickedNum}번 골라줬어요</p>
      <h2 style={{margin:'0 10px'}}>현재 다른 사람들은 ..</h2>
      {pickedData.slice(0,5).map((item:any, index:number)=>(
        <PickedOptionList textList={item} key={index}/>
      ))}
      <Button buttonOption={1}/>
    </div>
  )
}