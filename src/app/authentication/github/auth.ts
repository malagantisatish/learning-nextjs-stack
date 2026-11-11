import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { DBConnection } from "@/app/utils/config/db";
import UserModal from "@/app/utils/modals/User";
import bcrypt from "bcryptjs";

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

                    const user = await UserModal.findOne({ email: credentials?.email ?? "" });

                    if (!user) {
                        return null
                    }

                    const isvalidPassword = await bcrypt.compare(String(credentials?.password ?? ""), user.password)
                    if (!isvalidPassword) {
                        return null
                    }

                    return { username: user.username, email: user.email }


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