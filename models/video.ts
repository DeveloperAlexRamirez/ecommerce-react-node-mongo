import { Schema, model } from 'mongoose'


const videoSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
}, {
    versionKey: false,
    timestamps: true,
})

export default model('Video', videoSchema)