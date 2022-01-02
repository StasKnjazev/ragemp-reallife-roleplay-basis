var GrapeFarmWaitTimer=[];

class GrapesJobSingleton {
	constructor() {
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("ShapeJob_Grape") && shape.getVariable("ShapeJob_Grape")==true){
						player.canFarmGrapes=true;
						player.notify("Drücke 'E' um trauben zu ernten!");
					}
				}
			},
			"sKeys-E":(player)=>{
				if(player.getVariable("loggedIn")==1 && !player.vehicle && player.canFarmGrapes==true){
					if(player.getVariable("Job->Farm->Grapes->State")==null || player.getVariable("Job->Farm->Grapes->State")==false){
						this.farmGrapes(player);
					}else{
						this.stopFarmGrapes(player);
					}
				}
			},
			"playerExitColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("ShapeJob_Grape") && shape.getVariable("ShapeJob_Grape")==true){
						player.canFarmGrapes=false;
						this.stopFarmGrapes(player);
					}
				}
			},
		});
	}
	
	createGrapes(x,y,z){
		const shape=mp.colshapes.newSphere(x,y,z,0.6);
		shape.setVariable("ShapeJob_Grape",true);
		mp.markers.new(30,new mp.Vector3(x,y,z),1,{
			color:[170,0,200,100],
			visible:true,
			dimension:0
		});
	}
	
	farmGrapes(player){
		if(mp.players.exists(player)){
			player.call("Freeze->Job->Grape",[true]);
			player.setVariable("Job->Farm->Grapes->State",true);
			player.playAnimation('anim@mp_snowball','pickup_snowball',1,47);
			GrapeFarmWaitTimer[player.id]=setInterval((player)=>{
				if(mp.players.exists(player)){
					if(GrapeFarmWaitTimer[player.id]!=null){
						if(mp.players.exists(player)){
							if(player.getVariable("Trauben")<=5000){
								player.setVariable("Trauben",player.getVariable("Trauben")+1);
								player.notify("+1 Traube");
							}else{
								player.notify("~r~Du hast bereits 5000 Trauben!");
							}
						}
					}
				}
			},2400,player);
		}
	}
	stopFarmGrapes(player){
		player.call("Freeze->Job->Grape",[false]);
		player.setVariable("Job->Farm->Grapes->State",false);
		player.stopAnimation();
		if(GrapeFarmWaitTimer[player.id]!=null){
			clearInterval(GrapeFarmWaitTimer[player.id]);
			GrapeFarmWaitTimer[player.id]=null;
		};
	}
	
	loadGrapes(){
		this.createGrapes(-1838.2,2072,137.6);
		this.createGrapes(-1832,2075.6,136.5);
		this.createGrapes(-1839.6,2074.7,137.8);
		this.createGrapes(-1830.8,2079.7,136.4);
		this.createGrapes(-1826.9,2078.4,135.8);
		this.createGrapes(-1823.8,2083.6,135.4);
		this.createGrapes(-1818.9,2083.1,134.5);
		this.createGrapes(-1814.8,2089,134.3);
		this.createGrapes(-1839.8,2068.8,137.9);
		this.createGrapes(-1835.8,2067.9,137.2);
		this.createGrapes(-1833.1,2072.8,136.6);
		this.createGrapes(-1827.3,2073.1,135.9);
		this.createGrapes(-1824.6,2077.9,135.5);
		this.createGrapes(-1818.4,2078.2,134.1);
		this.createGrapes(-1816,2082.7,133.9);
		this.createGrapes(-1811.3,2082.2,132.9);
	}
}
const grapesJobSingleton=new GrapesJobSingleton();
grapesJobSingleton.loadGrapes();

mp.events.add("playerQuit",(player)=>{
	if(mp.players.exists(player)){
		if(player && player.getVariable("loggedIn")&& player.getVariable("loggedIn")==1){
			if(GrapeFarmWaitTimer[player.id]!=null){
				clearInterval(GrapeFarmWaitTimer[player.id]);
				GrapeFarmWaitTimer[player.id]=null;
			};
		};
	};
});









var GrapeProgressFarmWaitTimer=[];

class GrapesProgressJobSingleton {
	constructor() {
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("ShapeJob_Grape_Progress") && shape.getVariable("ShapeJob_Grape_Progress")==true){
						player.canFarmGrapesProgress=true;
						player.notify("Drücke 'E' um Trauben zu verarbeiten!");
					}
				}
			},
			"sKeys-E":(player)=>{
				if(player.getVariable("loggedIn")==1 && !player.vehicle && player.canFarmGrapesProgress==true){
					if(player.getVariable("Job->Farm->Grapes->State")==null || player.getVariable("Job->Farm->Grapes->State")==false){
						this.farmGrapesProgress(player);
					}else{
						this.stopFarmGrapesProgress(player);
					}
				}
			},
			"playerExitColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("ShapeJob_Grape_Progress") && shape.getVariable("ShapeJob_Grape_Progress")==true){
						player.canFarmGrapesProgress=false;
						this.stopFarmGrapesProgress(player);
					}
				}
			},
		});
	}
	
	createGrapesProgress(x,y,z){
		const shape=mp.colshapes.newSphere(x,y,z,3);
		shape.setVariable("ShapeJob_Grape_Progress",true);
		mp.blips.new(365,new mp.Vector3(x,y,z),{
			name:"Traubenverarbeiter",
			color:27,
			shortRange:true,
			scale:1,
			dimension:0
		});
		mp.markers.new(30,new mp.Vector3(x,y,z),2.5,{
			color:[170,0,200,100],
			visible:true,
			dimension:0
		});
	}
	
	farmGrapesProgress(player){
		if(mp.players.exists(player)){
			if(player && player.getVariable("loggedIn")&& player.getVariable("loggedIn")==1){
				player.setVariable("Job->Farm->Grapes->State",true);
				player.notify("~g~DU hast das verarbeiten begonnen!");
				GrapeProgressFarmWaitTimer[player.id]=setInterval((player)=>{
					if(GrapeProgressFarmWaitTimer[player.id]!=null){
						if(mp.players.exists(player)){
							if(player.getVariable("Trauben")>20){
								player.setVariable("Trauben",player.getVariable("Trauben")-20);
								player.setVariable("Traubensaft",player.getVariable("Traubensaft")+1);
								player.notify("+1 Traubensaft");
							}else{
								player.notify("~r~Du hast keine Trauben mehr!");
							}
						}
					}
				},10000,player);
			}
		}
	}
	stopFarmGrapesProgress(player){
		player.notify("~r~DU hast das verarbeiten abgebrochen!");
		player.setVariable("Job->Farm->Grapes->State",false);
		if(GrapeProgressFarmWaitTimer[player.id]!=null){
			clearInterval(GrapeProgressFarmWaitTimer[player.id]);
			GrapeProgressFarmWaitTimer[player.id]=null;
		};
	}
	
	loadGrapesProgress(){
		this.createGrapesProgress(1427.9,3671.2,34.1);
	}
}
const grapesProgressJobSingleton=new GrapesProgressJobSingleton();
grapesProgressJobSingleton.loadGrapesProgress();

mp.events.add("playerQuit",(player)=>{
	if(mp.players.exists(player)){
		if(player && player.getVariable("loggedIn")&& player.getVariable("loggedIn")==1){
			if(GrapeProgressFarmWaitTimer[player.id]!=null){
				clearInterval(GrapeProgressFarmWaitTimer[player.id]);
				GrapeProgressFarmWaitTimer[player.id]=null;
			};
		};
	};
});