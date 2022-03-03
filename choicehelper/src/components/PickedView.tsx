import React, { useState } from 'react';
import Button from './Button';
import { fetchPosts } from '../api';

export default function PickedView(){
  // get data from db (최신순 정렬, 총 횟수)
  // maybe with redux?
  return(
    <>
      <Button buttonOption={1}/>
    </>
  )
}