import LaptopModal from "@/app/utils/modals/laptop";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, context: RouteContext<"/api/products/laptops/update/[id]">) => {
    try {
        const { id } = await context.params;
        const response = await LaptopModal.findById(id)
        return NextResponse.json({ laptop: response })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ message: error.message })
    }

}