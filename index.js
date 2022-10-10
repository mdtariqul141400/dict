require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const mongoose = require('mongoose');
 


// set port 
const PORT = process.env.PORT || 3300;

// config cors 
const cors = require("cors");
app.use(cors({
    credentials: true,
    origin : "*"
}))

    app.use(express.static("front-end/build"));

    const path = require("path");

    

// database connections 
mongoose.connect(process.env.MONGO_CONNECTION_URL,{ useUnifiedTopology: true ,useNewUrlParser: true }).then((result) => {
    console.log('db connected');
}).catch((err) => {
    console.log(err)
});


// uuid
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// console.log(uuidv4());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());



const rout = require('./router/router');
rout(app);

app.use((err,req,res,next)=>{
    if(err){
        res.status(500).send(err.message);
    }else{
        res.send("sucsses")
    }
})



app.get("*", (req, res) => {

    res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));

})
// init server 
app.listen(PORT , () => {
    console.log(`server start on:`)
    console.log(`http://localhost:${PORT}`)
})