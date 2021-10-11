"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const webidl_conversions_1 = require("webidl-conversions");
const UserSchema = new mongoose_1.Schema({
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
        type: webidl_conversions_1.boolean,
        default: false,
    },
}, { timestamps: true });
exports.default = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map