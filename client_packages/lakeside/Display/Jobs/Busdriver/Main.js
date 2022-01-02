// Project Lakeside V
// made by DorteY
// lake-gaming.com

mp.events.add({
	"Close->Job->UI":()=>CloseJobUI(),
	"Open->Job->UI":(execute)=>{
		if(cefState==true)return;
		
		cefJob=mp.browsers.new("package://lakeside/Display/Jobs/"+String(execute)+"/index.html");
		cefJob.execute(execute);
		mp.players.local.freezePosition(true);
		mp.gui.cursor.visible=true;
		mp.gui.chat.activate(false);
		mp.gui.cursor.show(true,true);
		mp.gui.chat.show(false);
		mp.game.ui.displayRadar(false);
		cefState=true;
	}
});

function CloseJobUI(){
	if(cefJob){
		cefJob.destroy(); 
		cefJob=null;
	}
	mp.players.local.freezePosition(false);
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	mp.game.ui.displayRadar(true);
	cefState=false;
}
exports.CloseJobUI=CloseJobUI;