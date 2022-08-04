const mongoose=require("mongoose");
const faculty=mongoose.Schema({
	profilepic:{
		typr:Buffer,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	designation:{
		type:String,
		required:true
	},
	field:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	contact:{
		type:Number,
		required:true
	}
}, {collection:"profile"});

module.exports=mongoose.model('Profile',faculty);