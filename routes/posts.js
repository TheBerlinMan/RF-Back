import { Router } from "express"
import * as postsCtrl from '../controllers/posts.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/', checkAuth, postsCtrl.index)
router.get('/:postId', checkAuth, postsCtrl.show)
router.post('/', checkAuth, postsCtrl.create)
router.put('/:blogId', checkAuth, postsCtrl.update)


export { router }