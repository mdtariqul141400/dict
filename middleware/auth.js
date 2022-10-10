const Admin = require("../models/admin.js");
const ncrip = require("ncrip")
const auth = async (req,res,next)=>{
    
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
           return next();
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({error});
    }
    
}

module.exports = auth;