const log=require("../../logs.js");

var BusVehicles=[];
var BusShapes=[];
var BusStopWaitTimer=[];
var BusEnterCooldown=[];

const BusRoutes=[
	{x:381.4,y:-842.1,z:29},
	{x:136.8,y:-880.4,z:30.4},
	{x:15.14,y:-953.8,z:29.7},
	{x:-312.5,y:-839.8,z:31.5},
	{x:-647.1,y:-905.2,z:24.4},
	{x:-768.3,y:-1145.1,z:10.5},
	{x:-503.4,y:-1099.9,z:23.9},
	{x:-212.7,y:-1150.1,z:22.9},
	{x:104.1,y:-1040.3,z:29.2},
	{x:257.9,y:-1062.4,z:29.2},
	{x:356,y:-1064.9,z:29.4},
	{x:467,y:-623.5,z:28.5},
];

mp.events.add("Start->Job->Bus",async(player,typ)=>{
	if(player && player.getVariable("loggedIn")==1){
		if(typ=="Stadt"){
			if(mp.players.exists(player)){
				if(BusVehicles[player.id]){
					BusVehicles[player.id].destroy();
					BusVehicles[player.id]=null;
				}
				BusVehicles[player.id]=mp.vehicles.new(mp.joaat("bus"),new mp.Vector3(425.6,-597.5,29),{
					locked:false,
					engine:true,
					heading:new mp.Vector3(0,0,180),
					dimension:0
				});
				BusVehicles[player.id].setVariable("Veh->Data->Owner",player.name);
				BusVehicles[player.id].setVariable("Veh->Data->Fuel",999);
				BusVehicles[player.id].setVariable("Veh->Data->Distance",0);
				BusVehicles[player.id].setVariable("Veh->Data->Engine",true);
				BusVehicles[player.id].setVariable("Veh->Data->Typ","Bus");
				BusEnterCooldown[player.id]=setInterval((player)=>{
					if(BusEnterCooldown[player.id]!=null){
						clearInterval(BusEnterCooldown[player.id]);
						BusEnterCooldown[player.id]=null;
						
						player.putIntoVehicle(BusVehicles[player.id],0);
					}
				},1000,player);
				BusVehicles[player.id].numberPlate="Lakeside";
				BusVehicles[player.id].setColorRGB(220,90,0,220,90,0);
				
				player.setVariable('Bus->Step',0);
				
				player.notify("~g~Busfahrer Job gestartet!");
				player.outputChatBox("[BUSJOB]: Um den Job zu beenden, steige aus!");
				
				nexBusStop(player);
			}
		}
	}
});

mp.events.add("playerEnterColshape",async(player,shape)=>{
	if(player && shape){
		if(player.vehicle){
			if(player.getVariable("loggedIn")==1 && player.vehicle && shape.getVariable("Job->Bus->Shape") && shape.getVariable("Job->Bus->Shape")==true){
				if(shape.getVariable("Job->Bus->Shape->Owner")&& shape.getVariable("Job->Bus->Shape->Owner")==player.name){
					if(player.seat== -1){
						if(player.vehicle.getVariable("Veh->Data->Typ")=="Bus"){
							player.setVariable("Bus->Step",Number(player.getVariable("Bus->Step"))+1);
							player.call("Destroy->Job->Bus->Marker");
							
							
							player.call("Freeze->Job->Bus",[true]);
							BusStopWaitTimer[player.id]=setInterval((player)=>{
								if(mp.players.exists(player)){
									if(BusStopWaitTimer[player.id]!=null){
										if(mp.players.exists(player)){
											player.call("Freeze->Job->Bus",[false]);
											if(BusStopWaitTimer[player.id]!=null){
												clearInterval(BusStopWaitTimer[player.id]);
												BusStopWaitTimer[player.id]=null;
											};
											if(Number(player.getVariable("Bus->Step"))>=Number(12)){
												player.setVariable("Bus->Step",0);
												player.setVariable("Jobmoney",Number(player.getVariable("Jobmoney"))+320);
												player.notify("Route zu ende!\nDu erhälst einen Bonus von\n$320 auf deinem Gehalt!");
												nexBusStop(player);
											}else{
												player.setVariable("Jobmoney",Number(player.getVariable("Jobmoney"))+100);
												player.notify("Marker erreicht, ab zum nächsten!");
												nexBusStop(player);
											}
										}
									}
								}
							},5*1000,player);
						}
					}
				}
			}
		}
	};
});

mp.events.add("playerStartExitVehicle",async(player)=>{
	if(mp.players.exists(player)){
		if(player.vehicle.getVariable("Veh->Data->Owner")==player.name && player.vehicle.getVariable("Veh->Data->Typ")=="Bus"){
			if(BusVehicles[player.id]!=null){
				BusVehicles[player.id].destroy();
				BusVehicles[player.id]=null;
			};
			if(BusShapes[player.id]!=null){
				BusShapes[player.id].destroy();
				BusShapes[player.id]=null;
			};
			if(BusStopWaitTimer[player.id]!=null){
				clearInterval(BusStopWaitTimer[player.id]);
				BusStopWaitTimer[player.id]=null;
			};
			if(BusEnterCooldown[player.id]!=null){
				clearInterval(BusEnterCooldown[player.id]);
				BusEnterCooldown[player.id]=null;
			};
			
			player.spawn(new mp.Vector3(436,-647.6,28));
			player.call("Destroy->Job->Bus->Marker");
			player.notify("~r~Job beendet!");
			log.log.debug("[BUSJOB] '"+player.name+"' ended! (Leave vehicle)");
		}
	}
});

mp.events.add("playerQuit",async(player)=>{
	if(mp.players.exists(player)){
		if(player && player.getVariable("loggedIn")==1){
			if(BusVehicles[player.id]!=null){
				BusVehicles[player.id].destroy();
				BusVehicles[player.id]=null;
			};
			if(BusShapes[player.id]!=null){
				BusShapes[player.id].destroy();
				BusShapes[player.id]=null;
			};
			if(BusStopWaitTimer[player.id]!=null){
				clearInterval(BusStopWaitTimer[player.id]);
				BusStopWaitTimer[player.id]=null;
			};
			if(BusEnterCooldown[player.id]!=null){
				clearInterval(BusEnterCooldown[player.id]);
				BusEnterCooldown[player.id]=null;
			};
		}
	}
});


async function nexBusStop(player){
	let Step=Number(player.getVariable("Bus->Step"));
	
	if(BusShapes[player.id]!=null){
		BusShapes[player.id].destroy();
		BusShapes[player.id]=null;
	}
	BusShapes[player.id]=mp.colshapes.newSphere(BusRoutes[Step].x,BusRoutes[Step].y,BusRoutes[Step].z,2.2);
	BusShapes[player.id].setVariable("Job->Bus->Shape->Owner",player.name);
	BusShapes[player.id].setVariable("Job->Bus->Shape",true);
	
	player.call("Create->Job->Bus->Marker",[BusRoutes[Step].x,BusRoutes[Step].y,BusRoutes[Step].z]);
}