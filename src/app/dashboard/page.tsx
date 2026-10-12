"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    return (
        <div className='bg-amber-400 text-white flex flex-col justify-center items-center w-full h-full'>
            <h1>welcome to dashboard</h1>
            <div>
                <button onClick={() => router.back()} className='border bg-red-800 rounded-md p-4 outline-none'>go back</button>
            </div>
        </div>
    )
}

export default page