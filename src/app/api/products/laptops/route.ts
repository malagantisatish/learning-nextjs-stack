import { DBConnection } from "@/app/utils/config/db";
import LaptopModal from "@/app/utils/modals/laptop";
import { NextRequest, NextResponse } from "next/server"

export interface LaptopRequest {
    title: string;
    modal: string;
    price: number;
}

const connectDb = async () => {
    await DBConnection()
}

connectDb();

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

export const PUT = async (request: NextRequest) => {
    try {
        const id = request.nextUrl.searchParams.get("id");
        console.log(id)
        if (!id) {
            return NextResponse.json({ message: "Laptop ID is required" }, { status: 400 })
        }
        const body = await request.json();
        console.log(id);
        const { modal, price, title } = body;
        const response = await LaptopModal.findByIdAndUpdate(id, { modal, price, title });
        console.log(response)
        if (!response) {
            return NextResponse.json({ message: "laptop data not updated" }, { status: 400 })
        }
        return NextResponse.json({ message: "Laptop data updated successfully" }, { status: 200 })


    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}


export const DELETE = async (request: NextRequest) => {
    try {
        const id = request.nextUrl.searchParams.get("id");
        if (!id) {
            return NextResponse.json({ message: "please provide laptop ID" }, { status: 400 })
        }
        const response = await LaptopModal.findByIdAndDelete(id);
        if (!response) {
            return NextResponse.json({ message: "laptop not found" }, { status: 400 })
        }
        return NextResponse.json({ message: "laptop deleted successfully" }, { status: 200 })

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: "laptop not deleted" }, { status: 500 })
    }
}