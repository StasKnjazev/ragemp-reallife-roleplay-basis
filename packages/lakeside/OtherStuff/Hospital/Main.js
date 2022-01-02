const time=require("../../time.js");

var HealthWaitTime=[];
const HospitalTime=180;

function RandomNumber(min,max){
	let Number = Math.round(Math.random()*(max-min)+min);
	return Number;
};

mp.events.add("playerDeath",(player,reason,killer)=>{
	if(player){
		let Random=RandomNumber(1,10);
		if(Random==4){
			player.setVariable("Verbandskasten",player.getVariable("Verbandskasten")+1);
			player.notify("~r~Du hast einen Verbandskasten erhalten.");
		}
		player.call("startDeathScreen",[]);
		player.outputChatBox(time.getTime()+" | Du bist gestorben!");
		player.call("Call->Custom->Event->Timeout",["Spawn->Hospital",HospitalTime*1000]);
		player.setVariable("HospitalTime",HospitalTime);
	};
});

mp.events.add("Spawn->Hospital",(player)=>{
	if(player){
		if(player.getVariable("loggedIn")==1){
			player.spawn(new mp.Vector3(307.3,-1433.2,30));
			HealthWaitTime[player.id]=setInterval((player)=>{
				if(HealthWaitTime[player.id]!=null){
					if(HealthWaitTime[player.id]!=null){
						clearInterval(HealthWaitTime[player.id]);
						HealthWaitTime[player.id]=null;
					};
					player.health=25;
				}
			},1000,player);
			player.call("endDeathScreen",[]);
			player.setVariable("HospitalTime",0);
		}
	};
});

mp.events.add("Hospital->Heal",(player)=>{
	if(player){
		if(player.getVariable("loggedIn")==1){
			if(player.getVariable("Money")>=100){
				player.setVariable("Money",player.getVariable("Money")-100);
				player.health=100;
				player.notify("~g~Du wurdest geheilt!\nKosten: ~r~$100");
			}else if(player.getVariable("Bankmoney")>=100){
				player.setVariable("Bankmoney",player.getVariable("Bankmoney")-100);
				player.health=100;
				player.notify("~g~Du wurdest geheilt!\nKosten: ~r~$100");
			}else{
				player.notify("~r~Du hast nicht genug Bar/Bankgeld!\n$100");
			};
		}
	};
});





class HospitalsSingleton{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("HospitalCol") && shape.getVariable("HospitalCol")==true){
						player.call("Open->Hospital->UI");
					};
				};
			},
		});
	}
	
	createHospital(x,y,z,typ){
		const shape=mp.colshapes.newSphere(x,y,z,1);
		shape.setVariable("HospitalCol",true);
		mp.blips.new(61,new mp.Vector3(x,y,z),{
			name:"Krankenhaus: "+typ,
			color:49,
			shortRange:true,
			scale:1,
			dimension:0
		});
	}
	
	loadHospitals(){
		this.createHospital(294,-1448.8,30,"Davis");
		this.createHospital(299.1,-584.9,43.2,"Pillbox Hill");
		this.createHospital(-498.9,-335.7,34.5,"Rockford Hill");
		this.createHospital(1150.8,-1530.3,35.4,"Fiacre");
	}
}
const hospitalsSingleton=new HospitalsSingleton();
hospitalsSingleton.loadHospitals();