import { Router, request, response } from 'express'


const router = Router();

router.get('/', (req = request, res = response) => {
    res.send({
        msg: 'Hello world from auth.ts'
    })
});

export default router;
