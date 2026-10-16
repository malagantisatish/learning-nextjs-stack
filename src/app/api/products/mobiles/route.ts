import MobileModal from "@/app/utils/modals/mobile";
import { NextResponse } from "next/server"

export interface MobileRequest {
    title: string;
    modal: string;
    price: string;
}

export const GET = async () => {
    const mobiles = await MobileModal.find({});

    return NextResponse.json({ mobiles }, { status: 200 })
}

export const POST = async (request: Request) => {
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