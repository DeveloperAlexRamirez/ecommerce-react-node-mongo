import { request, response } from 'express'
import User from '../models/User';

// Register
export const createUser = async (req = request, res = response) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error);
    }
};