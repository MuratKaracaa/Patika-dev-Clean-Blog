import express from 'express'

import routes from './routes/index.js'
import * as constants from './constants/index.js'

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static(constants.publicPath))
app.use(routes)

app.get('/blog', (req, res) => {
    const blog = { id: 1, title: 'Blog title', description: 'Blog description' }
    return res.status(200).json(blog)
})

app.listen(port, () => console.log(`Listening on ${port}`))
