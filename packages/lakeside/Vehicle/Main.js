class RepairSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && player.vehicle && shape.getVariable("RepairCol") && shape.getVariable("RepairCol")==true){
						if(player.getVariable("Money")>=100){
							player.setVariable("Money",player.getVariable("Money")-100);
							player.vehicle.repair();
							player.notify("~g~Fahrzeug Repariert!\nKosten: ~r~$100");
						}else if(player.getVariable("Bankmoney")>=100){
							player.setVariable("Bankmoney",player.getVariable("Bankmoney")-100);
							player.vehicle.repair();
							player.notify("~g~Fahrzeug Repariert!\nKosten: ~r~$100");
						}else{
							player.notify("~r~Du hast nicht genug Bar/Bankgeld!\n$100");
						};
					};
				};
			},
		});
	}
	
	createRepair(x,y,z){
		const shape=mp.colshapes.newSphere(x,y,z,2);
		shape.setVariable("RepairCol",true);
		mp.blips.new(446,new mp.Vector3(x,y,z),{
			name:"Werkstatt",
			color:4,
			shortRange:true,
			scale:1,
			dimension:0
		});
	}
	
	loadRepairStations(){
		this.createRepair(719.7,-1089,22);
		this.createRepair(-147,-1421.3,30);
	}
}
const loadRepairs=new RepairSingleton();
loadRepairs.loadRepairStations();




//
let Vehicles=[];

function loadUserVehicles(){
	LR.mysql.handle.query(`SELECT * FROM uservehicles`,function(err,res){
		if(err){
			return console.log(err);
		}
        for(var i=0; i<res.length; i++){
			if(res[i].Garage==0){
				spawnVeh(i,res[i]);
			};
        };
    });
}
loadUserVehicles();
module.exports.loadUserVehicles=loadUserVehicles;

function spawnVeh(id,veh){
	if(Vehicles[id]){
		return false;
	}
	Vehicles[id]=mp.vehicles.new(mp.joaat(veh.VehName),new mp.Vector3(veh.PosX,veh.PosY,veh.PosZ),{
		locked:true,
		engine:false,
		heading:new mp.Vector3(veh.RotX,veh.RotY,veh.RotZ),
		dimension:0
	});
	Vehicles[id].setVariable("Veh->Data->ID",veh.ID);
	Vehicles[id].setVariable("Veh->Data->Owner",veh.Owner);
	Vehicles[id].setVariable("Veh->Data->Distance",veh.Distance);
	Vehicles[id].setVariable("Veh->Data->Fuel",veh.Fuel);
	Vehicles[id].setVariable("Veh->Data->Engine",false);
	
	Vehicles[id].setVariable("Veh->Data->PosX",veh.PosX);
	Vehicles[id].setVariable("Veh->Data->PosY",veh.PosY);
	Vehicles[id].setVariable("Veh->Data->PosZ",veh.PosZ);
	
	Vehicles[id].setVariable("Veh->Data->Tuning->Color->Prim",veh.ColorPrim);
	Vehicles[id].setVariable("Veh->Data->Tuning->Color->Sec",veh.ColorSec);
	Vehicles[id].setVariable("Veh->Data->Tuning->Color->Neon",veh.ColorNeon);
	Vehicles[id].setVariable("Veh->Data->Tuning->Lights",veh.Lights);
	Vehicles[id].setVariable("Veh->Data->Tuning->Wheels",veh.Wheels);
	Vehicles[id].setVariable("Veh->Data->Tuning->Spoiler",veh.Spoiler);
	Vehicles[id].setVariable("Veh->Data->Tuning->Exhaust",veh.Exhaust);
	Vehicles[id].setVariable("Veh->Data->Tuning->Engine",veh.Engine);
	Vehicles[id].setVariable("Veh->Data->Tuning->Lowering",veh.Lowering);
	Vehicles[id].setVariable("Veh->Data->Tuning->Breaks",veh.Breaks);
	Vehicles[id].setVariable("Veh->Data->Tuning->Transmission",veh.Transmission);
	Vehicles[id].setVariable("Veh->Data->Tuning->Turbo",veh.Turbo);
	
	Vehicles[id].setVariable("Veh->Data->Inventory->Schokoladenriegel",veh.Schokoladenriegel);
	Vehicles[id].setVariable("Veh->Data->Inventory->Snickers",veh.Snickers);
	Vehicles[id].setVariable("Veh->Data->Inventory->Sandwich",veh.Sandwich);
	Vehicles[id].setVariable("Veh->Data->Inventory->Wasser",veh.Wasser);
	
	Vehicles[id].numberPlate=veh.Owner;
	
	Vehicles[id].setColor(parseInt(veh.ColorPrim),parseInt(veh.ColorSec));
	Vehicles[id].setMod(22,parseInt(veh.Lights));
	Vehicles[id].setMod(23,parseInt(veh.Wheels));
	Vehicles[id].setMod(0,parseInt(veh.Spoiler));
	Vehicles[id].setMod(4,parseInt(veh.Exhaust));
	Vehicles[id].setMod(11,parseInt(veh.Engine));
	Vehicles[id].setMod(15,parseInt(veh.Lowering));
	Vehicles[id].setMod(12,parseInt(veh.Breaks));
	Vehicles[id].setMod(13,parseInt(veh.Transmission));
	Vehicles[id].setMod(18,parseInt(veh.Turbo));
	
	//Vehicles[id].setHandling("club",80);
	
    return true;
}

