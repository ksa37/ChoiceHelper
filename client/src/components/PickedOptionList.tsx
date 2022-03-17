import React from 'react';

function PickedOption({text}:any, {color}:any){
  const colors = ["#FFCCCC", "#FFE7AB"];
  console.log(color);
  return(
    
    <span style={{height:40, borderRadius:'20%', padding:'5px',margin:'3px', backgroundColor: colors[0] }}>
      {console.log(color)}
      {text}
    </span>
  )
};

export default function PickedOptionList(){
  return(
    <div>
      <PickedOption text='껌' color={0} />
      <PickedOption text='사탕' color={1} />
      <span>중에 골라줘!</span>
    </div>
  )
}