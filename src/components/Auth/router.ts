import { Router } from 'express';
import {signup, signin, logout} from '@components/Auth/controller';

const router: Router = Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.delete('/logout', logout);

export default router;
