import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    img: { type: String, required: true },
    categories: { type: String, required: true },
    sizes: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: String, required: true },

}, { timestamps: true })

export default model('Product', ProductSchema);
