"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const page = () => {
    const [user, setUser] = useState<boolean>(false)
    const router = useRouter();
    console.log("checking for router properties", router)
    const login = () => {
        router.push('/dashboard')
    }
    return (
        <div className='bg-amber-400 text-white flex flex-col justify-center items-center w-full h-full'>
            <h1>sorry you are not logged, please login</h1>
            <button onClick={login}>login</button>
        </div>
    )
}

export default page