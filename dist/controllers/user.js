"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPost = exports.userGet = void 0;
const express_1 = require("express");
const userGet = (req = express_1.request, res = express_1.response) => {
    res.json({
        msg: 'Hello world from user-Controller'
    });
};
exports.userGet = userGet;
const userPost = (req = express_1.request, res = express_1.response) => {
    const username = req.body.username;
    res.json({
        username,
    });
};
exports.userPost = userPost;
//# sourceMappingURL=user.js.map