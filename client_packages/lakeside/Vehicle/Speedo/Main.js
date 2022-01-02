let cefSpeedo = mp.browsers.new("package://lakeside/Vehicle/Speedo/CEF/speedometer.html");
let showed = false;
let player = mp.players.local;

mp.events.add('render', () =>{
	if(player.getVariable("loggedIn")===1){
		if (player.vehicle && player.vehicle.getPedInSeat(-1)===player.handle){
			if(showed === false){
				cefSpeedo.execute("showSpeedo();");
				showed = true;
			}
			let vel = player.vehicle.getSpeed() * 3.6;
			let rpm = player.vehicle.rpm * 1000;
			
			let gas = player.vehicle.getVariable('Veh->Data->Fuel');
			cefSpeedo.execute(`update(${vel}, ${rpm}, ${gas});`);
		}else{
			if(showed){
				cefSpeedo.execute("hideSpeedo();");
				showed = false;
			}
		}
	}
});

setInterval(function(){_intervalFunction();},1000);

function _intervalFunction() {
	let player = mp.players.local;
	if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle){
		let speed = mp.players.local.vehicle.getSpeed();
		let veh_data = JSON.stringify({"speedofcar":speed});
		mp.events.callRemote('calc_km', (player, veh_data));
	}
};