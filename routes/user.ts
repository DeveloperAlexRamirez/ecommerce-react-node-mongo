import { Router } from 'express'
import { userPost } from '../controllers/user';
const router = Router();

router.post('/', userPost);

export default router;
