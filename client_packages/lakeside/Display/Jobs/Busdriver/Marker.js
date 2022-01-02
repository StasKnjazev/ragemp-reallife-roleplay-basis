// Project Lakeside V
// made by DorteY
// lake-gaming.com

mp.events.add({
	"Create->Job->Bus->Marker":(x,y,z)=>{
		Marker=mp.markers.new(24,new mp.Vector3(x,y,z+0.4),2,{
			color: [220,90,0,200],
			visible: true,
			dimension: 0
		});
		Blip=mp.blips.new(8,new mp.Vector3(x,y,z),{
			name:"Haltestelle",
			color:4,
			shortRange:true,
			scale:0.6,
			dimension:0
		});
		mp.game.ui.setNewWaypoint(x,y);
	},
	"Destroy->Job->Bus->Marker":(x,y,z)=>{
		if(Marker){
			Marker.destroy();
			Marker=null;
		}
		if(Blip){
			Blip.destroy();
			Blip=null;
		}
	},
	"Freeze->Job->Bus":(state)=>{
		mp.players.local.vehicle.freezePosition(state);
	}
});