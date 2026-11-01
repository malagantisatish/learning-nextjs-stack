"use client"

import { FormdataTy } from "@/app/addproducts/add-laptop/page"
import { useRouter } from "next/navigation"
import { ChangeEvent, SubmitEvent, useEffect, useState } from "react"

export interface LaptopResponseTy {
    laptop: LaptopTy
}

export interface LaptopTy {
    _id: string
    title: string
    modal: string
    price: number
    createdAt: string
    updatedAt: string
    __v: number
}

const LaptopForm = ({ productid }: { productid: string }) => {

    const router = useRouter()
    const [formdata, setFormdata] = useState<FormdataTy>({ modal: "", price: 0, title: "" });

    const fetchProductData = async (productid: string) => {
        console.log("prod", productid)
        const response = await fetch(`http://localhost:3000/api/products/laptops/update/${productid}`)
        if (response.ok) {
            const product: LaptopResponseTy = await response.json()
            console.log(product)
            setFormdata({
                modal: product.laptop.modal,
                price: product.laptop.price,
                title: product.laptop.title
            })

        }

    }

    useEffect(() => {
        if (!productid) return
        fetchProductData(productid)

    }, [productid])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormdata(prev => ({ ...prev, [name]: value }))
    }


    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/api/products/laptops/?id=${productid}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application-json",
                },
                body: JSON.stringify(formdata)
            })

            if (response.ok) {
                alert("laptop updated successfully")
                // setFormdata({ modal: "", price: 0, title: "" })
                router.push("/all-products/laptops")

            }

        } catch (error: any) {
            console.log(error)

        }

    }
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='border rounded-md shadow px-4 py-6 '>
                <div className='flex flex-col'>
                    <label htmlFor='title'>Laptop Name</label>
                    <input className='outline outline-gray-400 rounded-sm p-3' placeholder='enter name' onChange={handleChange} name="title" type="text" id="title" value={formdata.title} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='modal'>Laptop Name</label>
                    <input className='outline outline-gray-400 rounded-sm p-3' placeholder='enter modal name' onChange={handleChange} name="modal" type="text" id="modal" value={formdata.modal} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='price'>Laptop Name</label>
                    <input className='outline outline-gray-400 rounded-sm p-3' placeholder='enter price' onChange={handleChange} name="price" type="text" id="price" value={formdata.price} />
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button type="submit" className='text-white px-2 py-4 bg-blue-500 rounded-md'>Update laptop</button>
                </div>

            </form>

        </div>
    )
}

export default LaptopForm