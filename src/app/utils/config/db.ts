import mongoose from "mongoose";


export const DBConnection = async () => {
    try {
        const url = process.env.MONGO_URI ?? ""
        if (url) {
            await mongoose.connect(url);
            console.log("connect to db successfully")

        }

    } catch (error: any) {
        console.log("db not connected", error)
    }
}