import { request, response } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User';



// Register
export const createUser = async (req = request, res = response) => {

    const { username, email, password } = req.body;

    const user = new User({ username, email, password });

    const salt = bcrypt.genSaltSync();
    // Check in User (model)
    user.password = bcrypt.hashSync(password, salt)

    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error);
    }
};

// Login
export const userLogin = async (req = request, res = response) => {

    const { username, password } = req.body;

    try {
        // Verify if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                msg: 'There is no user with this name',
            });
        }

        // Verify if password is correct
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Icorrect Password',
            })
        }

        res.json({
            user,
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Speak with the DB administrator',
        })
    }
}