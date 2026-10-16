import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const laptopSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    modal: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,

    }
}, { timestamps: true });

const LaptopModal = mongoose.models.laptop || mongoose.model('laptop', laptopSchema);

export default LaptopModal