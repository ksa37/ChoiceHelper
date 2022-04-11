import React from 'react'
import Header from './Header'
import OptionList from './OptionList'
import Button from './Button'


export default function PickView(){
  return(
    <div>
      <Header/>
      <OptionList/>
      <Button buttonOption={0}/>
    </div>
  )
}
