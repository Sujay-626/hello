const express=require ("express");
const app=express();
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
//importing facultyroutes to main file
const fac_routes=require('.routes/facultyroutes.js');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/details',fac_routes);
app.get('/',(req,res)=>{
	res.send('Hello World!!');
});

mongoose.connect("mongodb://localhost:27017/FacultyProfile",{useUrlNewParser:true},()=>{
	console.log("Connected to db");
});

app.listen(8000,()=>{
	console.log("Listening to the port 8000");
});