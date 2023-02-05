const Post = require('../model/Post')
const Router = require('express')
const router = Router()


router.get('/post/:id', async(req,res)=>{
    let id = req.params.id
    let curpost = await Post.findOne({
        where: {
            id : id
        }
    })
    if(curpost !== null){
        return res.json(curpost)
    }else{
        return res.json('redirect')
    }
})


module.exports = router