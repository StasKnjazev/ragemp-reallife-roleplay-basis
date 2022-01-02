const log=require("./logs.js");
const time=require("./time.js");

const sha=require('sha256');

var PlayerCharCooldown=[];

//function RandomNumber(min,max){
//	let Number = Math.round(Math.random()*(max-min)+min);
//	return Number;
//};
//module.exports.RandomNumber=RandomNumber;



mp.events.add("Register->Login",(player,username,password,typ)=>{
	player.dimension=1001;
	if(typ==0){
		LR.mysql.handle.query("SELECT * FROM userdata WHERE Username=?",[username],function(err,res){
			if(res.length>0){
				player.notify("~r~Der angegebene Username ist bereits vergeben!");
			}else{
				LR.mysql.handle.query("SELECT * FROM userdata WHERE SocialClub=?",[player.socialClub],function(err,res){
					if(res.length>0){
						player.notify("~r~Du hast bereits einen Account bei uns!\nName: "+res[0].Username);
					}else{
						LR.mysql.handle.query("INSERT INTO userdata SET Username=?,Password=?,SocialClub=?,CharState=?,AdminLevel=?,Armor=?,Health=?,Hunger=?,Thirst=?,HospitalTime=?,Playtime=?,Faction=?,FactionRank=?,SpawnX=?,SpawnY=?,SpawnZ=?,SpawnROT=?",[username,sha(password),player.socialClub,"false",0,0,100,100,100,0,0,0,0,-1173,-750,19.4,311],function(err,res){
							if(!err){
								player.notify("~g~Du hast dich erfolgreich registriert.");
								setPlayerDatasAfterLogin(player,username);
								
								console.log(player.name+" hat sich registriert.");
							}else{
								console.log(err);
								player.notify("~r~Account error #089571");
								player.notify("~r~Melde dich bei einem Teammitglied!");
							};
						});
						LR.mysql.handle.query("INSERT INTO userinventory SET Username=?,Money=?,Bankmoney=?,Jobmoney=?,Schokoladenriegel=?,Snickers=?,Sandwich=?,Wasser=?,Schokoladendrink=?,Trauben=?,Traubensaft=?,Benzinkanister=?,Verbandskasten=?,Reperaturkasten=?",[username,10000,1000,0,5,2,2,5,4,0,0,0,1,0],function(err,res){
							if(!err){
								
							}else{
								console.log(err);
								player.notify("~r~Account error #089572");
								player.notify("~r~Melde dich bei einem Teammitglied!");
							};
						});
						LR.mysql.handle.query("INSERT INTO userclothing SET Username=?",[username],function(err,res){
							if(!err){
								
							}else{
								console.log(err);
								player.notify("~r~Account error #089573");
								player.notify("~r~Melde dich bei einem Teammitglied!");
							};
						});
					};
				});
			};
		});
	}else{
		LR.mysql.handle.query("SELECT * FROM userdata WHERE Username=? AND Password=?",[username,sha(password)],function(err,res){
			if(res.length>0){
				LR.mysql.handle.query("SELECT * FROM bans WHERE Username=?",[username],function(err,res){
					if(res.length==0){
						player.notify("~g~Du hast dich erfolgreich eingeloggt.");
						setPlayerDatasAfterLogin(player,username);
						console.log(player.name+" hat sich eingeloggt.");
					}else{
						player.notify("~r~Du bist gebannt!\nGrund: "+res[0].Reason);
					}
				});
			}else{
				player.notify("~r~Username/Password Kombination existiert nicht!");
			};
		});
	};
});

