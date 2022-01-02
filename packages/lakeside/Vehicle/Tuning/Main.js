class TuningSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && player.vehicle && shape.getVariable("TuningshopShape") && shape.getVariable("TuningshopShape")==true){
						if(player.vehicle.getVariable("Veh->Data->Owner")==player.name && !player.vehicle.getVariable("Veh->Data->Typ")){
							player.call("Open->Tungshop->UI");
						}else{
							player.notify("~R~Das Fahrzeug gehört dir nicht!");
						};
					};
				};
			}
		});
	}
	
	createTuning(x,y,z,IconID,IconColor,typ){
		const shape=mp.colshapes.newSphere(x,y,z,2);
		shape.setVariable("TuningshopShape",true);
		shape.typ=typ;
		mp.blips.new(IconID,new mp.Vector3(x,y,z),{
			name:"Tuning: "+typ,
			color:IconColor,
			shortRange:true,
			scale:1,
			dimension:0
		});
	}
	
	laodTuning(){
		this.createTuning(-359.3,-133.8,38.6,72,46,"LS Customs");
	}
}
const tuningSingleton=new TuningSingleton();
tuningSingleton.laodTuning();



mp.events.add("Buy->Vehicle->Tuning",(player,typ,mod,modvalue,price)=>{
	if(player.vehicle){
		if(typ!=null && price!=null){
			if(player.vehicle.getVariable("Veh->Data->Owner")==player.name){
				if(player.getVariable("Money")>=Number(price)){
					player.setVariable("Money",player.getVariable("Money")-price);
					player.vehicle.setMod(Number(mod),parseInt(modvalue));
					player.vehicle.setVariable("Veh->Data->Tuning->"+String(typ),parseInt(modvalue));
					player.notify("~g~Tuning erfolgreich verbaut!");
					
					LR.mysql.handle.query("UPDATE uservehicles SET "+String(typ)+"="+player.vehicle.getVariable("Veh->Data->Tuning->"+String(typ))+" WHERE ID="+player.vehicle.getVariable("Veh->Data->ID")+"");
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!\n$"+Number(price));
				}
			}else{
				player.notify("~r~Das Fahrzeug gehört dir nicht!");
			}
		}else{
			player.notify("Error #5179167591");
			player.notify("~r~Melde dich bei einem Teammitglied!");
		}
	}
});

mp.events.add("Buy->Vehicle->Color->Prim",(player,amount,price)=>{
	if(player.vehicle){
		if(amount && price){
			if(player.vehicle.getVariable("Veh->Data->Owner")==player.name){
				if(player.getVariable("Money")>=Number(price)){
					player.setVariable("Money",player.getVariable("Money")-price);
					player.vehicle.setColor(parseInt(amount),parseInt(player.vehicle.getVariable("Veh->Data->Tuning->Color->Sec")));
					player.vehicle.setVariable("Veh->Data->Tuning->Color->Prim",parseInt(amount));
					player.notify("~g~Fahrzeug erfolgreich Lackiert!");
					
					LR.mysql.handle.query("UPDATE uservehicles SET ColorPrim="+player.vehicle.getVariable("Veh->Data->Tuning->Color->Prim")+" WHERE ID="+player.vehicle.getVariable("Veh->Data->ID")+"");
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!\n$"+Number(price));
				}
			}else{
				player.notify("~r~Das Fahrzeug gehört dir nicht!");
			}
		}
	}
});
mp.events.add("Buy->Vehicle->Color->Sec",(player,amount,price)=>{
	if(player.vehicle){
		if(amount && price){
			if(player.vehicle.getVariable("Veh->Data->Owner")==player.name){
				if(player.getVariable("Money")>=Number(price)){
					player.setVariable("Money",player.getVariable("Money")-price);
					player.vehicle.setColor(parseInt(player.vehicle.getVariable("Veh->Data->Tuning->Color->Prim")),parseInt(amount));
					player.vehicle.setVariable("Veh->Data->Tuning->Color->Sec",parseInt(amount));
					player.notify("~g~Fahrzeug erfolgreich Lackiert!");
					
					LR.mysql.handle.query("UPDATE uservehicles SET ColorSec="+player.vehicle.getVariable("Veh->Data->Tuning->Color->Sec")+" WHERE ID="+player.vehicle.getVariable("Veh->Data->ID")+"");
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!\n$"+Number(price));
				}
			}else{
				player.notify("~r~Das Fahrzeug gehört dir nicht!");
			}
		}
	}
});