class TankstationSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && player.vehicle && shape.getVariable("TankShape") && shape.getVariable("TankShape")==true){
						const str1=this.getPlayerMoneyInfo(player);
						const str2=`setTimeout(load, 100);`;
						const execute=str1+str2;
						player.call("Open->Tankstation->UI",[execute]);
					};
				};
			}
		});
	}
	
	getPlayerMoneyInfo(player){
		const str1=`app.literPrice = ${literPrice};`;
		const str=str1;
		
		player.notify("Liter Preis: $"+literPrice)
		
		return str;
	}
	
	createTankstation(x,y,z){
		const shape=mp.colshapes.newSphere(x,y,z,3.5);
		shape.setVariable("TankShape",true)
		mp.blips.new(361,new mp.Vector3(x,y,z),{
			name:"Tankstelle",
			color:4,		
			shortRange:true,
			//scale:1,
			dimension:0
		});
	}
	
	loadTankStations(){
		this.createTankstation(1181.7,-334.4,69);
		this.createTankstation(814.6,-1028.6,26);
		this.createTankstation(269.6,-1263.8,29);
		this.createTankstation(625.7,267.9,103);
		this.createTankstation(1208.5,-1402.4,35);
		this.createTankstation(-719.4,-936.8,19);
		this.createTankstation(-2092.4,-318.4,13);
		this.createTankstation(-1436.4,-276.9,46.2);
		this.createTankstation(-1801.9,799.1,138.5);
		this.createTankstation(-2554.7,2330.6,33);
		this.createTankstation(51.5,2781.5,58);
	}
}
const tankstationSingleton=new TankstationSingleton();
tankstationSingleton.loadTankStations();

mp.events.add("Tank->Vehicle",(player)=>{
	if(player && player.getVariable("loggedIn")==1){
		if(player.vehicle){
			if(player.getVariable("Money")>=literPrice){
				player.vehicle.setVariable("Veh->Data->Fuel",100);
				player.setVariable("Money",player.getVariable("Money")-literPrice)
				player.notify("~g~Fahrzeug erfolgreich getankt!");
				
				if(player.vehicle.getVariable("Veh->Data->Fuel")>=100){
					player.vehicle.setVariable("Veh->Data->Fuel",100);
				}
			}else{
				player.notify("~r~Du hast nicht genug Bargeld!\n€"+literPrice+"");
			}
		}
	}
});