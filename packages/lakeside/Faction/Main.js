class FactionSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("Faction"+shape.typ2) && shape.getVariable("Faction"+shape.typ2)==true){
						if(player.getVariable("Faction")==1){
							player.call("Open->Faction->Duty->UI");
						};
					};
				};
			},
		});
	}
	
	createFactionStuff(x,y,z,IconID,IconColor,typ,typ2){
		const shape=mp.colshapes.newSphere(x,y,z,1);
		shape.typ2=typ2;
		shape.setVariable("Faction"+typ2,true);
		mp.blips.new(IconID,new mp.Vector3(x,y,z),{
			name:""+typ,
			color:IconColor,
			shortRange:true,
			scale:1,
			dimension:0
		});
	}
	
	loadFaction(){
		this.createFactionStuff(450.2,-992.7,30.7,60,29,"Los Santos Police Department","LSPD");
	}
}
const factionSingleton = new FactionSingleton();
factionSingleton.loadFaction();






mp.events.addCommand("wanted",(player,tplayer,amount)=>{
	if(player){
		if(player.getVariable("loggedIn")==1){
			
		}
	}
});