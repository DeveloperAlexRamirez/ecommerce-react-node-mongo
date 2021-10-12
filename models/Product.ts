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
    },
    img: { type: String, required: true },
    categories: { type: Array },
    sizes: { type: String },
    color: { type: String },
    price: { type: Number },

}, { timestamps: true })

export default model('Product', ProductSchema);
