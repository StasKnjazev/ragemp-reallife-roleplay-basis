class CreateJobPositions{
	constructor(){
		mp.events.add({
			"playerEnterColshape":(player,shape)=>{
				if(shape){
					if(player.getVariable("loggedIn")==1 && !player.vehicle && shape.getVariable("ShapeJob_"+shape.typ) && shape.getVariable("ShapeJob_"+shape.typ)==true){
						player.call("Open->Job->UI",[shape.typ]);
					};
				};
			},
		});
	}
	
	CreateJobMarker(x,y,z,IconID,IconColor,MarkerID,Name,typ){
		const shape=mp.colshapes.newSphere(x,y,z,1);
		shape.typ=typ;
		shape.setVariable("ShapeJob_"+typ,true);
		mp.blips.new(IconID,new mp.Vector3(x,y,z),{
			name:"Job: "+Name,
			color:IconColor,
			shortRange:true,
			scale:1,
			dimension:0
		});
		mp.markers.new(MarkerID,new mp.Vector3(x,y,z),1,{
			color:[158,205,235,100],
			visible:true,
			dimension:0
		});
	}
	
	loadJobs(){
		this.CreateJobMarker(434.9,-644.3,28.7,513,18,2,"Busfahrer","Busdriver");
	}
}
const loadJobPositions=new CreateJobPositions();
loadJobPositions.loadJobs();