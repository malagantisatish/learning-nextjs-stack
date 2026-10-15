import React, { Suspense } from 'react'
import { UsersTy } from './types';

const url = "https://jsonplaceholder.typicode.com/users";

const getUsers = async (): Promise<UsersTy[]> => {
    try {
        const response = await fetch(url);
        return response.json()
    } catch (error: any) {
        console.log(error);
        return []

    }
}

const Users = async () => {
    const userList: UsersTy[] = await getUsers();
    console.log("userslist", userList.length)
    return (
        <ul>
            {userList.map((item: UsersTy, i: number) => (
                <>
                    <li key={item.id} >{`${i + 1}. ${item.name}`}</li>
                    <hr />
                </>
            ))}
        </ul>
    )

}

const page = () => {

    return (
        <div>
            <Suspense fallback={<div>loading...</div>}>
                <Users />
            </Suspense>
        </div>
    )
}

export default page