import React from 'react';
import Button from './Button';
import '../App.css';
import PickedOptionList from './PickedOptionList';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import { RootStateOrAny, useSelector } from 'react-redux';

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
  const accPicked = 86;
  // get data from db (최신순 정렬, 총 횟수)
  // maybe with redux?
  const {pickedOption} = useSelector((state: RootStateOrAny) => ({
    pickedOption: state.options.pickedOption
  }));

  const pickedData = [['껌', '사탕'], ['로맨스', '액션', '공포'], ['짜장면', '탕수육']];


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
      <p style={{textAlign: 'center'}}>총 {accPicked}번 골라줬어요</p>

      <h2 style={{margin:'0 10px'}}>현재 다른 사람들은 ..</h2>
      {pickedData.map((item, index)=>(
        <PickedOptionList textList={item} key={index}/>
      ))}
      <Button buttonOption={1}/>
    </div>
  )
}