const PaydayTimer=[];
const HungerTimer=[];
const ThirstTimer=[];
function setPlayerDatasAfterLogin(player,username){
	player.outputChatBox("<strong style='color:#FFFFFF'>Herzlich Willkommen auf</strong> <strong style='color:#DC5A00'>Lakeside V</strong>");
	LR.mysql.handle.query("SELECT * FROM userdata WHERE Username=?",[username],function(err,res){
		if(!err){
			player.call("Destroy->RegisterLogin->UI");
			
			//Set datas
			player.dimension=0;
			player.spawn(new mp.Vector3(res[0].SpawnX,res[0].SpawnY,res[0].SpawnZ));
			player.name=res[0].Username;
			
			//if(res[0].CharState=="false"){ TODO
			//	PlayerCharCooldown[player.id]=setInterval((player)=>{
			//		if(PlayerCharCooldown[player.id]!=null){
			//			clearInterval(PlayerCharCooldown[player.id]);
			//			PlayerCharCooldown[player.id]=null;
			//			
			//			player.sendToCreator();
			//		}
			//	},2000,player);
			//}
			
			player.setVariable('loggedIn',1);
			player.setVariable('Seatbelt',false);
			player.setVariable('PlayerID',res[0].ID);
			player.setVariable('AdminLevel',res[0].AdminLevel);
			player.armour=res[0].Armor;
			player.health=res[0].Health;
			player.setVariable('Hunger',res[0].Hunger);
			player.setVariable('Thirst',res[0].Thirst);
			player.setVariable('HospitalTime',res[0].HospitalTime);
			player.setVariable('Playtime',res[0].Playtime);
			player.setVariable('Faction',res[0].Faction);
			player.setVariable('FactionRank',res[0].FactionRank);
			
			if(player.getVariable("HospitalTime")>=1){
				player.health=0;
			}
			
			if(mp.players.exists(player)){
				PaydayTimer[player.id]=setInterval((player)=>{
					payday(player);
				},1*60*1000,player);
				HungerTimer[player.id]=setInterval((player)=>{
					hunger(player);
				},80*1000,player);
				ThirstTimer[player.id]=setInterval((player)=>{
					thirst(player);
				},62*1000,player);
			}
		}else{
			player.notify("~r~Account error #089571");
			player.notify("~r~Melde dich bei einem Teammitglied!");
		};
	});
	LR.mysql.handle.query("SELECT * FROM userinventory WHERE Username=?",[username],function(err,res){
		if(!err){
			//Set datas
			player.dimension=0;
			
			player.setVariable("Money",res[0].Money);
			player.setVariable("Bankmoney",res[0].Bankmoney);
			player.setVariable("Jobmoney",res[0].Jobmoney);
			player.setVariable("Schokoladenriegel",res[0].Schokoladenriegel);
			player.setVariable("Snickers",res[0].Snickers);
			player.setVariable("Sandwich",res[0].Sandwich);
			player.setVariable("Wasser",res[0].Wasser);
			player.setVariable("Schokoladendrink",res[0].Schokoladendrink);
			player.setVariable("Trauben",res[0].Trauben);
			player.setVariable("Traubensaft",res[0].Traubensaft);
			player.setVariable("Benzinkanister",res[0].Benzinkanister);
			player.setVariable("Verbandskasten",res[0].Verbandskasten);
			player.setVariable("Reperaturkasten",res[0].Reperaturkasten);
		}else{
			player.notify("~r~Account error #089572");
			player.notify("~r~Melde dich bei einem Teammitglied!");
		};
	});
}

function payday(player){
	if(mp.players.exists(player)){
		if(player && player.getVariable("loggedIn")&& player.getVariable("loggedIn")==1){
			player.setVariable("Playtime",player.getVariable("Playtime")+1);
			
			//Payday
			if(Math.floor(player.getVariable("Playtime")/60)==(player.getVariable("Playtime")/60)){
				player.outputChatBox("_______Payday_______");
				
				player.outputChatBox("Finanzspritze: $"+250);
				if(player.getVariable("Jobmoney")>=1){
					player.outputChatBox("Jobgehalt: $"+player.getVariable("Jobmoney"));
				}
				
				player.setVariable("Bankmoney",player.getVariable("Bankmoney")+player.getVariable("Jobmoney"));
				player.setVariable("Bankmoney",player.getVariable("Bankmoney")+250);
				
				player.setVariable("Jobmoney",0)
				
				savePlayerData(player);
			}
		}
	}
}
function hunger(player){
	if(mp.players.exists(player)){
		if(player && player.getVariable("loggedIn")&& player.getVariable("loggedIn")==1){
			player.setVariable("Hunger",player.getVariable("Hunger")-1);
			
			if(player.getVariable("Hunger")==20){
				player.outputChatBox("Du wirst Hungrig!");
			}
			if(player.getVariable("Hunger")<=15){
				player.health=player.health-10;
			}
			
			if(player.getVariable("Hunger")==0){
				player.health=0;
				player.setVariable("Hunger",25);
			}
		}
	}
}
function thirst(player){
	if(mp.players.exists(player)){
		if(player && player.getVariable("loggedIn")&& player.getVariable("loggedIn")==1){
			player.setVariable("Thirst",player.getVariable("Thirst")-1);
			
			if(player.getVariable("Thirst")==20){
				player.outputChatBox("Du wirst Durstig!");
			}
			if(player.getVariable("Thirst")<=15){
				player.health=player.health-10;
			}
			
			if(player.getVariable("Thirst")==0){
				player.health=0;
				player.setVariable("Thirst",35);
			}
		}
	}
}

