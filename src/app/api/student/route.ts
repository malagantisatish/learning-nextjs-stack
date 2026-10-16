import { NextResponse } from "next/server"
import { DBConnection } from "./utils/config/db"

const connectDb = async () => {
    await DBConnection()
}

connectDb();

export const GET = async () => {
    return NextResponse.json({ student: "all students data" })
}


