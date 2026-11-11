"use client"

import { loginAction } from "@/app/serverActions/userRegister/loginAction";
import { useRouter } from "next/navigation";
import { ChangeEvent, SubmitEvent, useState } from "react"

export interface LoginTy {
    email: string;
    password: string;
}

const page = () => {

    const [formData, setFormData] = useState<LoginTy>({ email: "", password: "" })
    const [error, setError] = useState<string>("")
    const router = useRouter()


    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!formData.email || !formData.password) {
                setError("Fill your credientials")
                return
            }
            const response = await loginAction(formData)

            if (response.success) {
                router.push("/")
            } else {
                console.log(response, "response")
                setError(response.message ?? "")
            }

        } catch (error: any) {
            setError(error.message)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))

    }
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="border rounded-md p-8">
                <p className="text-red-600 text-md w-full text-wrap">{error}</p>
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