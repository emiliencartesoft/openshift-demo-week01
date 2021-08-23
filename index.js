const express = require('express')
const app = express()
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><img src="https://i.imgur.com/HV2b6b6.jpg" />')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
