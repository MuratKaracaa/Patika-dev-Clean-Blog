import { Router } from 'express'

import { viewsController } from '../controllers/index.js'

const router = Router()

router.route('/').get(viewsController.homePage)
router.route('/about').get(viewsController.aboutPage)
router.route('/add_post').get(viewsController.addPostPage)

export default router
