mp.events.add("Use->Item",(player,item)=>{
	if(player){
		if(player.getVariable("loggedIn")==1){
			if(item=="Schokoladenriegel"){
				if(player.getVariable("Schokoladenriegel")>=1){
					player.setVariable("Schokoladenriegel",player.getVariable("Schokoladenriegel")-1);
					player.setVariable("Hunger",player.getVariable("Hunger")+9);
					
					player.notify("~g~Du isst einen Schokoladenriegel!");
					
					if(player.getVariable("Hunger")>=100){
						player.setVariable("Hunger",100);
					}
				}else{
					player.notify("~r~Dieses Item hast du nicht!");
				}
			}else if(item=="Snickers"){
				if(player.getVariable("Snickers")>=1){
					player.setVariable("Snickers",player.getVariable("Snickers")-1);
					player.setVariable("Hunger",player.getVariable("Hunger")+9);
					
					player.notify("~g~Du isst einen Snickers!");
					
					if(player.getVariable("Hunger")>=100){
						player.setVariable("Hunger",100);
					}
				}else{
					player.notify("~r~Dieses Item hast du nicht!");
				}
			}else if(item=="Sandwich"){
				if(player.getVariable("Sandwich")>=1){
					player.setVariable("Sandwich",player.getVariable("Sandwich")-1);
					player.setVariable("Hunger",player.getVariable("Hunger")+12);
					
					player.notify("~g~Du isst ein Sandwich!");
					
					if(player.getVariable("Hunger")>=100){
						player.setVariable("Hunger",100);
					}
				}else{
					player.notify("~r~Dieses Item hast du nicht!");
				}
			}else if(item=="Wasser"){
				if(player.getVariable("Wasser")>=1){
					player.setVariable("Wasser",player.getVariable("Wasser")-1);
					player.setVariable("Thirst",player.getVariable("Thirst")+5);
					
					player.notify("~g~Du drinkst ein Wasser!");
					
					if(player.getVariable("Thirst")>=100){
						player.setVariable("Thirst",100);
					}
				}else{
					player.notify("~r~Dieses Item hast du nicht!");
				}
			}else if(item=="Schokoladendrink"){
				if(player.getVariable("Schokoladendrink")>=1){
					player.setVariable("Schokoladendrink",player.getVariable("Schokoladendrink")-1);
					player.setVariable("Thirst",player.getVariable("Thirst")+10);
					
					player.notify("~g~Du drinkst einen Schokoladendrink!");
					
					if(player.getVariable("Thirst")>=100){
						player.setVariable("Thirst",100);
					}
				}else{
					player.notify("~r~Dieses Item hast du nicht!");
				}
			}else if(item=="Benzinkanister"){
				if(player.getVariable("Benzinkanister")>=1){
					player.notify("~g~Verwende das 'X' Menü!");
				}else{
					player.notify("~r~Dieses Item hast du nicht!");
				}
			}else if(item=="Verbandskasten"){
				if(player.getVariable("Verbandskasten")>=1){
					player.setVariable("Verbandskasten",player.getVariable("Verbandskasten")-1);
					player.health=100;
					
					player.notify("~g~Du hast ein Verbandskasten benutzt!");
				}
			}else if(item=="Reperaturkasten"){
				if(player.getVariable("Reperaturkasten")>=1){
					player.notify("~g~Verwende das 'X' Menü!");
				}else{
					player.notify("~r~Dieses Item hast du nicht!");
				}
			}
		}
	}
});