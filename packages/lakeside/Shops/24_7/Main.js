class NormalShopSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("24_7Shape") && shape.getVariable("24_7Shape")==true){
						player.call("Open->Shop->24_7");
					};
				};
			}
		});
	}
	
	create24_7Shop(x,y,z){
		const shape=mp.colshapes.newSphere(x,y,z,1);
		shape.setVariable("24_7Shape",true)
		mp.blips.new(52,new mp.Vector3(x,y,z),{
			name:"24/7 Shop",
			color:4,		
			shortRange:true,
			scale:1,
			dimension:0
		});
	}
	
	load24_7Shop(){
		this.create24_7Shop(-707.4,-913.7,19.2);
		this.create24_7Shop(-2967.8,391,15);
		this.create24_7Shop(-3039.2,585.8,7);
		this.create24_7Shop(1135.6,-982.1,46.4);
		this.create24_7Shop(-1487.2,-379.1,40);
		this.create24_7Shop(-1222.7,-907.1,12.3);
		this.create24_7Shop(-1821,793.2,138.1);
		this.create24_7Shop(-3242.1,1001.2,12.8);
		this.create24_7Shop(25.7,-1347.1,29.5);
		this.create24_7Shop(1163.4,-323,69.2);
	}
}
const normalShopSingleton=new NormalShopSingleton();
normalShopSingleton.load24_7Shop();




mp.events.add("Buy->Item",(player,item)=>{
	if(player){
		if(player.getVariable("loggedIn")==1){
			if(item=="Schokoladenriegel"){
				if(player.getVariable("Money")>=7){
					if(player.getVariable("Schokoladenriegel")<20){
						player.setVariable("Schokoladenriegel",player.getVariable("Schokoladenriegel")+1);
						player.setVariable("Money",player.getVariable("Money")-7);
						
						player.notify("~g~Du hast dir einen Schokoladenriegel gekauft!");
						
						if(player.getVariable("Schokoladenriegel")>=20){
							player.setVariable("Schokoladenriegel",20);
						}
					}else{
						player.notify("~r~Du hast bereits 20 Schokoladenriegel!");
					}
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!");
				}
			}else if(item=="Snickers"){
				if(player.getVariable("Money")>=7){
					if(player.getVariable("Snickers")<20){
						player.setVariable("Snickers",player.getVariable("Snickers")+1);
						player.setVariable("Money",player.getVariable("Money")-7);
						
						player.notify("~g~Du hast dir ein Snickers gekauft!");
						
						if(player.getVariable("Snickers")>=20){
							player.setVariable("Snickers",20);
						}
					}else{
						player.notify("~r~Du hast bereits 20 Snickers!");
					}
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!");
				}
			}else if(item=="Sandwich"){
				if(player.getVariable("Money")>=12){
					if(player.getVariable("Sandwich")<20){
						player.setVariable("Sandwich",player.getVariable("Sandwich")+1);
						player.setVariable("Money",player.getVariable("Money")-12);
						
						player.notify("~g~Du hast dir ein Snickers gekauft!");
						
						if(player.getVariable("Sandwich")>=20){
							player.setVariable("Sandwich",20);
						}
					}else{
						player.notify("~r~Du hast bereits 20 Sandwich!");
					}
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!");
				}
			}else if(item=="Wasser"){
				if(player.getVariable("Money")>=4){
					if(player.getVariable("Wasser")<20){
						player.setVariable("Wasser",player.getVariable("Wasser")+1);
						player.setVariable("Money",player.getVariable("Money")-4);
						
						player.notify("~g~Du hast dir ein Wasser gekauft!");
						
						if(player.getVariable("Wasser")>=20){
							player.setVariable("Wasser",20);
						}
					}else{
						player.notify("~r~Du hast bereits 20 Wasser!");
					}
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!");
				}
			}else if(item=="Schokoladendrink"){
				if(player.getVariable("Money")>=11){
					if(player.getVariable("Schokoladendrink")<20){
						player.setVariable("Schokoladendrink",player.getVariable("Schokoladendrink")+1);
						player.setVariable("Money",player.getVariable("Money")-11);
						
						player.notify("~g~Du hast dir einen Schokoladendrink gekauft!");
						
						if(player.getVariable("Schokoladendrink")>=20){
							player.setVariable("Schokoladendrink",20);
						}
					}else{
						player.notify("~r~Du hast bereits 20 Schokoladendrink's!");
					}
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!");
				}
			}else if(item=="Benzinkanister"){
				if(player.getVariable("Money")>=54){
					if(player.getVariable("Benzinkanister")<3){
						player.setVariable("Benzinkanister",player.getVariable("Benzinkanister")+1);
						player.setVariable("Money",player.getVariable("Money")-54);
						
						player.notify("~g~Du hast dir einen Benzinkanister gekauft!");
						
						if(player.getVariable("Benzinkanister")>=3){
							player.setVariable("Benzinkanister",3);
						}
					}else{
						player.notify("~r~Du hast bereits 3 Benzinkanister!");
					}
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!");
				}
			}else if(item=="Reperaturkasten"){
				if(player.getVariable("Money")>=250){
					if(player.getVariable("Reperaturkasten")<2){
						player.setVariable("Reperaturkasten",player.getVariable("Reperaturkasten")+1);
						player.setVariable("Money",player.getVariable("Money")-250);
						
						player.notify("~g~Du hast dir ein Reperaturkasten gekauft!");
						
						if(player.getVariable("Reperaturkasten")>=2){
							player.setVariable("Reperaturkasten",2);
						}
					}else{
						player.notify("~r~Du hast bereits 2 Reperaturkasten!");
					}
				}else{
					player.notify("~r~Du hast nicht genug Bargeld!");
				}
			}
		}
	}
});