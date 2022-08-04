const express=require("express");
const router=express.Router();
//importing mongoose modules
const Post=require('../models/profile');

router.post('/', async (req,res)=>{
	const details = new Post({
		profilepic:req.body.profilepic,
		name:req.body.name,
		designation:req.body.designation,
		field:req.body.field,
		email:req.body.email,
		contact:req.body.contact
	})
	try{
		await details.save();
		res.send({status:'true',message:'db saved'});
	}
	catch(err){
		res.send(err.message)
	}
	
})

router.get('/',async (req,res)=>{
	try{
		const info=await Post.find();
		res.send(posts);
	}
	catch(err){
		res.send(err.message);
	}
})

router.delete("/",async (req,res)=>{
	const post=await Post.remove("_id.params.id")
})

module.exports=router;