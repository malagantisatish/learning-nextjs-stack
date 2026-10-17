import { LaptopRequest } from '@/app/api/products/laptops/route'
import React, { Suspense } from 'react'
import LaptopActionBtns from './LaptopActionBtns';


interface LaptopListTy extends LaptopRequest {
    _id: string
}

const getLaptopList = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/products/laptops");
        if (response.ok) {
            console.log(response.json)
            const result = await response.json()
            return result.laptops
        }

    } catch (error: any) {
        console.log(error)
    }


}


const LaptopList = async () => {
    const laptops: LaptopListTy[] = await getLaptopList()

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <table>
                <thead>
                    <tr className='border'>
                        <th className='border'>ID</th>
                        <th className='border'>title</th>
                        <th className='border'>model</th>
                        <th className='border'>price</th>
                        <th className='border'>action</th>
                    </tr>
                </thead>
                <tbody>
                    {laptops.map(item => (
                        <tr className='border' key={item._id}>
                            <td className='border'>{item._id}</td>
                            <td className='border'>{item.title}</td>
                            <td className='border'>{item.modal}</td>
                            <td className='border'>{item.price}</td>
                            <td className='flex items-center m-1 gap-x-2'>
                                <LaptopActionBtns id={item._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}


const page = () => {
    return (
        <Suspense fallback={<p>Data is loading....</p>}>
            <LaptopList />
        </Suspense>
    )
}

export default page