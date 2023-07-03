const express = require('express')
const router = express.Router()

const data = [
    {
        name:"vichu",
        email:"vichu45678@gmail.com",
        role:"student"
    },
    {
        name:"suga",
        email:"suga567876@gmail.com",
        role:"student"
        
    },
    {
        name:"priya",
        email:"sugapriya567876@gmail.com",
        role:"student"
        
    }
]

router.get('/',(req,res)=>{
    res
    .status(200)
    .send({
        message:"Data Fetched Successfully",
        users:data
    })
})

router.get('/:id', (req,res)=>{
    if(Number(req.params.id)<data.length)
    {
        res
        .status(200)
        .send({
        message:"data fetch successfully",
        users:data[req.params.id]
    })
    }
    else
    {
        res
        .status(400)
        .send({
            message:"page not found"
        })

    }
})

router.post('/',(req,res)=>{
    data.push(req.body)
    res
    .status(200)
    .send({
        message:"saved succfly"
    })

})

router.put('/:id', (req,res)=>{
    if(Number(req.params.id)<data.length)
    {
    data.splice(req.params.id,1, req.body)
    
        res
        .status(200)
        .send({
        message:"data update successfully",
        users:data[req.params.id]
    })
    }
    else
    {
        res
        .status(400)
        .send({
            message:"page not found"
        })

    }
})

router.delete('/:id', (req,res)=>{
    if(Number(req.params.id)<data.length)
    {
    data.splice(req.params.id,1)
    
        res
        .status(200)
        .send({
        message:"data deleted successfully",
        users:data[req.params.id]
    })
    }
    else
    {
        res
        .status(400)
        .send({
            message:"page not found"
        })

    }
})

module.exports = router