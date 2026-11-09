
import React, { Suspense } from 'react'
import { auth } from './auth'
import { redirect } from 'next/navigation';


export const instant = false

const page = async () => {

    const session = await auth();


    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/authentication/github")
    }

    return (
        <Suspense fallback={<div>loading</div>}>
            <div>{typeof window !== "undefined" ? "Client" : "Server"}</div>
        </Suspense>
    )
}

export default page