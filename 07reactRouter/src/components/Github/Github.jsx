import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router'
export default function Github(){
    // const [data,setData]=useState({})
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/P94VANSH")
    //     .then(response=> response.json())
    //     .then((profile)=>{
    //         setData(profile)
    //     })
    // },[])
    const data=useLoaderData()
    return(
        <>
        <div className='w-[100vw] h-[80vh] flex flex-col justify-center items-center bg-gray-700'>
            <img src={data.avatar_url} alt="github profile" className='h-[80%] w-[30%]'/>
            <div className='text-xl text-white font-bold'>Followers: {data.followers}</div>
        </div>
        </>
    )
}
export async function fetchData(){
    const data=await fetch("https://api.github.com/users/P94VANSH")
    return data.json()
}