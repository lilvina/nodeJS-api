const express = require('express')
const server = express()

server.use(express.json())

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`\n** server is running on ${port} **\n`)
})
