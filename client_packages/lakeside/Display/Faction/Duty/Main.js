"use strict";

mp.events.add({
	"Close->Faction->Duty->UI":()=>closeCefFactionDuty(),
	"Open->Faction->Duty->UI":()=>{
		if(mp.players.local.getVariable("loggedIn")===1 && cefState==false){
			cefFactionDuty=mp.browsers.new("package://lakeside/Display/Faction/Duty/index.html");
			//cefFactionDuty.execute(execute);
			mp.players.local.freezePosition(true);
			
			mp.gui.cursor.visible=true;
			mp.gui.chat.activate(false);
			mp.gui.cursor.show(true,true);
			mp.gui.chat.show(false);
			mp.game.ui.displayRadar(false);
			cefState=true;
		}
	}
});

function closeCefFactionDuty(){
	if(cefFactionDuty){
		cefFactionDuty.destroy(); 
		cefFactionDuty=null;
	}
	mp.players.local.freezePosition(false);
	
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	mp.game.ui.displayRadar(true);
	cefState=false;
}
exports.closeCefFactionDuty=closeCefFactionDuty;