import { Router } from 'express'
import { createUser, userLogin } from '../controllers/auth';

const router = Router();

router.post('/register', createUser);
router.post('/login', userLogin);

export default router;
