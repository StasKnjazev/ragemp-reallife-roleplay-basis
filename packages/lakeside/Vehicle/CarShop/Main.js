class CarHouseSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("CarHouseShape") && shape.getVariable("CarHouseShape")==true){
						player.call("Open->Carhouse->UI",[shape.typ]);
					};
				};
			}
		});
	}
	
	createCarHouse(x,y,z,IconID,IconColor,typ){
		const shape=mp.colshapes.newSphere(x,y,z,1);
		shape.setVariable("CarHouseShape",true);
		shape.typ=typ;
		mp.blips.new(IconID,new mp.Vector3(x,y,z),{
			name:"Autohaus: "+typ,
			color:IconColor,		
			shortRange:true,
			scale:1,
			dimension:0
		});
		mp.markers.new(30,new mp.Vector3(x,y,z),1,{
			color:[246,164,128,100],
			visible:true,
			dimension:0
		});
	}
	
	loadCarHouses(){
		this.createCarHouse(-38.5,-1109.1,26.8,595,9,"Deluxe");
		this.createCarHouse(-40.6,-1674.6,29.5,225,9,"Mosley");
	}
}
const carHouseSingleton=new CarHouseSingleton();
carHouseSingleton.loadCarHouses();