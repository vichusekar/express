// console.log('welcome express node')

// const express = require('express')
// const app = express()
// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send(' <h1> Welcome to Express Node </h1> ')
// })

// app.post('/users',(req,res)=>{
//     console.log(req.body)
//     res.send({
//         message:"Data send Successfully"
//     })

// })

// app.listen(8000,()=> console.log('App running in port 8000'))

const express = require('express')
const app = express()

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const dashboardRouter = require('./routes/dashboard')

app.use(express.json())

app.use('/', indexRouter)
app.use('/users' ,userRouter)
app.use('/dashboard',dashboardRouter)
// app.use('/users,')

app.listen(8000, ()=>console.log('Router running in port 8000'))