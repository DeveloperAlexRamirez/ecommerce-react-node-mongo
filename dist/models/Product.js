"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = mongoose_1.model('Product', ProductSchema);
//# sourceMappingURL=Product.js.map