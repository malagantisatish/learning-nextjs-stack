import { DBConnection } from "@/app/utils/config/db";
import MobileModal from "@/app/utils/modals/mobile";
import { NextRequest, NextResponse } from "next/server"

export interface MobileRequest {
    title: string;
    modal: string;
    price: string;
}


const connectDb = async () => {
    await DBConnection()
}

connectDb();

export const GET = async () => {
    const mobiles = await MobileModal.find({});

    return NextResponse.json({ mobiles }, { status: 200 })
}

export const POST = async (request: NextRequest) => {
    try {
        const body: MobileRequest = await request.json();
        const { title, modal, price } = body;

        await MobileModal.create({ title, modal, price });

        return NextResponse.json(
            { success: "Mobile added successfully" },
            { status: 201 }
        );

    } catch (error: any) {
        console.log("error at add")
        console.log(error)
        return NextResponse.json({ message: error.message }, { status: 500 })
    }


}


export const PUT = async (request: NextRequest) => {
    try {
        const id = await request.nextUrl.searchParams.get("id");
        const body: MobileRequest = await request.json()
        const { title, modal, price } = body;
        const response = await MobileModal.findByIdAndUpdate(id, {
            title, modal, price
        })
        return NextResponse.json({ message: "Mobile product updated successfully" }, { status: 200 })

    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ message: "mobile not updated" }, { status: 500 })
    }

}