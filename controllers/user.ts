import { request, response } from 'express'

export const userGet = (req = request, res = response) => {
    res.json({
        msg: 'Hello world from user-Controller'
    })
}

export const userPost = (req = request, res = response) => {
    const username = req.body.username;

    res.json({
        username,
    })
}

