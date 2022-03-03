import React from 'react';
import Button from './Button';
import { fetchPosts } from '../api';

export default function PickedView(){
  // get data from db (최신순 정렬, 총 횟수)
  const onClick = async () => {
    try {
      const { data } = await fetchPosts()
      console.log(data)
    } catch(error) {
      if (error instanceof Error){
        console.log(error.message);
      }
    }
  }

  return(
    <>
      
      <Button buttonOption={1}/>
    </>
  )
}