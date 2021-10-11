import { Router } from 'express'
import { userGet, userPost } from '../controllers/user';
const router = Router();

router.get('/', userGet);
router.post('/', userPost);

export default router;
