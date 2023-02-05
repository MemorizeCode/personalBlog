const Router = require('express')
const router = Router()
const User = require('../model/User')
const bcrypt = require('bcrypt')

router.post('/registration', async (req, res)=>{
    try{
        const {login, password, repeatpassword} = req.body
        //Проверяем валидность
        if((login.length && password.length && repeatpassword.length) <= 5 ||
        (login.length && password.length && repeatpassword.length) > 10
        ){
            return res.json("Длинна должна состовлять от 6 символов дл 10")
        }else{
            //Проверяем уже сущ акк
            let user = await User.findOne({
                where: {
                    login:login
                }
            })
            if(user){
                return res.json("Так пользоват. уже есть")
            }else{
                let hashpassword = await bcrypt.hash(password, 5)
                User.create({
                    login: login,
                    password: hashpassword
                })
                return res.json("Вы зарегались!")
            }
        }
        
    }catch(e){
        console.log(e)
    }
})

router.post('/login', async (req,res)=>{
    let {login,password} = req.body
    let user = await User.findOne({
        where:{
            login : login
        }
    })
    if(user){
        //Проверяем пароль
        let inHash = bcrypt.compareSync(password, user.password)
        if(!inHash){
            return res.json({message: "Пароль не верный"})
        }
        else{
            return res.json({message: "Пароль верный"})
        }
    }else{
        return res.json({message: 'Нету такого логина'})
    }
})



module.exports = router