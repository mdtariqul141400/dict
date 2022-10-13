const Admin = require("../models/admin.js");
const ncrip = require("ncrip");

const LoginCon = ()=>{
    return {
        login : async(req,res)=>{
            let {username,password} = req.body;
            // console.log(password)
            try {
                const resdb = await Admin.findOne({name:"Dict"});
                // console.log(resdb);
                const mainpass = ncrip.dnc(resdb.password,process.env.KEY);
                // console.log({
                //     username,password,mainpass,resdb
                // })
                if(username === resdb.username && password  === mainpass){
        
                    const go = Math.round(Math.random()*1000);
                    const me = ncrip.enc(resdb._id,go);
        
                   return res.status(200).json({
                    me,
                    go
                   })
                }else{
                   return  res.status(401).send("unauthorized")
                }
            } catch (error) {
                console.log(error)
                res.status(500).send({error})
            }
            
            res.status(500)
        },
        changepassword: async(req,res)=>{
            return res.send("this is demo you can't change password !!")
            try {
                let {Pass,oldPass} = req.body;
                const {me,go} = req.cookies;
                const _id = ncrip.dnc(me,go);
                const resdb = await Admin.findOne({_id});
                const mainpass = ncrip.dnc(resdb.password,process.env.KEY);
                if(oldPass === mainpass){
                    const newPass = ncrip.enc(Pass,process.env.KEY);
                    await Admin.findByIdAndUpdate(_id,{password:newPass});
                   return res.status(200).send("ok")
                }else{
                    console.log("this")
                   return  res.status(401).send("unauthorized")
                }
            } catch (error) {
                // console.log(error)
              return res.status(500).send(error) 
            }
        }
        
    }
}

module.exports =  LoginCon;