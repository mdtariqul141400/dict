const Admin = require('../models/admin.js');
const ncrip = require("ncrip");
const auth = ()=>{
    return {
        chackBycookie : async(req,res)=>{
            const {me,go} = req.cookies;
            if(!me && !go){
                return res.status(401).send({err:"not authenticat"})
            }
            try {
                const _id = ncrip.dnc(me,go);
                const data = await Admin.findOne({_id});
                if(!data){
                    return  res.status(401).send({err:"not authenticat"})
                }else{
                    return res.status(200).send(data)
                }
            } catch (error) {
                return res.status(500).send({error});
            }
            
            res.json({name:"ok"})
        }
    }
}

module.exports= auth;