mp.events.addCommand("towveh",(player,id)=>{
	mp.vehicles.forEach((vehicle)=>{
		if(vehicle.getVariable("Veh->Data->ID")==id){
			vehicle.destroy();
		}
	});
});



function saveVehicleData(id,fuel,distance){
	LR.mysql.handle.query("UPDATE uservehicles SET Fuel="+fuel+",Distance="+distance+" WHERE ID="+id+"");
	return true;
}
mp.events.add("playerExitVehicle",(player,veh)=>{
	if(veh.getVariable("Veh->Data->Owner")&& !veh.getVariable("Veh->Data->Typ")){
		saveVehicleData(veh.getVariable("Veh->Data->ID"),veh.getVariable("Veh->Data->Fuel"),veh.getVariable("Veh->Data->Distance"));
	}
	if(player.getVariable("Seatbelt")==true){
		player.setVariable("Seatbelt",false);
	}
});

mp.events.add("Park->Vehicle",(player,vehicle)=>{
	if(player){
		if(player.getVariable("loggedIn")==1){
			let vehicle=player.vehicle;
			if(vehicle){
				if(vehicle.getVariable("Veh->Data->Owner")==player.name && !vehicle.getVariable("Veh->Data->Typ")){
					let PosX=vehicle.position.x;
					let PosY=vehicle.position.y;
					let PosZ=vehicle.position.z;
					
					let RotX=vehicle.rotation.x;
					let RotY=vehicle.rotation.y;
					let RotZ=vehicle.rotation.z;
					
					LR.mysql.handle.query('UPDATE `uservehicles` SET PosX=?,PosY=?,PosZ=?,RotX=?,RotY=?,RotZ=? WHERE ID=?',[PosX,PosY,PosZ,RotX,RotY,RotZ,vehicle.getVariable("Veh->Data->ID")],function(err,res){
						if(err){
							console.log(err);
							player.notify("Database error #50712861");
						}else{
							player.notify("~g~Fahrzeug erfolgreich geparkt!");
						};
					});
				}else{
					player.notify("~r~Dieses Fahrzeug gehört dir nicht!");
				}
			}else{
				player.notify("~r~Du sitzt in keinem Fahrzeug!");
			}
		}
	}
});

mp.events.add("Change->Vehicle->Lockstate",(player,vehicle)=>{
	if(!player.vehicle){
		if(vehicle.getVariable("Veh->Data->Owner")==player.name){
			if(vehicle.locked==true){
				vehicle.locked=false;
				player.notify("Fahrzeug ~g~aufgeschlossen.");
			}else{
				vehicle.locked=true;
				player.notify("Fahrzeug ~r~abgeschlossen.");
			}
		}else{
			player.notify("~r~Das Fahrzeug gehört dir nicht!");
		}
	}else{
		if(player.vehicle.getVariable("Veh->Data->Owner")==player.name){
			if(player.vehicle.locked==true){
				player.vehicle.locked=false;
				player.notify("Fahrzeug ~g~aufgeschlossen.");
			}else{
				player.vehicle.locked=true;
				player.notify("Fahrzeug ~r~abgeschlossen.");
			}
		}else{
			player.notify("~r~Das Fahrzeug gehört dir nicht!");
		}
	}
});

