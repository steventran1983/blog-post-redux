import express from 'express'

import postsRouter from './postsRouter.js'

const router = express.Router()


router.get('/', (req, res, next) => {
  res.send("This is API")
})

router.get('/post',postsRouter)

export default router