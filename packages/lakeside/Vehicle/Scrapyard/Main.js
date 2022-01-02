class ScrapyardSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && player.vehicle && shape.getVariable("ScrapyardCol") && shape.getVariable("ScrapyardCol")==true){
						let model=player.vehicle.model;
						let price=0;
						
						if(model==String(mp.joaat("asea"))){
							price=13200/100*60;
						}else if(model==String(mp.joaat("asbo"))){
							price=8200/100*60;
						}else if(model==String(mp.joaat("club"))){
							price=11300/100*60;
						}else if(model==String(mp.joaat("blista2"))){
							price=14000/100*60;
						}else if(model==String(mp.joaat("asterope"))){
							price=15200/100*60;
						}else if(model==String(mp.joaat("glendale"))){
							price=17000/100*60;
						}else if(model==String(mp.joaat("stanier"))){
							price=27000/100*60;
						}else if(model==String(mp.joaat("jugular"))){
							price=185000/100*60;
						}else if(model==String(mp.joaat("schafter3"))){
							price=220000/100*60;
						}else if(model==String(mp.joaat("drafter"))){
							price=350000/100*60;
						}else if(model==String(mp.joaat("coquette"))){
							price=520000/100*60;
						}else if(model==String(mp.joaat("paragon"))){
							price=620000/100*60;
						}else if(model==String(mp.joaat("schlagen"))){
							price=1250000/100*60;
						}else if(model==String(mp.joaat("pariah"))){
							price=1500000/100*60;
						}
						if(price!=null){
							player.notify(String(Math.round(price)));
							player.call("Open->Scrapyard->UI",["app.sellPrice = "+String(Math.round(price))+";"]);
							player.setVariable("Temp->Sellprice",Math.round(price))
						}else{
							player.notify("~r~Das Fahrzeug kann nicht verkauf twerden!");
						};
					};
				};
			},
			"Sell->Vehicle->Scrap":(player)=>{
				if(player){
					if(player.vehicle){
						if(player.vehicle.getVariable("Veh->Data->Owner")&& player.vehicle.getVariable("Veh->Data->Owner")==player.name && player.vehicle.getVariable("Veh->Data->ID")&& !player.vehicle.getVariable("Veh->Data->Typ")){
							LR.mysql.handle.query("DELETE FROM uservehicles WHERE ID=? AND Owner=?",[player.vehicle.getVariable("Veh->Data->ID"),player.vehicle.getVariable("Veh->Data->Owner")],function(err,res){
								if(!err){
									player.vehicle.destroy();
									player.outputChatBox("Fahrzeug erfolgreich verschrottet.");
									player.outputChatBox("Rückzahlung: $"+player.getVariable("Temp->Sellprice"));
									player.setVariable("Money",player.getVariable("Money")+player.getVariable("Temp->Sellprice"));
									player.setVariable("Temp->Sellprice",null);
								}else{
									console.log(err);
								}
							});
						}
					}
				}
			}
		});
	}
	
	createScrapyard(x,y,z){
		const shape=mp.colshapes.newSphere(x,y,z,2);
		shape.setVariable("ScrapyardCol",true);
		mp.blips.new(527,new mp.Vector3(x,y,z),{
			name:"Schrottplatz",
			color:55,
			shortRange:true,
			scale:1,
			dimension:0
		});
	}
	
	loadScrapyards(){
		this.createScrapyard(486.6,-1307.6,29.2);
	}
}
const scrapyardSingleton=new ScrapyardSingleton();
scrapyardSingleton.loadScrapyards();