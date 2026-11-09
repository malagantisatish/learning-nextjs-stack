"use server"

import { LoginTy } from "@/app/authentication/userCredentials/login/page"

import { signIn } from "../../authentication/github/auth"

export const loginAction = async (formdata: LoginTy) => {
    console.log("login details", formdata)

    await signIn("credentials", {
        email: formdata.email,
        password: formdata.password,
        redirectTo: "/"
    })


}