// Project Lakeside V
// made by DorteY
// lake-gaming.com

mp.events.add({
	"Open->RegisterLogin->UI":(execute)=>{
		for(i=0;i<20; i++){
			mp.game.ui.removeNotification(i);
		}
		sceneryCamera=mp.cameras.new('default',new mp.Vector3(344.3341,-998.8612,-98.19622),new mp.Vector3(0,0,0),40);
		sceneryCamera.pointAtCoord(-986.61447,0,-186.61447);
		sceneryCamera.setActive(true);
		mp.game.cam.renderScriptCams(true,false,0,true,false);
		
		
		cefRegisterLogin=mp.browsers.new("package://lakeside/RegisterLogin/index.html");
		cefRegisterLogin.execute(execute);
		mp.gui.cursor.visible=true;
		mp.gui.chat.activate(false);
		setTimeout(() => { mp.gui.cursor.show(true, true); }, 500);
		mp.gui.chat.show(false);
		mp.game.ui.displayRadar(false);
		cefState=true;
		
		mp.gui.chat.safeMode=false;
		
		mp.players.local.freezePosition(true);
		mp.discord.update("Lakeside V","discord.gg/V7Dk4PdE9h");
	},
	"Destroy->RegisterLogin->UI":()=>{
		if(sceneryCamera){
			sceneryCamera.destroy();
		}
		cefRegisterLogin.destroy();
		mp.gui.cursor.visible=false;
		mp.game.cam.renderScriptCams(false,false,0,true,false);
		mp.game.ui.displayRadar(true);
		cefState=false;
		
		mp.gui.chat.activate(true);
		mp.gui.cursor.show(false,false);
		mp.gui.chat.show(true);
		mp.game.ui.displayRadar(true);
		
		mp.players.local.freezePosition(false);
	}
});


mp.events.add("registerLogin.client",function(name,password,type,acceptAge){
	if(name.length>=3 && name.length<=20){
		if(password.length>=5 && password.length<=25){
			if(acceptAge==true){
				mp.events.callRemote("Register->Login",name,password,type);
				mp.discord.update("Lakeside V","discord.gg/V7Dk4PdE9h");
				mp.players.local.setConfigFlag(32,true);
			}else{
				mp.game.graphics.notify("~r~Bestätige, das du 16 Jahre oder älter bist!");
			};
		}else{
			mp.game.graphics.notify("~r~Die Angaben sind ungültig!\nPassword Min. 5 & Max. 25 Zeichen");
		};
	}else{
		mp.game.graphics.notify("~r~Die Angaben sind ungültig!\nUsername Min. 3 & Max. 20 Zeichen");
	};
});