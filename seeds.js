var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data=[
	{name:"hghyju", image:"http://pickwick-dam.com/wp-content/uploads/2015/08/17991101764_fcb19c7311_k.jpg", description:"good for you"},
    {name:"hghyju1", image:"http://pickwick-dam.com/wp-content/uploads/2015/08/17991101764_fcb19c7311_k.jpg", description:"good for you"},
    {name:"hghyju2", image:"http://pickwick-dam.com/wp-content/uploads/2015/08/17991101764_fcb19c7311_k.jpg", description:"good for you"}
]


function seedDB(){
	Campground.remove({},function(err){
	if(err){
		console.log(err);
	} 
		console.log("removed campground!");

	data.forEach(function(seed){
   Campground.create(seed,function(err,campground){
   	    if(err){
   	    	console.log(err);
   	    } else {
   	    	console.log("add a campground");
   	    	Comment.create(
   	    		{
   	    			text:"This place is great",
   	    			author: "Homer"
   	    	}, function(err,comment){
                if(err){
                	console.log(err);
                }else{

                campground.comments.push(comment);
                campground.save();
                console.log("Created new comments");
            }
   	    	});
   	    }
   });	
});
});
}


module.exports = seedDB;