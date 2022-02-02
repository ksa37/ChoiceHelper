import React, { useState } from 'react';
import '../App.css';

const imgPath = ["/clouds/1.png", "/clouds/2.png", "/clouds/3.png"]

export default function OptionCloud({color}:any){
  const [newOption, setOption] = useState('');
  const onChange = (event:any) => {
    const {target: {value}} = event;
    setOption(value);
  }

  const onSubmit = (event:any) => {
    event.preventDefault();
  }

  return(
    <form className='img-container' onSubmit={onSubmit}>
      <img src={imgPath[color]}/>
      {newOption==='' 
        ? <textarea className='text-before-input' maxLength={30} onChange={onChange} placeholder='선택지를 입력해주세요' value={newOption}/>
        : <textarea className='text-after-input' maxLength={30} onChange={onChange} placeholder='선택지를 입력해주세요' value={newOption}/>
      }
    </form>
  )
}