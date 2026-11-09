"use server"

import { DBConnection } from "@/app/utils/config/db";
import UserModal from "@/app/utils/modals/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export interface RegisterFormTy {
    username: string;
    password: string;
    email: string;
}

export const registerAction = async (formdata: RegisterFormTy) => {
    try {
        await DBConnection();
        console.log(formdata)
        if (!formdata.email || !formdata.password || !formdata.username) {
            return NextResponse.json({ message: "Fill all the required fields" }, { status: 400 })

        }
        const user = await UserModal.create({ ...formdata });
        console.log("user", user)
        return {
            success: true,
            message: "User registered successfully",
            status: 201,
            user: {
                username: user.username,
                email: user.email
            }
        };

    } catch (error: any) {
        console.log(error)
    }

}