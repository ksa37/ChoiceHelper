import React, { useState } from 'react';
import Button from './Button';
import { fetchPosts } from '../api';

export default function PickedView(){
  // get data from db (최신순 정렬, 총 횟수)
  // const total: number = 0;
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(null);
  const fetch = async () => {
    try {
      // data fetch test
      const { data } = await fetchPosts()
      // const cnt = await countPosts()
      console.log("Data fetch and count test:");
      console.log(data);
      setData(data)
      setTotal(data.length);
      console.log("The number of running our service:", data.length);
      // console.log(cnt.data);
    } catch(error) {
      if (error instanceof Error){
        console.log(error.message);
      }
    }
  }
  // async () => {
  //   try {
  //     // data fetch test
  //     const { data } = await fetchPosts()
  //     // const cnt = await countPosts()
  //     console.log("Data fetch and count test:");
  //     console.log(data);
  //     console.log("The number of running our service:",data.length);
  //     // console.log(cnt.data);
  //   } catch(error) {
  //     if (error instanceof Error){
  //       console.log(error.message);
  //     }
  //   }
  // }
  return(
    <>
      {fetch()}
      {data} {total}
      <Button buttonOption={1}/>
    </>
  )
}