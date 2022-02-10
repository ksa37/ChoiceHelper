import React from 'react';

export default function PickedOption({text}:any, {color}:any){
  const colors = ["#FFCCCC", "#FFE7AB"];
  console.log(color);
  return(
    
    <span style={{height:40, borderRadius:'20%', padding:'5px',margin:'3px', backgroundColor: colors[0] }}>
      {console.log(color)}
      {text}
    </span>
  )
}