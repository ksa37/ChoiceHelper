import React from 'react';
import Button from './Button';
import '../App.css';
import OptionCloud from './OptionCloud';
import PickedOption from './PickedOption';

export default function PickedView(){
  const backgroundColors = ['#FFF8E8', '#FFF2F2', '#F2F7FF'];
  const accPicked = 86;
  return(
    <div style={{backgroundColor: backgroundColors[0], height: '100vh'}} >
      <p style={{textAlign:'right', margin:'0 10px', paddingTop:'10px'}}>다른 것도 골라줘!</p>
      <h2 style={{margin:'0 10px' }}>당신의 운명은 ..</h2>
      <OptionCloud color={1}/>
      <p style={{textAlign: 'center'}}>총 {accPicked}번 골라줬어요</p>
      <h2 style={{margin:'0 10px' }}>현재 다른 사람들은 ..</h2>
      <PickedOption text='껌' color={0} />
      <PickedOption text='사탕' color={1} />
      <span>중에 골라줘!</span>
      <Button buttonOption={1}/>
    </div>
  )
}