import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const { userid } = useParams();
    return (
        <>
            <h1 className="text-center text-3xl bg-pink-500 p-4 ">User Page</h1>
            <h1 className="text-center text-2xl p-4">User Data : { userid} | React Router</h1>
        </>
    )
}