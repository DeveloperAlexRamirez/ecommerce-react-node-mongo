"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.createUser = void 0;
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../models/User"));
// Register
const createUser = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const user = new User_1.default({ username, email, password });
    const salt = bcrypt_1.default.genSaltSync();
    // Check in User (model)
    user.password = bcrypt_1.default.hashSync(password, salt);
    try {
        const savedUser = yield user.save();
        res.status(201).json(savedUser);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createUser = createUser;
// Login
const userLogin = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        // Verify if user exists
        const user = yield User_1.default.findOne({ username });
        if (!user) {
            return res.status(400).json({
                msg: 'There is no user with this name',
            });
        }
        // Verify if password is correct
        const validPassword = bcrypt_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Icorrect Password',
            });
        }
        res.json({
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Speak with the DB administrator',
        });
    }
});
exports.userLogin = userLogin;
//# sourceMappingURL=auth.js.map