import express from 'express';
import {userLogin, userRegister,logout,getMyProfile,getUserById} from '../controllers/user.js'
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register',userRegister)

router.post('/login',userLogin)

router.get('/logout',logout)

router.get('/myprofile',isAuthenticated, getMyProfile);

router.get('/:id',getUserById);

export default router;