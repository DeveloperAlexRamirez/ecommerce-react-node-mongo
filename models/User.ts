import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String, required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

export default model('User', UserSchema);
