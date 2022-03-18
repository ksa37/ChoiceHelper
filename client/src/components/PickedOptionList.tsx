import React, { useState } from 'react';

function PickedOption(props:any){
  const colors = ["#FFCCCC", "#FFE7AB"];

  return(
    <span style={{height:40, borderRadius:'20%', padding:'5px',margin:'3px', backgroundColor: colors[props.colorIndex] }}>
      {props.text}
    </span>
  )
};

export default function PickedOptionList(props:any){
  //props.text
  console.log(props);
  // console.log(props.id);
  // console.log('hi');
  // console.log(props.textList);
  // console.log(text);
  const [currentColor, setColor] = useState(0);
  return(
    <div>
      {/* {props.text.map((item:any)=>{
        <PickedOption text={item} colorIndex={0} />
      })} */}
      <PickedOption text='t사탕' colorIndex={0} />
      {/* <PickedOption text='사탕' colorIndex={1} /> */}
      <span>중에 골라줘!</span>
    </div>
  )
}