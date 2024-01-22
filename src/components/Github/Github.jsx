import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/11harshkumar')
    //         .then((response) => response.json())
    //         .then((response) => {
    //             setData(response)
    //             console.log(response)
    //         })
    // },[])
    const data=useLoaderData()
    return (
        <>
            <h1 className="bg-orange-400 text-4xl text-center p-4">Github Route | React Router</h1>
            <h1 className="bg-orange-300 text-3xl text-center p-3">Github Followers : {data.followers}
                <img src={data.avatar_url} width={250} />
            </h1>
            
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/11harshkumar')
    return response.json()
}