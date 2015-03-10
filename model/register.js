exports.company = function(db, cname, email, uname, admin, password){
		

	var collection = db.get('Company');
	collection.insert(
		{ Company: cname ,

Employees: [
    {
        email: email ,
        admin: admin ,
        password: password   
    }
    ]
}, function(err, docs){
	return true;
});
};


exports.addTeam = function (db, cname, email, admin){
	console.log(db);
	console.log(cname);
	console.log(email);
	console.log(uname);
	console.log(admin);
	
	var collection = db.get('Company');
	var i = 0;
	while(i < email.length){
		
	collection.update({Company : cname}, 
		{ $push :
	   {Employees: {$each :[
    {
        email: email[i] ,
        admin: admin[i]  
    }
    ]
		}	}}, function(err, docs){
			return true;
		});
	i++;
	}
	
};

