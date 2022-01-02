// Project Lakeside V
// made by DorteY
// lake-gaming.com

mp.events.add({
	"Close->Carhouse->UI":()=>CloseCarhouseUI(),
	"Open->Carhouse->UI":(execute)=>{
		cegCarshop=mp.browsers.new("package://lakeside/Vehicle/CarShop/"+String(execute)+"/index.html");
		cegCarshop.execute(execute);
		mp.players.local.freezePosition(true);
		
		mp.gui.cursor.visible=true;
		mp.gui.chat.activate(false);
		mp.gui.cursor.show(true,true);
		mp.gui.chat.show(false);
		mp.game.ui.displayRadar(false);
		cefState=true;
	}
});

function CloseCarhouseUI(){
	if(cegCarshop){
		cegCarshop.destroy(); 
		cegCarshop=null;
	}
	mp.players.local.freezePosition(false);
	
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	mp.game.ui.displayRadar(true);
	cefState=false;
}
exports.CloseCarhouseUI=CloseCarhouseUI;