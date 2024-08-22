import express from 'express'
import { json } from 'body-parser'
import { userRoutes } from '../routes/UserRoutes'

const app = express()
app.use(json())

app.use('/api', userRoutes)

app.listen(3000, () => {
  console.log('server is running on port 3000')
})
