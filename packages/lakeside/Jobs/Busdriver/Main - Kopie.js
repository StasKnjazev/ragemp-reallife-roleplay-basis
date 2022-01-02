const log=require("../../logs.js");


let BusVehicle=[];
let BusShapes=[];
let BusTimer=[];
let BusTimerWait=[];
let BusRoutes=[
	{x:377.7,y:-842,z:29},
	{x:114.6,y:-783.3,z:31},
	{x:-195.8,y:-670.7,z:33.8},
	{x:-245.9,y:-714.5,z:33.4},
	{x:-565.1,y:-827.3,z:27},
	{x:-648.1,y:-934.7,z:22.3},
	{x:-820.9,y:-1043.3,z:13},
	{x:-558.3,y:-962.5,z:23.4},
	{x:-190.4,y:-1150.3,z:22.9},
	{x:100.3,y:-1049.1,z:29.2},
	{x:356.5,y:-1064.7,z:29.4},
	{x:466.5,y:-648.7,z:28.2},
];

mp.events.add({
	"Start->Job->Bus":(player,typ)=>{
		if(typ=="Stadt"){
			if(BusVehicle[player.getVariable("PlayerID")]){
				BusVehicle[player.getVariable("PlayerID")].destroy();
				BusVehicle[player.getVariable("PlayerID")]=null;
			}
			BusVehicle[player.getVariable("PlayerID")]=mp.vehicles.new(mp.joaat("bus"),new mp.Vector3(425.6,-597.5,29),{
				locked:false,
				engine:true,
				heading:new mp.Vector3(0,0,180),
				dimension:0
			});
			
			player.setVariable("Bus->Step",0);
			
			BusTimerWait[player.getVariable("PlayerID")]=setTimeout((player)=>{
				player.putIntoVehicle(BusVehicle[player.getVariable("PlayerID")],-1);
			},1000,player);
			BusVehicle[player.getVariable("PlayerID")].numberPlate="Lakeside";
			BusVehicle[player.getVariable("PlayerID")].setColorRGB(220,90,0,220,90,0);
			BusVehicle[player.getVariable("PlayerID")].setVariable("Veh->Data->Owner",player.name);
			BusVehicle[player.getVariable("PlayerID")].setVariable("Veh->Data->Typ","Bus");
			BusVehicle[player.getVariable("PlayerID")].setVariable("Veh->Data->Fuel",999);
			BusVehicle[player.getVariable("PlayerID")].setVariable("Veh->Data->Distance",0);
			
			player.setVariable("Player->Data->JobActive",true);
			player.notify("~g~Busfahrer Job gestartet!");
			player.outputChatBox("Um den Job zu beenden, steige aus!");
			
			log.log.debug("started");
			
			
			
			
			mp.events.add({
				"playerEnterColshape":(player,shape)=>{
					
					let Step=Number(player.getVariable("Bus->Step"));
					
					if(BusShapes[player.getVariable("PlayerID")]){
						BusShapes[player.getVariable("PlayerID")].destroy();
						BusShapes[player.getVariable("PlayerID")]=null;
					}
					BusShapes[player.getVariable("PlayerID")]=mp.colshapes.newSphere(BusRoutes[Step].x,BusRoutes[Step].y,BusRoutes[Step].z,3);
					BusShapes[player.getVariable("PlayerID")].setVariable("Job->Bus->Shape->Owner",player.name);
					BusShapes[player.getVariable("PlayerID")].setVariable("Job->Bus->Shape",true);
					
					player.call("Create->Job->Bus->Marker",[BusRoutes[Step].x,BusRoutes[Step].y,BusRoutes[Step].z]);
					
					if(shape==BusShapes[player.getVariable("PlayerID")]){
						log.log.debug("5");
						if(player.getVariable("loggedIn")==1 && player.vehicle){
							log.log.debug("6");
							if(shape.getVariable("Job->Bus->Shape")&& shape.getVariable("Job->Bus->Shape")==true && shape.getVariable("Job->Bus->Shape->Owner")&& shape.getVariable("Job->Bus->Shape->Owner")==player.name){
								console.log(player.name);
								log.log.debug("7");
								if(player.vehicle.getVariable("Veh->Data->Owner")==player.name && player.vehicle.getVariable("Veh->Data->Typ")=="Bus"){
									if(player.getVariable("Player->Data->JobActive")==true){
										player.setVariable("Bus->Step",player.getVariable("Bus->Step")+1);
										player.call("Destroy->Job->Bus->Marker");
										
										player.call("Freeze->Job->Bus",[true]);
										BusTimer[player.getVariable("PlayerID")]=setTimeout((player)=>{
											if(BusTimer[player.getVariable("PlayerID")]){
												player.call("Freeze->Job->Bus",[false]);
												nextBusMarker(player);
												console.log(player.name);
											}
										},5*1000,player);
										
										if(player.getVariable("Bus->Step")==12){
											player.setVariable("Bus->Step",0);
											player.setVariable("Jobmoney",player.getVariable("Jobmoney")+600);
											player.notify("Route zu ende!\nDu erhälst einen Bonus von\n$600 auf deinem Gehalt!");
											log.log.debug("[BUSJOB] '"+player.name+"' earnt $600");
										}else{
											player.setVariable("Jobmoney",player.getVariable("Jobmoney")+150);
											player.notify("Marker erreicht, ab zum nächsten!");
											log.log.debug("[BUSJOB] '"+player.name+"' earnt $150");
										}
									};
								};
							};
						};
					};
				}
			});
			
			
		}
	},
	"playerStartExitVehicle":(player)=>{
		if(player.vehicle.getVariable("Veh->Data->Owner")==player.name && player.vehicle.getVariable("Veh->Data->Typ")=="Bus"){
			player.vehicle.destroy();
			if(BusTimer[player.getVariable("PlayerID")]){
				BusTimer[player.getVariable("PlayerID")]=null;
			}
			if(BusShapes[player.getVariable("PlayerID")]){
				BusShapes[player.getVariable("PlayerID")].destroy();
				BusShapes[player.getVariable("PlayerID")]=null;
			}
			
			player.spawn(new mp.Vector3(436,-647.6,28));
			player.call("Destroy->Job->Bus->Marker");
			player.notify("~r~Job beendet!");
			player.setVariable("Player->Data->JobActive",null);
			log.log.debug("[BUSJOB] '"+player.name+"' ended! (Leave vehicle)");
		}
	}
});

