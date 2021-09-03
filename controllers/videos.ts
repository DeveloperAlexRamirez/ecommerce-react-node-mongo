import { request, response } from 'express'
import Video from '../models/video';

export const getVideos = async (req = request, res = response) => {
    try {
        const videos = await Video.find();
        res.json(videos)
    } catch (error) {
        console.log(error);
    }
}

export const getVideo = async (req = request, res = response) => {
    res.json({
        msg: 'Desde getVideo',
    })
}

export const postVideo = async (req = request, res = response) => {
    res.json({
        msg: 'Desde postVideo',
    })
}

export const deleteVideo = async (req = request, res = response) => {
    res.json({
        msg: 'Desde deleteVideo',
    })
}

export const updateVideo = async (req = request, res = response) => {
    res.json({
        msg: 'Desde updateVideo',
    })
}