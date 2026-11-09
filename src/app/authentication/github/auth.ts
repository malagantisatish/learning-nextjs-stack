import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { DBConnection } from "@/app/utils/config/db";
import UserModal from "@/app/utils/modals/User";

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
    providers: [
        GitHub({
            clientId: process?.env?.GIT_CLIENT_ID ?? "",
            clientSecret: process.env.GIT_CLIENT_SECRET ?? ""
        }),
        CredentialProvider({
            name: "credentials",

            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials, request) {
                console.log("cred", credentials)
                try {
                    await DBConnection()
                    const user = await UserModal.findOne({
                        email: credentials?.email,
                        password: credentials?.password
                    })



                    if (!user) {
                        return null
                    } else {
                        return { name: user.username, email: user.email }
                    }
                } catch (error: any) {
                    console.log(error)
                    return null
                }
            },

        })
    ],
    secret: process.env.SECRET_KEY,
    pages: {
        signIn: "/authentication/userCredentials/login"
    }
})