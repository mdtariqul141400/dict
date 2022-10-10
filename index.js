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
if ( process.env.NODE_ENV == "production"){

    app.use(express.static("front-end/build"));

    const path = require("path");

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'front-end', 'build', 'index.html'));

    })


}

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
// init server 
app.listen(PORT , () => {
    console.log(`server start on:`)
    console.log(`http://localhost:${PORT}`)
})