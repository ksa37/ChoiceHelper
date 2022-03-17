import React from 'react';

function PickedOption(props:any){
  const colors = ["#FFCCCC", "#FFE7AB"];

  return(
    <span style={{height:40, borderRadius:'20%', padding:'5px',margin:'3px', backgroundColor: colors[props.colorIndex] }}>
      {props.text}
    </span>
  )
};

export default function PickedOptionList(){
  return(
    <div>
      <PickedOption text='껌' colorIndex={0} />
      <PickedOption text='사탕' colorIndex={1} />
      <span>중에 골라줘!</span>
    </div>
  )
}