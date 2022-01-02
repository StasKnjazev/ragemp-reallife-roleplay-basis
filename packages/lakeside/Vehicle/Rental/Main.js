class RentVehicleSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("RentalShape") && shape.getVariable("RentalShape")==true){
						player.call("Open->Rental->UI",["app.rentalID = "+Number(shape.typ)+";"]);
						//player.call("Open->Rental->UI",[shape.id]);
					};
				};
			},
		});
	}
	
	createVehicleRent(x,y,z,typ){
		const shape=mp.colshapes.newSphere(x,y,z,1);
		shape.setVariable("RentalShape",true);
		shape.typ=typ;
		mp.blips.new(88,new mp.Vector3(x,y,z),{
			name:"Fahrzeugverleih",
			color:52,
			shortRange:true,
			scale:1,
			dimension:0
		});
		mp.markers.new(30,new mp.Vector3(x,y,z),1,{
			color:[65,108,65,100],
			visible:true,
			dimension:0
		});
	}
	
	loadVehicleRent(){
		this.createVehicleRent(-1159.5,-740,20,1);
	}
}
const rentVehicleSingleton = new RentVehicleSingleton();
rentVehicleSingleton.loadVehicleRent();


//
let RentVehicles=[];
let RentVehiclesTimer=[];

mp.events.add("Rent->Vehicle",(player,veh,typ)=>{
	if(veh=="panto" || veh=="emperor2"){
		if(player.getVariable("Money")>=75){
			if(RentVehicles[player.id]!=null){
				RentVehicles[player.id].destroy();
				RentVehicles[player.id]=null;
			}
			if(typ==1){
				RentVehicles[player.id]=mp.vehicles.new(mp.joaat(veh),new mp.Vector3(-1161.9,-735.7,20),{
					locked:true,
					engine:true,
					heading:new mp.Vector3(0,0,311),
					dimension:0
				});
			}
			if(RentVehicles[player.id]!=null){
				RentVehicles[player.id].numberPlate="Lakeside";
				RentVehicles[player.id].setColorRGB(220,90,0,220,90,0);
				RentVehicles[player.id].setVariable("Veh->Data->Owner",player.name);
				RentVehicles[player.id].setVariable("Veh->Data->Typ","Rent");
				RentVehicles[player.id].setVariable("Veh->Data->Fuel",999);
				RentVehicles[player.id].setVariable("Veh->Data->Distance",0);
				RentVehicles[player.id].setVariable("Veh->Data->Engine",true);
				
				player.putIntoVehicle(RentVehicles[player.id],0);
				
				player.setVariable("Money",player.getVariable("Money")-75);
				player.notify("~g~Fahrzeug erfolgreich gemietet!\n~w~Dauer: ~g~30 Minuten");
				
				RentVehiclesTimer[player]=setTimeout((player)=>{
					if(RentVehiclesTimer[player]!=null){
						if(RentVehicles[player.id]){
							RentVehicles[player.id].destroy();
							RentVehicles[player.id]=null;
							player.notify("Dein Fahrzeug wurde ~r~gelöscht!\n~w~Grund: Laufzeit abgelaufen")
						};
					};
				},30*60*1000,player);
			}
		}else{
			player.notify("~r~Du hast nicht genug Bar!\n$75");
		}
	}
});

mp.events.add("playerQuit",(player)=>{
	if(player && player.getVariable("loggedIn")&& player.getVariable("loggedIn")==1){
		if(RentVehicles[player.id]){
			RentVehicles[player.id].destroy();
			RentVehicles[player.id]=null;
		};
		if(RentVehiclesTimer[player]){
			RentVehiclesTimer[player]=null;
		};
	};
});