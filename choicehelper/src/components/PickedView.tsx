import React from 'react';
import Button from './Button';
import { fetchPosts } from '../api';

export default function PickedView(){
  // get data from db (최신순 정렬, 총 횟수)

  // axios.get('http://localhost:4000/posts')
  //     .then((response) => {console.log(response)})
  //     .catch((error) => {
  //       if (error instanceof Error){
  //         console.log(error.message);
  //         }
  //     })
  
  // axios({
  //   method: 'get',
  //   url: 'http://localhost:4000/posts',
  //   responseType: 'stream'
  // })
  //   .then(function (response) {
  //     console.log(response)
  //   });
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