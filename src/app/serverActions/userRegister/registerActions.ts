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
        const exisitngUser = await UserModal.findOne({ email: formdata.email })
        if (exisitngUser && Object.keys(exisitngUser).length > 0) {
            console.log(exisitngUser, "existing")
            return { message: "Email already existed", status: 401, success: false }
        }



        const hashedPassword = await bcrypt.hash(formdata.password, 10)

        const user = await UserModal.create({ ...formdata, password: hashedPassword });
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
        return { message: error, status: 500, success: false }
    }

}