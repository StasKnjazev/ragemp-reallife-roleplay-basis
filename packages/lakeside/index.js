function RandomNumber(min,max){
	let Number = Math.round(Math.random()*(max-min)+min);
	return Number;
};

global.literPrice=RandomNumber(75,135);
global.grapePrice=RandomNumber(220,460);
global.sVersion="1.5";


global.LR={};
LR.mysql=require('./Database.js');
LR.mysql.connect(function(){ });



require("./Database.js");
require("./test.js");
require("./Admin/Main.js");
require("./Whitelist/Main.js");
require("./Inventory/Main.js");

require("./Faction/Main.js");
require("./Faction/Police/Main.js");

require("./OtherStuff/Char.js");
require("./OtherStuff/ATM/Main.js");
require("./OtherStuff/Hospital/Main.js");
require("./OtherStuff/Export/Main.js");
require("./OtherStuff/Chat.js");

require("./Vehicle/Main.js");
require("./Vehicle/CarShop/Main.js");
require("./Vehicle/Tankstation/Main.js");
require("./Vehicle/Trunk/Main.js");
require("./Vehicle/Tuning/Main.js");
require("./Vehicle/Rental/Main.js");
require("./Vehicle/Scrapyard/Main.js");

require("./Shops/24_7/Main.js");
//require("./Shops/Clothing/Main.js");

require("./Jobs/Main.js");
require("./Jobs/Busdriver/Main.js");
require("./Jobs/Grapes/Main.js");

require("./MapObjects.js");
require("./logs.js");
require("./blips.js");
require("./weather.js");
require("./server.js");
require("./time.js");
require("./Voice.js");