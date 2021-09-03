import { Router } from 'express'
import {
    getVideos,
    getVideo,
    postVideo,
    deleteVideo,
    updateVideo,
} from '../controllers/videos';

const router = Router();


router.get('/', getVideos)
router.get('/video:id', getVideo)
router.post('/', postVideo)
router.delete('/:id', deleteVideo)
router.put('/:id', updateVideo)




export default router;
