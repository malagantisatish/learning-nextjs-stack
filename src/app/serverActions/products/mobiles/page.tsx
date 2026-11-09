import { DBConnection } from '@/app/utils/config/db'
import MobileModal from '@/app/utils/modals/mobile'
import React from 'react'

const page = () => {

    const handleSumbit = async (formdata: FormData) => {
        "use server"
        await DBConnection();
        let title = formdata.get("title");
        let modal = formdata.get("modal");
        let price = formdata.get("price")

        const response = await MobileModal.create({ title: title, modal: modal, price: price })

        console.log(title, modal, price)

    }
    return (
        <div className='w-full max-h-screen flex items-center justify-center'>
            <form action={handleSumbit}>
                <h1>Server actions</h1>
                <input placeholder='enter title' className='outline-gray-600 border border-gray-500 rounded-md m-1 p-2' type="text" name="title" />
                <br />
                <input placeholder='enter modal' className='outline-gray-600 border border-gray-500 rounded-md m-1 p-2' type="text" name="modal" />
                <br />
                <input placeholder='enter price' className='outline-gray-600 border border-gray-500 rounded-md m-1 p-2' type="text" name="price" />
                <br />
                <button className='border-0 bg-blue-400 px-4 py-2 text-white rounded-md ' type="submit">Add mobile</button>

            </form>
        </div>
    )
}

export default page