let AvailableWeathers = ["EXTRASUNNY","CLEAR","CLOUDS","SMOG","FOGGY","OVERCAST","RAIN","THUNDER","CLEARING","NEUTRAL","HALLOWEEN"];
let AvailableWeathersXMAS = ["XMAS","BLIZZARD"];

const xmas=false;

mp.events.addCommand("changeWeather",(player,fullText,weather)=>{
	if(player){
		if(player.getVariable("AdminLevel")>=4){
			if(weather){
				if(xmas==false){
					if(AvailableWeathers.includes(weather)){
						mp.world.weather=weather;
						player.outputChatBox("Das Wetter wurde geändert.");
					}else{
						player.outputChatBox("Das angegebene Wetter existiert nicht!");
					};
				};
			}else{
				player.outputChatBox("Du hast kein Wetter angegeben!");
			};
		};
	};
});


function changeWeather(){
	if(xmas==true){
		mp.world.weather=AvailableWeathersXMAS[Math.floor(Math.random()*AvailableWeathersXMAS.length)];
	}else{
		mp.world.weather=AvailableWeathers[Math.floor(Math.random()*AvailableWeathers.length)];
	};
	//mp.world.weather = weather;
	setTimeout(changeWeather,30*60*1000);
};
setTimeout(changeWeather,30*60*1000);