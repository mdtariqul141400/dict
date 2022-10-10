
const LoginCon = require("../controller/loginCon.js");
const Auth = require("../controller/AuthChacker.js")
const Course = require("../controller/courseCon");
const auth = require('../middleware/auth')
const entry = require('../controller/entry');
const Htk = require("../controller/HtkCon");
function rout(app){
           
            
    // set route 
    // set home route 
      

        // login post req controller 
        app.post("/login", LoginCon().login)
        app.post("/changepassword",auth,LoginCon().changepassword)

        //chack auth 
        app.get('/chackAuth',Auth().chackBycookie);

        // add course
        app.post('/addcourse',auth,Course().addCourse)
        // get all course
        app.get("/getallcourse",auth,Course().getallcourse)
        app.get("/deletecourse/:id",auth,Course().delete)
        app.get("/getActiveCourse",auth,Course().getActiveCourse)
        app.post("/cstatus/:id",auth,Course().CStatus)
        // add htk
        app.post('/addhtk',auth,Htk().addHtk)
        app.get("/getallhtk",auth,Htk().getallhtk)
        app.post("/htkstatus/:id",auth,Htk().CStatus)
        app.get("/getActiveHtk",auth,Htk().getActiveHtk)
        
        app.get("/deletehtk/:id",auth,Htk().delete)
        //entry route
        app.post('/addentry',auth,entry().addEntry)
        app.get("/getentrymonth",auth,entry().month)
        app.get("/getappointment",auth,entry().getAppointment)
        app.get("/getentryby/:id",auth,entry().getByID)
        app.post("/changestatusentry/:id",auth,entry().changeStatus)
        app.post("/changenextdate",auth,entry().changeNextCD)
        app.post("/getyeardataan",auth,entry().getyeardataan)
        //query data
        app.post("/queryentrydata",auth,entry().query)
        app.get("/getadmitedcount",auth,entry().getadmitedcount)

}

module.exports = rout;