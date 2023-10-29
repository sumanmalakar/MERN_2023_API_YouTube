import express from 'express'
import { isAuthenticated } from '../middlewares/auth.js';
import {createBlog,myBlog,updateBlog,deleteBlog} from '../controllers/blog.js'

const router = express.Router();

router.post('/new',isAuthenticated,createBlog);

router.get('/myblogs',isAuthenticated,myBlog);

router.put('/:id',isAuthenticated,updateBlog);

router.delete('/:id',isAuthenticated,deleteBlog);




export default router;