//mp.events.add("Open->Vehicle->Inventory",()=>{
//	if(mp.players.local.getVariable("loggedIn")==1){
//		if(cefState==false){
//			cefState=true;
//			mp.gui.chat.show(false);
//			mp.gui.chat.activate(false);
//			const InvTrunk=new Menu("Fahrzeug Inventar","",MenuPoint);
//			
//			InvTrunk.AddItem( new UIMenuItem("Einlagern","Gegenstand einlagern"));
//			InvTrunk.AddItem( new UIMenuItem("Auslagern","Gegenstand auslagern"));
//			
//			InvTrunk.ItemSelect.on((item,index,value)=>{
//				if(item.Text=="Einlagern"){
//					InvTrunk.Close();
//					const InvTrunkPutIn=new Menu("Fahrzeug Inventar","Einlagern",MenuPoint);
//					
//					items={
//						"Schokoladenriegel":{name:"Schokoladenriegel",desc:"",amount:mp.players.local.getVariable("Schokoladenriegel")},
//						"Snickers":{name:"Snickers",desc:"",amount:mp.players.local.getVariable("Snickers")},
//						"Sandwich":{name:"Sandwich",desc:"",amount:mp.players.local.getVariable("Sandwich")},
//						"Wasser":{name:"Wasser",desc:"",amount:mp.players.local.getVariable("Wasser")}
//					}
//					for(var key in items){
//						//if(mp.players.local.getVariable(key)>=1){
//							item=items[key];
//							fitem=new NativeUI.UIMenuItem(item.name,item.desc);
//							fitem.SetRightLabel("x"+item.amount);
//							InvTrunkPutIn.AddItem(fitem);
//						//}
//					}
//					InvTrunkPutIn.ItemSelect.on((item,index)=>{
//						for(var key in items){
//							if(item.Text!=key)continue;
//							let localPlayer=mp.players.local;
//							let idVehicle=mp.game.vehicle.getClosestVehicle(localPlayer.position.x,localPlayer.position.y,localPlayer.position.z,7,0,70);
//							let vehicle=mp.vehicles.atHandle(idVehicle);
//							
//							mp.events.callRemote("Trunk->Putin->Item",item.Text,vehicle);
//						}
//					});
//					InvTrunkPutIn.MenuClose.on(()=>{
//						cefState=false;
//						mp.gui.chat.show(true);
//						mp.gui.chat.activate(true);
//					});
//				}else if(item.Text=="Auslagern"){
//					InvTrunk.Close();
//					
//					const InvTrunkPutOut=new Menu("Fahrzeug Inventar","Auslagern",MenuPoint);
//					
//					items={
//						"Schokoladenriegel":{name:"Schokoladenriegel",desc:"",amount:mp.players.local.getVariable("Schokoladenriegel")},
//						"Snickers":{name:"Snickers",desc:"",amount:mp.players.local.getVariable("Snickers")},
//						"Sandwich":{name:"Sandwich",desc:"",amount:mp.players.local.getVariable("Sandwich")},
//						"Wasser":{name:"Wasser",desc:"",amount:mp.players.local.getVariable("Wasser")}
//					}
//					for(var key in items){
//						//if(mp.players.local.getVariable(key)>=1){
//							item=items[key];
//							fitem=new NativeUI.UIMenuItem(item.name,item.desc);
//							fitem.SetRightLabel("x"+item.amount);
//							InvTrunkPutOut.AddItem(fitem);
//						//}
//					}
//					InvTrunkPutOut.ItemSelect.on((item,index)=>{
//						for(var key in items){
//							if(item.Text!=key)continue;
//							let localPlayer=mp.players.local;
//							let idVehicle=mp.game.vehicle.getClosestVehicle(localPlayer.position.x,localPlayer.position.y,localPlayer.position.z,7,0,70);
//							let vehicle=mp.vehicles.atHandle(idVehicle);
//							
//							mp.events.callRemote("Trunk->Putout->Item",item.Text,vehicle);
//							mp.events.callRemote("server:kofferraum:unloadItem",item.name);
//						}
//					});
//					InvTrunkPutOut.MenuClose.on(()=>{
//						cefState=false;
//						mp.gui.chat.show(true);
//						mp.gui.chat.activate(true);
//					});
//				}
//			});
//		}
//	}
//});