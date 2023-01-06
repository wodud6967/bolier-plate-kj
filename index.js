const express = require('express')
const app = express()
const port = 3000

const{ User } = require("./models/User");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wodud:rosua112@cluster0.alktmxb.mongodb.net/?retryWrites=true&w=majority', {
  
}).then(() => console.log("MongoDB 잘된다."))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {

  //회원 가입 할떄 필요한 정보들은 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);

  user.save((err, userInfo) =>{
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})