import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,

    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})


const UserModal = mongoose.models.user || mongoose.model('user', userSchema)


export default UserModal