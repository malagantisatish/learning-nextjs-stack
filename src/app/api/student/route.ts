import { DBConnection } from "@/app/utils/config/db";
import { NextResponse } from "next/server"

const connectDb = async () => {
    await DBConnection()
}

connectDb();

export const GET = async () => {
    return NextResponse.json({ student: "all students data" })
}


