const mysql=require("mysql");


module.exports={
	handle:null,
	connect:function(call){
		this.handle=mysql.createConnection({
			host: "localhost", 
			user: "ragemp",
			password: "",
			database: "ragemp",
		});
		
		this.handle.connect(function(err){
			if(err){
				console.log("Datenbankverbindung konnte nicht hergestellt werden!: "+err);
			}else{
				console.log("Datenbankverbindung konnte hergestellt werden.");
			};
		});
		
		setInterval(()=>{
			this.handle=mysql.createConnection({
				host: "localhost", 
				user: "ragemp",
				password: "",
				database: "ragemp",
			});
			
			this.handle.connect(function(err){
				if(err){
					console.log("Datenbankverbindung konnte nicht hergestellt werden!: "+err);
				}else{
					console.log("Datenbankverbindung konnte hergestellt werden.");
				};
			});
		},60*60*1000);
	}
}