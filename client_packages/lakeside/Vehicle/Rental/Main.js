// Project Lakeside V
// made by DorteY
// lake-gaming.com

"use strict";

mp.events.add({
	"Close->Rental->UI":()=>closeCefRental(),
	"Open->Rental->UI":(execute)=>{
		if(mp.players.local.getVariable("loggedIn")===1 && cefState==false){
			cefRental=mp.browsers.new("package://lakeside/Vehicle/Rental/index.html");
			cefRental.execute(execute);
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
	if(cefRental){
		cefRental.destroy(); 
		cefRental=null;
	}
	mp.players.local.freezePosition(false);
	
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	cefState=false;
}
exports.closeCefRental=closeCefRental;