// Project Lakeside V
// made by DorteY
// lake-gaming.com

"use strict";

mp.events.add({
	"Close->Hospital->UI":()=>closeCefHospital(),
	"Open->Hospital->UI":()=>{
		if(mp.players.local.getVariable("loggedIn")===1 && cefState==false){
			cefHospital=mp.browsers.new("package://lakeside/Display/Hospital/index.html");
			mp.players.local.freezePosition(true);
			
			mp.gui.cursor.visible=true;
			mp.gui.chat.activate(false);
			mp.gui.cursor.show(true,true);
			mp.gui.chat.show(false);
			cefState=true;
		}
	},
	"startDeathScreen":()=>{
		cefState=false;
		if(mp.players.local.getVariable("loggedIn")===1){
			cefDeath=mp.browsers.new('package://lakeside/Display/Hospital/Death/index.html');
			mp.game.player.setInvincible(true);
			mp.gui.cursor.visible = false;
			mp.gui.chat.show(false);
			mp.game.controls.disableControlAction(0, 82, false);
			setTimeout(function(){
				mp.gui.cursor.show(true, false);
				setTimeout(function() {
					mp.events.callRemote("playAnimationEvent", 'misssolomon_5@end', 'dead_black_ops', 1, 33, -1);
				}, 1000);
			}, 1000);
		}
	},
	"endDeathScreen":()=>{
		if(cefDeath){
			cefDeath.destroy();
			cefDeath = null;
			mp.gui.cursor.visible = false;
			mp.gui.chat.show(true);
			mp.game.player.setInvincible(false);
			mp.players.local.freezePosition(false);
		}    
	},
});

function closeCefHospital(){
	if(cefHospital){
		cefHospital.destroy(); 
		cefHospital=null;
	}
	mp.players.local.freezePosition(false);
	
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	cefState=false;
}
exports.closeCefHospital=closeCefHospital;