// Project Lakeside V
// made by DorteY
// lake-gaming.com

"use strict";

mp.events.add({
	"Close->Tankstation->UI":()=>closeCefTankstation(),
	"Open->Tankstation->UI":(execute)=>{
		if(mp.players.local.getVariable("loggedIn")===1 && cefState==false){
			if(mp.players.local.vehicle && mp.players.local.vehicle.getPedInSeat(-1)===mp.players.local.handle){
				let speed=mp.players.local.vehicle.getSpeed()*3.6;
				if(speed<=50){
					cefTankstation=mp.browsers.new("package://lakeside/Vehicle/Tankstation/index.html");
					cefTankstation.execute(execute);
					mp.players.local.vehicle.freezePosition(true);
					
					mp.gui.cursor.visible=true;
					mp.gui.chat.activate(false);
					mp.gui.cursor.show(true,true);
					mp.gui.chat.show(false);
					cefState=true;
				}else{
					mp.game.graphics.notify('~r~Fahre langsam in die Tankstelle!');
				}
			}
		}
	}
});

function closeCefTankstation(){
	if(cefTankstation){
		cefTankstation.destroy(); 
		cefTankstation=null;
	}
	mp.players.local.vehicle.freezePosition(false);
	
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	cefState=false;
}
exports.closeCefTankstation=closeCefTankstation;