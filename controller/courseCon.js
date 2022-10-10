
const Course = require("../models/course");

const coures = ()=>{
    return {
        addCourse: async (req,res)=>{
            const {course} = req.body;
            try {
                const data = new Course({
                    name:course,
                    status:true
                })
                const resdata = await data.save()
              return  res.status(200).json(resdata);
            } catch (error) {
                console.log(error)
                return   res.status(500).send(error)
            }
        },
        getallcourse : async (req,res)=>{
            try {
                const allcourse = await Course.find({});
                res.send(allcourse)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        delete: async(req,res)=>{
            try {
                const _id = req.params.id;
                const ac = await Course.deleteOne({_id})
                const aData = await Course.find({})
                res.status(200).json(aData)
            } catch (error) {
                res.status(500).send(error)
            }
        },
        CStatus: async (req,res)=>{
            try {
                const _id = req.params.id;
                const status = !(req.body.status);
                await Course.findByIdAndUpdate(_id,{status:status});
                const data = await Course.find({});
                return res.status(200).json(data);
                
            } catch (error) {
                console.log(error);
                return res.status(500).send(error)
            }
        },
        getActiveCourse:async (req,res)=>{
            try {
                const resDb = await Course.find({status:true});
                res.json(resDb);
            } catch (error) {
                console.log(error);
                res.status(500).send({msg:error})
            }
        }
    }
}

module.exports = coures;