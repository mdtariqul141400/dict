const Htk = require('../models/HTK');
const htk = ()=>{
    return{
        addHtk:async (req,res)=>{
            const {htk} = req.body;
            try {
                const data = new Htk({
                    name:htk,
                    status:true
                })
                const resdata = await data.save()
              return  res.status(200).json(resdata);
            } catch (error) {
                console.log(error)
                return   res.status(500).send(error)
            }
        },
        getallhtk : async (req,res)=>{
            try {
                const allhtk = await Htk.find({});
                res.send(allhtk)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        delete: async(req,res)=>{
            try {
                const _id = req.params.id;
                const ac = await Htk.deleteOne({_id})
                const aData = await Htk.find({})
                res.status(200).json(aData)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        CStatus: async (req,res)=>{
            try {
                const _id = req.params.id;
                const status = !(req.body.status);
                await Htk.findByIdAndUpdate(_id,{status:status});
                const data = await Htk.find({});
                return res.status(200).json(data);
                
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        },
        getActiveHtk:async (req,res)=>{
            try {
                const resDb = await Htk.find({status:true});
                res.json(resDb);
            } catch (error) {
                console.log(error);
                res.status(500).send({msg:error})
            }
        }
    }
}

module.exports = htk; 