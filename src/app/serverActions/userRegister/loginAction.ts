"use server"

import { LoginTy } from "@/app/authentication/userCredentials/login/page"

import { signIn } from "../../authentication/github/auth"
import { error } from "console"
import { AuthError } from "next-auth"

export const loginAction = async (formdata: LoginTy) => {
    console.log("login details", formdata)
    try {
        const response: null | any = await signIn("credentials", {
            email: formdata.email,
            password: formdata.password,
            // redirectTo: "/",
            redirect: false
        })

        if (!response || response.error) {
            console.log(response, "error")
            return { status: 401, message: "Invalid user credentials" }
        } else {
            return { success: true }
        }

    } catch (error: any) {
        console.log(error)
        if (error instanceof AuthError) {
            if (error.type === "CredentialsSignin") {
                return { success: false, message: "Invalid email or password" }
            }
        }
        return { success: false, message: "Authentication failed" }

    }




}