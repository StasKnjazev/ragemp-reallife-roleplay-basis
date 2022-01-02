// Project Lakeside V
// made by DorteY
// lake-gaming.com



mp.keys.bind(0x71,true,function(){
	if(mp.players.local.getVariable("loggedIn")==1){
		if(cefState==true)return;
		if(mp.gui.cursor.visible)return;
		
		cefF2Menu=mp.browsers.new("package://lakeside/Display/F2Menu/index.html");
		
		mp.gui.cursor.visible=true;
		mp.gui.chat.activate(false);
		mp.gui.cursor.show(true,true);
		mp.gui.chat.show(false);
		cefState=true;
	}
});

mp.events.add({
	"Close->F2Menu->UI":()=>{
		if(cefF2Menu){
			cefF2Menu.destroy(); 
			cefF2Menu=null;
		}
		
		mp.gui.cursor.visible=false;
		mp.gui.chat.activate(true);
		mp.gui.cursor.show(false,false);
		mp.gui.chat.show(true);
		cefState=false;
	}
});