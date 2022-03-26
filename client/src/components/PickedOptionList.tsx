import React, { useState } from 'react';

function PickedOption(props:any){
  const colors = ["#FFCCCC", "#FFE7AB", "#CCE0FF"];

  return(
    <span style={{height:40, borderRadius:'7px', padding:'5px',margin:'3px', backgroundColor: colors[props.colorIndex] }}>
    {/* <span style={{height:40, borderRadius:'20%', padding:'5px',margin:'3px', backgroundColor: colors[props.colorIndex] }}> */}
      {props.text}
    </span>
  )
};

export default function PickedOptionList(props:any){

  return(
    <div style={{margin: '16px 0'}}  >
      {props.textList.map((item:any, index:number)=>(
        <PickedOption text={item} colorIndex={index%3} key={index}/>
      ))}
      {/* <PickedOption text='t사탕' colorIndex={0} /> */}
      {/* <PickedOption text='사탕' colorIndex={1} /> */}
      <span>중에 골라줘!</span>
    </div>
  )
}