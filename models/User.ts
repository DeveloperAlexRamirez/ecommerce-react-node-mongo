import { Schema, model } from 'mongoose'
import { boolean } from 'webidl-conversions'

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
        type: boolean,
        default: false,
    },
}, { timestamps: true })

export default model('User', UserSchema);
