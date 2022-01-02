class ExportSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("ExportCol") && shape.getVariable("ExportCol")==true){
						player.call("Open->Export->UI",["app.grapePrice = "+grapePrice])
					};
				};
			},
		});
	}
	
	createExport(x,y,z){
		const shape=mp.colshapes.newSphere(x,y,z,1.5);
		shape.setVariable("ExportCol",true);
		mp.blips.new(515,new mp.Vector3(x,y,z),{
			name:"Exporthändler",
			color:69,
			shortRange:true,
			scale:1,
			dimension:0
		});
		mp.markers.new(30,new mp.Vector3(x,y,z),1.5,{
			color:[140,250,120,100],
			visible:true,
			dimension:0
		});
	}
	
	loadExports(){
		this.createExport(94.5,-2676.6,6);
	}
}
const exportSingleton=new ExportSingleton();
exportSingleton.loadExports();


mp.events.add("Sell->Export->Items",(player,item)=>{
	if(item=="Grapes"){
		if(player.getVariable("Traubensaft")>=1){
			player.setVariable("Money",player.getVariable("Money")+player.getVariable("Traubensaft")*grapePrice);
			player.notify("Du hast x"+player.getVariable("Traubensaft")+" Traubesaft verkauft!\n Du erhälst $"+player.getVariable("Traubensaft")*grapePrice);
			
			player.setVariable("Traubensaft",0);
		}else{
			player.notify("~r~Du hast keinen Traubensaft!");
		}
	}
});