mp.events.add("playerJoin",(player)=>{
	if(player){
		if(mp.players.exists(player)){
			if(PaydayTimer[player.id]!=null){
				clearInterval(PaydayTimer[player.id]);
				PaydayTimer[player.id]=null;
			};
			if(HungerTimer[player.id]!=null){
				clearInterval(HungerTimer[player.id]);
				HungerTimer[player.id]=null;
			};
			if(ThirstTimer[player.id]!=null){
				clearInterval(ThirstTimer[player.id]);
				ThirstTimer[player.id]=null;
			};
			player.call("Open->RegisterLogin->UI",["app.ServerVersion = "+String(sVersion)+";"]);
			player.setVariable("loggedIn",null);
		}
	}
});

function savePlayerData(player){
	if(mp.players.exists(player)){
		LR.mysql.handle.query('UPDATE `userdata` SET AdminLevel=?,Armor=?,Health=?,Hunger=?,Thirst=?,HospitalTime=?,Playtime=?,Faction=?,Factionrank=? WHERE Username=?',[player.getVariable("AdminLevel"),player.armour,player.health,player.getVariable("Hunger"),player.getVariable("Thirst"),player.getVariable("HospitalTime"),player.getVariable("Playtime"),player.getVariable("Faction"),player.getVariable("FactionRank"),player.name],function(err,res){
			if(err){
				console.log(err);
			};
		});
		LR.mysql.handle.query('UPDATE `userinventory` SET Money=?,Bankmoney=?,Jobmoney=?,Schokoladenriegel=?,Snickers=?,Sandwich=?,Wasser=?,Schokoladendrink=?,Trauben=?,Traubensaft=?,Benzinkanister=?,Verbandskasten=?,Reperaturkasten=? WHERE Username=?',[player.getVariable("Money"),player.getVariable("Bankmoney"),player.getVariable("Jobmoney"),player.getVariable("Schokoladenriegel"),player.getVariable("Snickers"),player.getVariable("Sandwich"),player.getVariable("Wasser"),player.getVariable("Schokoladendrink"),player.getVariable("Trauben"),player.getVariable("Traubensaft"),player.getVariable("Benzinkanister"),player.getVariable("Verbandskasten"),player.getVariable("Reperaturkasten"),player.name],function(err,res){
			if(err){
				console.log(err);
			};
		});
	}
}
module.exports.savePlayerData=savePlayerData;

mp.events.add("playerQuit",(player)=>{
	if(mp.players.exists(player)){
		if(player && player.getVariable("loggedIn")&& player.getVariable("loggedIn")==1){
			savePlayerData(player);
			player.setVariable("loggedIn",null);
			if(PaydayTimer[player.id]!=null){
				clearInterval(PaydayTimer[player.id]);
				PaydayTimer[player.id]=null;
			};
			if(HungerTimer[player.id]!=null){
				clearInterval(HungerTimer[player.id]);
				HungerTimer[player.id]=null;
			};
			if(ThirstTimer[player.id]!=null){
				clearInterval(ThirstTimer[player.id]);
				ThirstTimer[player.id]=null;
			};
		};
	};
});

mp.events.addCommand("sud",(player)=>{
	if(player){
		if(player.getVariable("AdminLevel")>=5){
			mp.players.forEach(function(playerr){
				savePlayerData(playerr);
				playerr.notify("Saved!");
			});
		}
	}
});




mp.events.add("Set->Spawn",(player,id)=>{
	if(player){
		if(player.getVariable("loggedIn")==1){
			if(id==0){
				LR.mysql.handle.query('UPDATE `userdata` SET SpawnX=?,SpawnY=?,SpawnZ=?,SpawnROT=? WHERE Username=?',[-1173,-750,19.4,311,player.name],function(err,res){
					if(!err){
						player.notify("~g~Spawnpunkt auf\n'Noobspawn' gesetzt!");
					}else{
						console.log(err);
					}
				});
			}else if(id==1){
				LR.mysql.handle.query('UPDATE `userdata` SET SpawnX=?,SpawnY=?,SpawnZ=?,SpawnROT=? WHERE Username=?',[44.4,-1748.1,30,43,player.name],function(err,res){
					if(!err){
						player.notify("~g~Spawnpunkt auf\n'Megal Mall' gesetzt!");
					}else{
						console.log(err);
					};
				});
			}else if(id==2){
				LR.mysql.handle.query('UPDATE `userdata` SET SpawnX=?,SpawnY=?,SpawnZ=?,SpawnROT=? WHERE Username=?',[player.position.x,player.position.y,player.position.z,0,player.name],function(err,res){
					if(!err){
						player.notify("~g~Spawnpunkt auf\n'Jetzige Position' gesetzt!");
					}else{
						console.log(err);
					};
				});
			}
		}
	}
});