class ClothingShopSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("ClothingShape") && shape.getVariable("ClothingShape")==true){
						player.call("Open->Shop->Clothes->UI");
					};
				};
			}
		});
	}
	
	createClothingShop(x,y,z){
		const shape=mp.colshapes.newSphere(x,y,z,1);
		shape.setVariable("ClothingShape",true)
		mp.blips.new(73,new mp.Vector3(x,y,z),{
			name:"Kleidungsgeschäfft",
			color:4,		
			shortRange:true,
			scale:1,
			dimension:0
		});
	}
	
	loadClothingShop(){
		this.createClothingShop(75.4,-1392.1,29.4);
	}
}