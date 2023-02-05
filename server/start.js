const express = require('express')
const app = express()

const port = 8000
const cors = require('./middleware/cors.middleware')
app.use(express.json())
app.use(cors)


const auth = require('./api/auth.routes')
const givepost = require('./api/getpsot.routes')
const currentpsot = require('./api/currentpost.routes')
app.post('/registration', auth)
app.post('/login', auth)
app.post('/posts' , givepost)
app.get('/post/:id', currentpsot )

const Post = require('./model/Post')

// for(let i =0;i<4;i++){
//   Post.create({
//     title: "Язык JavaScript" + i,
//     body: "JavaScript- язык программирования" + i
//   })
  
//   Post.sync({ alter: true })
// }


app.listen(port, function () {
  console.log(`Server listen ${port}`)
})
