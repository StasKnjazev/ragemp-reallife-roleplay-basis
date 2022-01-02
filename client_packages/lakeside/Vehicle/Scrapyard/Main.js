// Project Lakeside V
// made by DorteY
// lake-gaming.com

"use strict";

mp.events.add({
	"Close->Scrapyard->UI":()=>closeCefScrapyard(),
	"Open->Scrapyard->UI":(execute)=>{
		if(mp.players.local.getVariable("loggedIn")===1 && cefState==false){
			if(mp.players.local.vehicle && mp.players.local.vehicle.getPedInSeat(-1)===mp.players.local.handle){
				cefScrapyard=mp.browsers.new("package://lakeside/Vehicle/Scrapyard/index.html");
				cefScrapyard.execute(execute);
				mp.players.local.vehicle.freezePosition(true);
				
				mp.gui.cursor.visible=true;
				mp.gui.chat.activate(false);
				mp.gui.cursor.show(true,true);
				mp.gui.chat.show(false);
				cefState=true;
			}
		}
	}
});

function closeCefScrapyard(){
	if(cefScrapyard){
		cefScrapyard.destroy(); 
		cefScrapyard=null;
	}
	mp.players.local.vehicle.freezePosition(false);
	
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	cefState=false;
}
exports.closeCefScrapyard=closeCefScrapyard;