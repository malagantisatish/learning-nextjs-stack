import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json({ student: "all students data" })
}