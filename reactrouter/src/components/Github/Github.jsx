import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

  const data=useLoaderData()

  // const [data,setData] =useState([]);

  // useEffect(()=>{
  //   fetch('https://api.github.com/users/ShantanuSirohi')
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     console.log(data);
  //     setData(data);
  //   })
  // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl justify-center'>
      Github Id : {data.id}
        <img className=' text-center p-5 md-6 rounded-full' src={data.avatar_url} alt="Github profile picture" width={300} height={300}/>
        <h2 className='text-3xl p-6 px-80 '>Name : {data.login}</h2>
        <h2 className='text-3xl p-6 px-80 '>Name : {data.bio}</h2>
        <h2 className='text-3xl p-6 px-80 '>Name : {data.blog}</h2>

    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const response =await fetch(`https://api.github.com/users/ShantanuSirohi`)
  return response.json();
}
