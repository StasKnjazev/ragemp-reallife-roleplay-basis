const mysql = require("../Database.js");
const time=require("../time.js");

mp.events.addCommand("mypos",(player)=>{
	if(player){
		if(player.getVariable("AdminLevel")>=5){
			console.log(player.position.x,player.position.y,player.position.z,player.heading);
		};
	};
});
mp.events.addCommand("tp",(player)=>{
	if(player){
		if(player.getVariable("AdminLevel")>=5){
			player.position = new mp.Vector3(405.676,6526.119,27.709);
		}
	}
});

mp.events.addCommand("fix",(player) => {
	if(player.getVariable("AdminLevel")>=5){
		if(player.vehicle) {
			player.vehicle.repair();
			player.notify("Das Fahrzeug wurde repairiert.");
		}
		else {
			player.notify("Du sitzt in keinem Fahrzeug!");
		};
	};
});
let Adminvehicle = {};

mp.events.addCommand("acar",(player,vehicleName) => {
	if(player){
		if(player.getVariable("AdminLevel")>=5){
			if(!vehicleName) { vehicleName = "turismor" };
			AdminvehicleDestroy(player);
			let playerPosition = player.position;
			
			Adminvehicle[player.name] = mp.vehicles.new(mp.joaat(vehicleName),playerPosition,{
				plate: "ACAR",
				color: [[255,255,255],[255,255,255]],
			});
			Adminvehicle[player.name].setVariable("Veh->Data->Owner",player.name)
			Adminvehicle[player.name].setVariable("Veh->Data->Fuel",999)
		};
	};
});

function AdminvehicleDestroy(player) {
	if(Adminvehicle[player.name]) {
		Adminvehicle[player.name].destroy();
		Adminvehicle[player.name] = null;
	};
};
mp.events.add("playerQuit",AdminvehicleDestroy);
mp.events.add("playerDeath",AdminvehicleDestroy);
mp.events.addCommand("acardestroy",AdminvehicleDestroy);



mp.events.addCommand("rkick",(player,target,reason)=>{
	if(player){
		if(player.getVariable("loggedIn")==1){
			if(player.getVariable("AdminLevel")>=2){
				if(!target){
					player.outputChatBox("Benutze /rkick Spieler")
				}
				mp.players.forEach((playerToKick,id)=>{
					if(playerToKick.name==target){
						playerToKick.outputChatBox('Du wurdest gekickt!');
						playerToKick.kick('Du wurdest gekickt!');
					}
				});
			};
		};
	};
});

mp.events.addCommand("rban",(player,target,reason)=>{
	if(player){
		if(player.getVariable("loggedIn")==1){
			if(player.getVariable("AdminLevel")>=3){
				if(!target){
					player.outputChatBox("Benutze /rban Spieler")
				}
				mp.players.forEach((playerToBan,id)=>{
					if(playerToBan.name==target){
						mysql.query("INSERT INTO bans SET Username=?,Admin=?,SocialClub=?,Reason=?",[playerToBan.name,player.name,playerToBan.socialClub,"NaN"],function(err,res){
							if(!err){
								console.log(err);
							}else{
								player.notify("~r~Ban error #559972178");
							}
						});
						playerToBan.outputChatBox('Du wurdest gebannt!');
						playerToBan.kick('Du wurdest gebannt!');
					}
				});
			};
		};
	};
});

mp.events.addCommand("o",(player,msg)=>{
	if(player.getVariable("loggedIn")==1){
		if(player.getVariable("AdminLevel")>=4){
			mp.players.broadcast("<strong style='color:#FF0005'>["+time.getTime()+"] | "+player.name+":"+msg+"</strong>");
		};
	};
});