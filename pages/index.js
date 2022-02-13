const express = require('express')
const app = express()
const port = 80

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/login.html");
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
