import React, { Suspense } from 'react'


type PageProps = {
    params: Promise<{
        username: string
    }>
}


async function UserDetails({ params }: PageProps) {
    const { username } = await params;
    // this username is list of strings if user is typed multiple segments
    console.log("username: ", username);
    return <div>Getting dynamic value: {username}</div>;

}

const page = async ({ params }: PageProps) => {


    return (
        <Suspense fallback={<div>Loading user...</div>}>
            <UserDetails key="userdetails" params={params} />
        </Suspense>
    )
}

export default page