mp.events.add("playerQuit",(player)=>{
	if(player && player.getVariable("loggedIn")&& player.getVariable("loggedIn")==1){
		if(BusVehicle[player.getVariable("PlayerID")]){
			BusVehicle[player.getVariable("PlayerID")].destroy();
			BusVehicle[player.getVariable("PlayerID")]=null;
		}
		if(BusTimer[player.getVariable("PlayerID")]){
			BusTimer[player.getVariable("PlayerID")].destroy();
			BusTimer[player.getVariable("PlayerID")]=null;
		}
		if(BusShapes[player.getVariable("PlayerID")]){
			BusShapes[player.getVariable("PlayerID")].destroy();
			BusShapes[player.getVariable("PlayerID")]=null;
		}
		log.log.debug("[BUSJOB] '"+player.name+"' ended! (Quit)");
	};
});

mp.events.add({
	"playerEnterColshape":(player,shape)=>{
		
		let Step=Number(player.getVariable("Bus->Step"));
		
		if(BusShapes[player.getVariable("PlayerID")]){
			BusShapes[player.getVariable("PlayerID")].destroy();
			BusShapes[player.getVariable("PlayerID")]=null;
		}
		BusShapes[player.getVariable("PlayerID")]=mp.colshapes.newSphere(BusRoutes[Step].x,BusRoutes[Step].y,BusRoutes[Step].z,3);
		BusShapes[player.getVariable("PlayerID")].setVariable("Job->Bus->Shape->Owner",player.name);
		BusShapes[player.getVariable("PlayerID")].setVariable("Job->Bus->Shape",true);
		
		player.call("Create->Job->Bus->Marker",[BusRoutes[Step].x,BusRoutes[Step].y,BusRoutes[Step].z]);
		
		if(shape==BusShapes[player.getVariable("PlayerID")]){
			log.log.debug("5");
			if(player.getVariable("loggedIn")==1 && player.vehicle){
				log.log.debug("6");
				if(shape.getVariable("Job->Bus->Shape")&& shape.getVariable("Job->Bus->Shape")==true && shape.getVariable("Job->Bus->Shape->Owner")&& shape.getVariable("Job->Bus->Shape->Owner")==player.name){
					console.log(player.name);
					log.log.debug("7");
					if(player.vehicle.getVariable("Veh->Data->Owner")==player.name && player.vehicle.getVariable("Veh->Data->Typ")=="Bus"){
						if(player.getVariable("Player->Data->JobActive")==true){
							player.setVariable("Bus->Step",player.getVariable("Bus->Step")+1);
							player.call("Destroy->Job->Bus->Marker");
							
							player.call("Freeze->Job->Bus",[true]);
							BusTimer[player.getVariable("PlayerID")]=setTimeout((player)=>{
								if(BusTimer[player.getVariable("PlayerID")]){
									player.call("Freeze->Job->Bus",[false]);
									nextBusMarker(player);
									console.log(player.name);
								}
							},5*1000,player);
							
							if(player.getVariable("Bus->Step")==12){
								player.setVariable("Bus->Step",0);
								player.setVariable("Jobmoney",player.getVariable("Jobmoney")+600);
								player.notify("Route zu ende!\nDu erhälst einen Bonus von\n$600 auf deinem Gehalt!");
								log.log.debug("[BUSJOB] '"+player.name+"' earnt $600");
							}else{
								player.setVariable("Jobmoney",player.getVariable("Jobmoney")+150);
								player.notify("Marker erreicht, ab zum nächsten!");
								log.log.debug("[BUSJOB] '"+player.name+"' earnt $150");
							}
						};
					};
				};
			};
		};
	}
});