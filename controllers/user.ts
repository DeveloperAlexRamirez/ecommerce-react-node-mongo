import { request, response } from 'express'
import User from '../models/User';

export const userPost = (req = request, res = response) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });

    res.json({
        newUser,
    });
}
