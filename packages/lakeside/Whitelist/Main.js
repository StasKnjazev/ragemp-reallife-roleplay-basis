const allowedPlayers = require("./account.json");

mp.events.add("playerJoin",(player)=>{
	if(allowedPlayers.indexOf(player.socialClub)===-1){
		player.kick("You are not on the Whitelist!");
	};
});