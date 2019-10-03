const express = require('express')
const server = express()
const lambdaRouter = require('./lambda.js')

server.use(express.json())

server.use('/api/lambda', lambdaRouter)
server.get('/', (req, res) => {
  res.send('Practicing on node')
})

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`\n** server is running on ${port} **\n`)
})