mp.events.add("Refuel->Vehicle->S",(player,vehicle)=>{
	if(!player.vehicle){
		if(player.getVariable("Benzinkanister")>=1){
			if(player.getVariable("Veh->Data->Fuel")<100){
				if(vehicle.getVariable("Veh->Data->Engine")==false){
					vehicle.setVariable("Veh->Data->Fuel",vehicle.getVariable("Veh->Data->Fuel")+25);
					player.setVariable("Benzinkanister",player.getVariable("Benzinkanister")-1);
					if(vehicle.getVariable("Veh->Data->Fuel")>=100){
						vehicle.setVariable("Veh->Data->Fuel",100);
					}
					player.notify("~g~Fahrzeug getankt!");
				}else{
					player.notify("~r~Der Motor läuft noch!");
				}
			}else{
				player.notify("~r~Fahrzeug ist bereits voll!");
			}
		}else{
			player.notify("~r~Du hast keinen Benzinkanister!");
		}
	}
});

mp.events.add("Repair->Vehicle->S",(player,vehicle)=>{
	if(!player.vehicle){
		if(player.getVariable("Reperaturkasten")>=1){
			vehicle.repair();
		}else{
			player.notify("~r~Du hast keinen Reperaturkasten!");
		}
	}
});

mp.events.add("Change->Vehicle->Enginestate",(player,vehicle,state)=>{
	if(player.vehicle){
		if(player.vehicle.getVariable("Veh->Data->Owner")==player.name){
			vehicle.setVariable("Veh->Data->Engine",state);
		}
	}
});

mp.events.add("Change->Seatbelt->State",(player,vehicle)=>{
	if(player.vehicle){
		if(player.getVariable("Seatbelt")==false){
			player.setVariable("Seatbelt",true);
			player.call("Change->Seatbelt->State->Client");
		}else{
			player.setVariable("Seatbelt",false);
			player.call("Change->Seatbelt->State->Client");
		}
	}
});




class VehiclesDataSingleton {
	constructor() {
		this.vehicles = [
			//Mosley
			{model:"asea",title:"Asea",price:13200,},
			{model:"asbo",title:"Asbo",price:8200,},
			{model:"club",title:"Club",price:11300,},
			{model:"blista2",title:"Blista Compact",price:14000,},
			{model:"asterope",title:"Asterope",price:15200,},
			{model:"glendale",title:"Glendale",price:17000,},
			{model:"stanier",title:"Stanier",price:27000,},
			//Deluxe
			{model:"jugular",title:"Jugular",price:185000,},
			{model:"schafter3",title:"Schafter V12",price:220000,},
			{model:"drafter",title:"Drafter",price:350000,},
			{model:"coquette",title:"Coquette",price:520000,},
			{model:"paragon",title:"Paragon",price:620000,},
			{model:"schlagen",title:"Schlagen GT",price:1250000,},
			{model:"pariah",title:"Pariah",price:1500000,},
		];
	}
	getPrice(model) {
		for (let i = 0; i < this.vehicles.length; i++) {
			if (model !== this.vehicles[i].model) continue;
			return this.vehicles[i].price;
		}
		return false;
	}
}
const vehiclesDataSingleton=new VehiclesDataSingleton();
module.exports=vehiclesDataSingleton;


