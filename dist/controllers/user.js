"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPost = void 0;
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const userPost = (req = express_1.request, res = express_1.response) => {
    const newUser = new User_1.default({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    res.json({
        newUser,
    });
};
exports.userPost = userPost;
//# sourceMappingURL=user.js.map