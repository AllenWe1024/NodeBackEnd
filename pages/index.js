const express = require('express')
const app = express()
const port = 80

app.use(express.static('public'))

app.get('/', (req, res) => {
  // console.log(__dirname);
  res.sendFile("./login.html");
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
