

import { Suspense } from 'react'
import LaptopForm from '../LaptopForm'
export const instant = false
const page = async ({ params }: { params: Promise<{ productid: string }> }) => {
    const { productid } = await params
    console.log("paras", productid)


    return (
        <Suspense fallback={<div>loading</div>}>
            <LaptopForm productid={productid} />
        </Suspense>
    )
}

export default page