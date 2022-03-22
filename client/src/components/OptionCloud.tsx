import React, { useState } from 'react';
import '../App.css';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setText } from '../modules/Options';

const imgPath = ["/clouds/1.png", "/clouds/2.png", "/clouds/3.png"];

export default function OptionCloud(props:any){
  const [newOption, setOption] = useState('');

  const { clouds} = useSelector((state: RootStateOrAny) => ({
    clouds: state.options.clouds,
  }));
  const dispatch = useDispatch();

  const onChange = (event:any) => {
    const {target: {value}} = event;
    setOption(value);
    dispatch(setText(props.id, value));
  }

  //props.key
  const onSubmit = (event:any) => {
    event.preventDefault();
  }

  return(
    <form className='img-container' onSubmit={onSubmit}>
      <img src={imgPath[props.color]}/>
      {newOption==='' 
        ? <textarea className='text-before-input' maxLength={30} onChange={onChange} placeholder='선택지를 입력해주세요' value={newOption}/>
        : <textarea className='text-after-input' maxLength={30} onChange={onChange} placeholder='선택지를 입력해주세요' value={newOption}/>
      }
    </form>
  )
}