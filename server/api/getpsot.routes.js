const Post = require('../model/Post')
const Router = require('express')
const router = Router()

router.post('/posts', async(req,res)=>{
    let posts = await Post.findAll({raw:true})
    return res.json(posts) 
})


module.exports = router