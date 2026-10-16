import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const mobileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,

    },
    modal: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const MobileModal = mongoose.models.mobile || mongoose.model('mobile', mobileSchema)

export default MobileModal