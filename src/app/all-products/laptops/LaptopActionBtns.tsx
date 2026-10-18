"use client"

import Link from "next/link"

const LaptopActionBtns = ({ id }: { id: string }) => {


    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3000/api/products/laptops?id=${id}`, {
            method: "DELETE",
        })
        if (response.ok) {
            alert("deleted successfully")
        }
    }
    return (
        <div className='flex items-center justify-between gap-2'>
            <Link href={`/all-products/laptops/${id}`}>
                <button className='bg-blue-400 px-2 py-3 text-white rounded-md' type="button">
                    update
                </button>
            </Link>
            <button onClick={handleDelete} className='bg-red-400 px-2 py-3 text-white rounded-md' type="button">
                delete
            </button>
        </div>
    )
}

export default LaptopActionBtns