import React, { useState } from 'react';
import '../App.css';


export default function OptionCloud(){
  const [newOption, setOption] = useState('');

  const onChange = (event:any) => {
    const {target: {value}} = event;
    setOption(value);
  }

  return(
    <form className='img-container'>
      <img src={"clouds/1.png"}/>
      {newOption==='' 
        ? <input className='text-before-input' type='text' onChange={onChange} placeholder='선택지를 입력해주세요' value={newOption}/>
        : <input className='text-after-input' type='text' onChange={onChange} placeholder='선택지를 입력해주세요' value={newOption}/>
      }
    </form>
  )
}