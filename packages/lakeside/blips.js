var Config = require('./blips.json');


for(var key in Config.Blips) {
    if(typeof Config.Blips[key].Position == "undefined") continue;
    blipss = Config.Blips[key];
    mp.blips.new(blipss.IconID, new mp.Vector3(blipss.Position.X,blipss.Position.Y,blipss.Position.Z),{
		name: blipss.Name,
		color: blipss.Color,
		shortRange: true,
	});
}