import LaptopModal from "@/app/utils/modals/laptop";
import { NextResponse } from "next/server"

export interface LaptopRequest {
    title: string;
    modal: string;
    price: number;
}

export const GET = async () => {
    try {
        const laptops = await LaptopModal.find({});
        return NextResponse.json({ laptops: laptops }, { status: 200 });
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error?.message }, { status: 500 })
    }
}


export const POST = async (request: Request) => {
    try {
        const body: LaptopRequest = await request.json();
        const { modal, price, title } = body;
        await LaptopModal.create({ modal, price, title });
        return NextResponse.json({ message: "laptop created successfully" }, { status: 201 })
    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 })

    }

}
