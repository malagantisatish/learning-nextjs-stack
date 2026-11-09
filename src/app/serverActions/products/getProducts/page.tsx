import { DBConnection } from '@/app/utils/config/db';
import MobileModal from '@/app/utils/modals/mobile'
import { connection } from 'next/server';
import React from 'react'


export const instant = false
const page = async () => {
    await connection()
    await DBConnection()
    const allMobiles = await MobileModal.find({}).lean()


    return (
        <div>
            {allMobiles.map((item) => (
                <div className='flex items-center gap-2' key={item._id}>
                    <div>{item.title}</div>
                    <div>{item.modal}</div>
                    <div>{item.price}</div>
                </div>
            ))}
        </div>
    )
}

export default page