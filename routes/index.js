import { Router } from 'express'

import viewsRouter from './views.js'

const router = Router()

router.use('/', viewsRouter)

export default router
