// Project Lakeside V
// made by DorteY
// lake-gaming.com

"use strict";

mp.events.add({
	"Close->Export->UI":()=>closeCefRental(),
	"Open->Export->UI":(execute)=>{
		if(mp.players.local.getVariable("loggedIn")===1 && cefState==false){
			cefExport=mp.browsers.new("package://lakeside/Display/Export/index.html");
			cefExport.execute(execute);
			mp.players.local.freezePosition(true);
			
			mp.gui.cursor.visible=true;
			mp.gui.chat.activate(false);
			mp.gui.cursor.show(true,true);
			mp.gui.chat.show(false);
			cefState=true;
		}
	}
});

function closeCefRental(){
	if(cefExport){
		cefExport.destroy(); 
		cefExport=null;
	}
	mp.players.local.freezePosition(false);
	
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	cefState=false;
}
exports.closeCefRental=closeCefRental;