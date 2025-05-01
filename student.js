const express = require('express')
const app = express()
const port = 3000

app.get('/student', (req, res) => {
  res.send('Student')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
