"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
  const [user, setUser] = useState<boolean>(false)
  const router = useRouter();

  const userHandler = () => {
    if (user) {
      router.push('/dashboard')
    } else {
      router.push("/login")
    }
  }
  return (
    <div className='flex flex-col justify-center items-center bg-blue-600 text-white'>
      <h1>welcome to next js 14</h1>
      <button onClick={userHandler} className='border bg-green-500 px-4 py-2 rounded-md'>login</button>
    </div>
  )
}

export default page