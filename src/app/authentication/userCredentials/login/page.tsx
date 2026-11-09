"use client"

import { loginAction } from "@/app/serverActions/userRegister/loginAction";
import { ChangeEvent, SubmitEvent, useState } from "react"

export interface LoginTy {
    email: string;
    password: string;
}

const page = () => {

    const [formData, setFormData] = useState<LoginTy>({ email: "", password: "" })


    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        await loginAction(formData)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))

    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="border rounded-md p-8">
                <h1 className="text-center text-2xl">Login</h1>
                <label htmlFor="email">Email</label>
                <br />
                <input onChange={handleChange} className="border rounded-md border-gray-500 px-2 py-3" type="email" value={formData.email} name="email" id="email" placeholder="Enter Email" />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input onChange={handleChange} className="border rounded-md border-gray-500 px-2 py-3" type="password" value={formData.password} name="password" id="password" placeholder="enter password" />
                <br />
                <div className="mt-4 flex items-center justify-center">
                    <button type="submit" className="px-2 py-4 bg-amber-600 rounded-md text-white">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default page