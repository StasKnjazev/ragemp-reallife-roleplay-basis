// Project Lakeside V
// made by DorteY
// lake-gaming.com

mp.events.add('playerStartEnterVehicle',(vehicle)=>{ 
	if(vehicle.getVariable("Veh->Data->Engine")==true){
		vehicle.setEngineOn(true,true,true);
	}else{
		vehicle.setEngineOn(false,true,true);
	}
});


mp.events.add("entityStreamIn",(entity)=>{
    if(entity.type==="vehicle"){
        mp.game.streaming.requestCollisionAtCoord(entity.position.x,entity.position.y,entity.position.z);
        mp.game.streaming.requestAdditionalCollisionAtCoord(entity.position.x,entity.position.y,entity.position.z);
        entity.setLoadCollisionFlag(true);
        entity.trackVisibility();
    }
});