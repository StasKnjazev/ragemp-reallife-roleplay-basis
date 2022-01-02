const mysql=require("../../Database.js");


class ATMSingletone {
	constructor() {
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("ATMshape") && shape.getVariable("ATMshape")==true){
						player.canOpenATM=true;
					}
				}
			},
			"sKeys-E":(player)=>{
				if(player.getVariable("loggedIn")==1 && !player.vehicle && player.canOpenATM==true){
					this.openMenu(player);
				}
			},
			"playerExitColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("ATMshape") && shape.getVariable("ATMshape")==true){
						player.canOpenATM=false;
					}
				}
			},

			"sMoney-PayOutATM":(player,value)=>{
				this.PayOutATM(player, value);
			},

			"sMoney-PayInATM":(player,value)=>{
				this.PayInATM(player,value);
			},
		});
	}
	
	createATM(x,y,z){
		const shape=mp.colshapes.newSphere(x,y,z,0.7);
		shape.atm=true;
		shape.setVariable("ATMshape",true);
		mp.blips.new(500,new mp.Vector3(x,y,z),{
			name:"Geldautomat",
			color:2,		
			shortRange:true,
			scale:0.65,
		});
	}


	getPlayerMoneyInfo(player){
		const str1="app.cash = "+player.getVariable("Money")+";";
		const str2="app.bank = "+player.getVariable("Bankmoney")+";";
		const str=str1+str2;
		return str;
	}

	openMenu(player){
		const str1=this.getPlayerMoneyInfo(player);
		const str2=`setTimeout(load, 300);`;
		const execute=str1+str2;
		player.call("cMoney-ShowATM",[execute]);
	}

	loadATMs(){
		this.createATM(-95.54,6457.14,31.46);
		this.createATM(-97.26,6455.38,31.46);
		this.createATM(155.828,6642.827,31.602);
		this.createATM(174.161,6637.827,31.573);
		this.createATM(1701.28,6426.46,32.76);
		this.createATM(112.483,-818.976,31.342);
		this.createATM(111.323,-775.486,31.437);
		this.createATM(114.181,-776.757,31.418);
		this.createATM(296.444,-893.988,29.231);
		this.createATM(295.694,-896.069,29.214);
		this.createATM(147.726,-1035.783,29.343);
		this.createATM(145.947,-1035.146,29.345);
		this.createATM(289.01,-1256.83,29.441);
		this.createATM(1703,4933.5,42.06);
		this.createATM(1968.13,3743.56,32.34);
		this.createATM(2683,3286.5,55.21);
		this.createATM(-611.92,-704.75,31.26);
		this.createATM(-614.6,-704.75,31.26);
		this.createATM(-56.9,-1752.2,29);
		this.createATM(1153.7,-326.7,69);
		this.createATM(-165,233.7,94.9);
		this.createATM(1077.9,-776.4,58.2);
		this.createATM(-660.6,-853.9,24.4);
		this.createATM(-712.9,-819.1,23.7);
		this.createATM(-710,-818.9,23.7);
		this.createATM(-717.6,-915.7,19.2);
		this.createATM(-2072.6,-317.3,13.3);
		this.createATM(-1315.3,-835.3,16.9);
		this.createATM(-712.9,-819,23.7);
		this.createATM(-709.9,-819,23.7);
		this.createATM(-2975.1,380.2,15);
		this.createATM(-3043.9,594.7,7.7);
		this.createATM(-1205.3,-325.6,37.8);
		this.createATM(527.3,-160.6,57);
		this.createATM(-846.5,-340.6,38.6);
		this.createATM(1166.8,-456.1,66.8);
		this.createATM(1138.3,-468.9,66.7);
		this.createATM(-254.3,-692.4,33.6);
		this.createATM(-1827.2,785,138.3);
		this.createATM(-3241.1,997.5,12.5);
		this.createATM(-3240.6,1008.6,12.8);
		this.createATM(-2956.8,487.7,15.4);
		this.createATM(33.1,-1348.1,29.4);
		this.createATM(-1091.4,2708.6,19);
	}

	logATMOperation(player, before) {
		const after = `$${player.getVariable("Money")} $${player.getVariable("Bankmoney")}`;
	}

	async PayInATM(player,amount){
		if(player && player.getVariable("loggedIn")==1){
			if(player.getVariable("Money")>=Number(amount)){
				const before = `$${player.getVariable("Money")} $${player.getVariable("Bankmoney")}`;
				
				//player.getVariable("Money") -= summ;
				//player.getVariable("Bankmoney") += summ;
				player.setVariable("Money",player.getVariable("Money")-Number(amount));
				player.setVariable("Bankmoney",player.getVariable("Bankmoney")+Number(amount));
				this.logATMOperation(player,before);
			}
		}
	}
	async PayOutATM(player,amount){
		if(player && player.getVariable("loggedIn")==1){
			if(player.getVariable("Bankmoney")>=Number(amount)){
				const before = `$${player.getVariable("Money")} $${player.getVariable("Bankmoney")}`;
				
				player.setVariable("Money",player.getVariable("Money")+Number(amount));
				player.setVariable("Bankmoney",player.getVariable("Bankmoney")-Number(amount));
				this.logATMOperation(player,before);
			}
		}
	}
}
const atmSingletone=new ATMSingletone();
atmSingletone.loadATMs();
