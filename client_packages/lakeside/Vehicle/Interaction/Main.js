// Project Lakeside V
// made by DorteY
// lake-gaming.com

mp.keys.bind(0x58,true,function(){
	let localPlayer=mp.players.local;
	let idVehicle=mp.game.vehicle.getClosestVehicle(localPlayer.position.x,localPlayer.position.y,localPlayer.position.z,7,0,70);
	let vehicle=mp.vehicles.atHandle(idVehicle);
	
	if(localPlayer.getVariable("loggedIn")===1){
		if(cefState==true)return;
		if(mp.gui.cursor.visible)return;
		
		
		if(localPlayer.vehicle){
			cefInteractionVeh=mp.browsers.new('package://lakeside/Vehicle/Interaction/In/index.html');
			
			mp.gui.cursor.visible=true;
			mp.gui.chat.activate(false);
			mp.gui.cursor.show(true,true);
			mp.gui.chat.show(false);
			cefState=true;
		}else if(vehicle && !idVehicle==0){
			cefInteractionVeh=mp.browsers.new('package://lakeside/Vehicle/Interaction/Out/index.html');
			
			mp.gui.cursor.visible=true;
			mp.gui.chat.activate(false);
			mp.gui.cursor.show(true,true);
			mp.gui.chat.show(false);
			cefState=true;
		};
	};
});

function CloseVehicleInteractionUI(){
	if(cefInteractionVeh){
		cefInteractionVeh.destroy(); 
		cefInteractionVeh=null;
	}
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	mp.game.ui.displayRadar(true);
	cefState=false;
}
exports.CloseVehicleInteractionUI=CloseVehicleInteractionUI;


mp.events.add({
	"Close->Vehicle->Interaction->UI":()=>{
		CloseVehicleInteractionUI();
	},
	"Start->Stop->Vehicle->Engine":()=>{
		if(mp.players.local.getVariable("loggedIn")===1){
			if(mp.players.local.vehicle && mp.players.local.vehicle.getPedInSeat(-1)===mp.players.local.handle){
				let localPlayer=mp.players.local;
				let vehicle=localPlayer.vehicle;
				
				if(vehicle){
					if(vehicle.getVariable("Veh->Data->Owner")==localPlayer.name){
						let speed=vehicle.getSpeed()*3.6;
						if(speed<=5){
							if(vehicle.getVariable("Veh->Data->Engine")==false){
								vehicle.setEngineOn(true,true,true);
								mp.events.callRemote("Change->Vehicle->Enginestate",vehicle,true);
								mp.game.graphics.notify('Motor ~g~angeschaltet.');
							}else{
								vehicle.setEngineOn(false,true,true);
								mp.events.callRemote("Change->Vehicle->Enginestate",vehicle,false);
								mp.game.graphics.notify('Motor ~r~abgeschaltet.');
							}
						}
					}
				}
			}
		}
	},
	"Unlock->Lock->Vehicle->Doors":()=>{
		if(mp.players.local.getVariable("loggedIn")===1){
			let localPlayer=mp.players.local;
			let idVehicle=mp.game.vehicle.getClosestVehicle(localPlayer.position.x,localPlayer.position.y,localPlayer.position.z,7,0,70);
			let vehicle=mp.vehicles.atHandle(idVehicle);
			
			mp.events.callRemote("Change->Vehicle->Lockstate",vehicle);
		};
	},
	"Refuel->Vehicle->C":()=>{
		if(mp.players.local.getVariable("loggedIn")===1){
			let localPlayer=mp.players.local;
			let idVehicle=mp.game.vehicle.getClosestVehicle(localPlayer.position.x,localPlayer.position.y,localPlayer.position.z,5,0,70);
			let vehicle=mp.vehicles.atHandle(idVehicle);
			
			mp.events.callRemote("Refuel->Vehicle->S",vehicle);
		};
	},
	"Repair->Vehicle->C":()=>{
		if(mp.players.local.getVariable("loggedIn")===1){
			let localPlayer=mp.players.local;
			let idVehicle=mp.game.vehicle.getClosestVehicle(localPlayer.position.x,localPlayer.position.y,localPlayer.position.z,5,0,70);
			let vehicle=mp.vehicles.atHandle(idVehicle);
			
			mp.events.callRemote("Repair->Vehicle->S",vehicle);
		};
	},
	"Open->Close->Vehicle->Hood":()=>{
		let localPlayer=mp.players.local;
		if(localPlayer.vehicle.hood){
			localPlayer.vehicle.hood = false;
			localPlayer.vehicle.setDoorShut(4, false);
		}else{
			localPlayer.vehicle.hood = true;
			localPlayer.vehicle.setDoorOpen(4, false, false);
		};
	},
	"Change->Seatbelt->State->Client":()=>{
		let localPlayer=mp.players.local;
		if(localPlayer.getVariable("Seatbelt")==true){
			localPlayer.setConfigFlag(32,false);
			
			mp.game.graphics.notify("Du hast dich ~g~angeschnallt");
		}else if(localPlayer.getVariable("Seatbelt")==false){
			localPlayer.setConfigFlag(32,true);
			
			mp.game.graphics.notify("Du hast dich ~r~abgeschnallt");
		}
	},
	"playerExitVehicle":()=>{
		let localPlayer=mp.players.local;
		if(localPlayer.getVariable("Seatbelt")==true){
			localPlayer.setConfigFlag(32,false);
		}
	},
	"Sync->Vehicle->Engine":()=>{
		
	}
});


mp.keys.bind(71, false, function(){
    if (mp.gui.cursor.visible || player.vehicle) return;
	const pos = player.position;
	const vehHandle = mp.game.vehicle.getClosestVehicle(pos.x, pos.y, pos.z, 5, 0, 70);
	const vehicle = mp.vehicles.atHandle(vehHandle);
	if (!vehicle || !vehicle.isAnySeatEmpty() || vehicle.getSpeed() > 5) return;
	for (let i = 0; i < vehicle.getMaxNumberOfPassengers(); i++) {
		if (!vehicle.isSeatFree(i)) continue;
		player.taskEnterVehicle(vehicle.handle, 5000, i, 1, 1, 0);
		break;
	}
});