mp.events.add("Buy->Vehicle",(player,typ,str)=>{
	const getBuyInformation=JSON.parse(str);
	const carPrice=vehiclesDataSingleton.getPrice(getBuyInformation.model);
	
	if(typ=="Mosley"){
		if(carPrice && player.getVariable("Money")>=carPrice){
			LR.mysql.handle.query("INSERT INTO uservehicles SET Owner=?,VehName=?,Fuel=?,Distance=?,PosX=?,PosY=?,PosZ=?,RotX=?,RotY=?,RotZ=?",[player.name,getBuyInformation.model,100,0,-53.1,-1690.2,31,0,0,0],function(err,res){
				if(!err){
					loadUserVehicles();
					player.outputChatBox("Fahrzeug erfolgreich erworben!");
					player.outputChatBox("Mit dem 'X' Menü kannst du es umparken!");
					
					player.setVariable("Money",player.getVariable("Money")-carPrice);
				}else{
					console.log(err);
					player.notify("~r~Vehicle database error #089572");
					player.notify("~r~Melde dich bei einem Teammitglied!");
				};
			});
		}else if(carPrice && player.getVariable("Bankmoney")>=carPrice){
			LR.mysql.handle.query("INSERT INTO uservehicles SET Owner=?,VehName=?,Fuel=?,Distance=?,PosX=?,PosY=?,PosZ=?,RotX=?,RotY=?,RotZ=?",[player.name,getBuyInformation.model,100,0,-53.1,-1690.2,31,0,0,0],function(err,res){
				if(!err){
					loadUserVehicles();
					player.outputChatBox("Fahrzeug erfolgreich erworben!");
					player.outputChatBox("Mit dem 'X' Menü kannst du es umparken!");
					
					player.setVariable("Money",player.getVariable("Money")-carPrice);
				}else{
					console.log(err);
					player.notify("~r~Vehicle database error #089572");
					player.notify("~r~Melde dich bei einem Teammitglied!");
				};
			});
		}else{
			player.notify("~r~Du hast nicht genug Bar/Bankgeld!\n$"+carPrice);
		}
	}else if(typ=="Deluxe"){
		if(carPrice && player.getVariable("Money")>=carPrice){
			LR.mysql.handle.query("INSERT INTO uservehicles SET Owner=?,VehName=?,Fuel=?,Distance=?,PosX=?,PosY=?,PosZ=?,RotX=?,RotY=?,RotZ=?",[player.name,getBuyInformation.model,100,0,-59,-1117.3,28,0,0,0],function(err,res){
				if(!err){
					loadUserVehicles();
					player.outputChatBox("Fahrzeug erfolgreich erworben!");
					player.outputChatBox("Mit dem 'X' Menü kannst du es umparken!");
					
					player.setVariable("Money",player.getVariable("Money")-carPrice);
				}else{
					console.log(err);
					player.notify("~r~Vehicle database error #089572");
					player.notify("~r~Melde dich bei einem Teammitglied!");
				};
			});
		}else if(carPrice && player.getVariable("Bankmoney")>=carPrice){
			LR.mysql.handle.query("INSERT INTO uservehicles SET Owner=?,VehName=?,Fuel=?,Distance=?,PosX=?,PosY=?,PosZ=?,RotX=?,RotY=?,RotZ=?",[player.name,getBuyInformation.model,100,0,-53.1,-1690.2,31,0,0,0],function(err,res){
				if(!err){
					loadUserVehicles();
					player.outputChatBox("Fahrzeug erfolgreich erworben!");
					player.outputChatBox("Mit dem 'X' Menü kannst du es umparken!");
					
					player.setVariable("Money",player.getVariable("Money")-carPrice);
				}else{
					console.log(err);
					player.notify("~r~Vehicle database error #089572");
					player.notify("~r~Melde dich bei einem Teammitglied!");
				};
			});
		}else{
			player.notify("~r~Du hast nicht genug Bar/Bankgeld!\n$"+carPrice);
		}
	}
});




let timeNow = Date.now();

mp.events.add('calc_km', (player, vehicle_data) => {
	vehicle_data = JSON.parse(vehicle_data);
	let distance = 0;
	let speed = vehicle_data.speedofcar;
	
	let trip = Math.floor(speed * ((Date.now() - timeNow) / 1000) * 100) / 100;
	
	distance += parseFloat(trip / 800);
	timeNow = Date.now();
	var kmS = distance;
	kmS = kmS + player.vehicle.getVariable('Veh->Data->Distance');
	let data = JSON.stringify({"playerID":player.id,"distance":distance,"state":true,"vehicle":player.vehicle});
	mp.events.call('fuel', player, data);
	player.vehicle.setVariable('Veh->Data->Distance',kmS);
});

mp.events.add('fuel',(player,args)=>{
	args = JSON.parse(args);
	player = mp.players.at(args.playerID);
	var vehicle = mp.vehicles.at(args.vehicle);
	var Veh_data = args.distance;
	var State = args.state;
	if(State){
		if(player.vehicle.getVariable('Veh->Data->Fuel') != null){
			let rest = (Veh_data*3);
			let tank = player.vehicle.getVariable('Veh->Data->Fuel');
			let newtank = (tank - rest);
			if(newtank < 0){
				player.vehicle.engine = false;
				player.notify("~r~ Achtung Tank ist leer!");
				player.vehicle.setVariable('Veh->Data->Fuel',0);
			}else if (newtank < 16 && !newtank < 0){
				player.notify("~y~Achtung Tank bald leer!");
				player.vehicle.setVariable('Veh->Data->Fuel',newtank);
			}else{
				player.vehicle.setVariable('Veh->Data->Fuel',newtank);
			}
		}else{
			player.vehicle.setVariable('Veh->Data->Fuel',100);
			player.vehicle.setVariable('TankMax',100);
		}
	}
});