const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wodud:rosua112@cluster0.alktmxb.mongodb.net/?retryWrites=true&w=majority', {
  
}).then(() => console.log("MongoDB 잘된다."))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})