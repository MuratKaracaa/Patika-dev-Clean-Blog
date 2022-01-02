import express from 'express'

const app = express()
const port = process.env.PORT || 3000

const blog = { id: 1, title: 'Blog title', description: 'Blog description' }

app.get('/', (req, res) => {
    return res.status(200).json(blog)
})

app.listen(port, () => console.log(`Listening on ${port}`))
