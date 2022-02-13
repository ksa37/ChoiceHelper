import React from 'react';
import PickedOption from './PickedOption';

export default function PickedOptionList(){
  return(
    <div>
      <PickedOption text='껌' color={0} />
      <PickedOption text='사탕' color={1} />
      <span>중에 골라줘!</span>
    </div>
  )
}