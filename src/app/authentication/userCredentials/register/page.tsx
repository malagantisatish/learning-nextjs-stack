"use client"

import { registerAction } from "@/app/serverActions/userRegister/registerActions"
import { useRouter } from "next/navigation"
import { ChangeEvent, MouseEvent, SubmitEvent, useState } from "react"


const page = () => {

    const [formData, setFormData] = useState({ username: "", email: "", password: "" })
    const router = useRouter()
    const [error, setError] = useState("")


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }))

    }

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {

        e.preventDefault();
        try {
            if (!formData.email || !formData.password || !formData.username) {
                setError("All fields are required")
                return

            }
            const response = await registerAction(formData)
            console.log("response", response.success)
            if (response?.status === 201) {
                setFormData({ email: "", password: "", username: "" })
                setError("")
                router.push("http://localhost:3000/authentication/userCredentials/login")
                alert("User created successfully")
            }
            else if (!response.success) {
                console.log("handlesubit", response.status)
                setError(response.message)
            }
        } catch (error: any) {
            console.log("error", error)
            setError(error)
        }


    }



    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="border rounded-md p-8">
                <p className="text-center text-red-600 text-lg">{error}</p>
                <h1 className="text-center text-lg">User form</h1>
                <label htmlFor="username">Username</label>
                <br />
                <input onChange={handleChange} className="border rounded-md border-gray-500 px-2 py-3" type="text" value={formData.username} name="username" id="username" placeholder="Enter username" />
                <br />
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