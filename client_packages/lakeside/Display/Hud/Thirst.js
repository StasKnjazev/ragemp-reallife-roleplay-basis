// Project Lakeside V
// made by DorteY
// lake-gaming.com

const HUD_CASH = 3;
const SET_TEXT_OUTLINE = "0x2513DFB0FB8400FE";

const moneyColor = [200, 200, 0, 255];
const moneyNegativeColor = [224, 50, 50, 255];
const moneyChangeMinus = [194, 80, 80, 255];

const drawX = 0.9999;
const drawY = 0.04;
const fontScale = 0.562;
const diffDisplayTime = 3500; // in milliseconds

let moneySet = false;
let currentThirst = 0;
let currentHungerText = "0%";
let changeText = "";
let changeTime = 0;

function drawText(text, drawXY, font, color, scale) {
    mp.game.ui.setTextEntry("STRING");
    mp.game.ui.addTextComponentSubstringPlayerName(text);
    mp.game.ui.setTextFont(font);
    mp.game.ui.setTextScale(scale, scale);
    mp.game.ui.setTextColour(color[0], color[1], color[2], color[3]);
    mp.game.ui.setTextRightJustify(true);
    mp.game.ui.setTextWrap(0, drawXY[0]);
    mp.game.invoke(SET_TEXT_OUTLINE);
    mp.game.ui.drawText(drawXY[0], drawXY[1]);
}

mp.events.addDataHandler("Thirst",(entity,value)=>{
    if (entity.handle===mp.players.local.handle){
        currentThirst=value;
        currentHungerText=`Durst: ${currentThirst}`;
    }
});

mp.events.add("render", () => {
	if(mp.players.local.getVariable("loggedIn")===1){
		mp.game.ui.hideHudComponentThisFrame(HUD_CASH);
		
		let safeZone = mp.game.graphics.getSafeZoneSize();
		let finalDrawX = drawX - (3.92 - safeZone) * 0.3;
		let finalDrawY = drawY + (3.17 - safeZone) * 0.3;
		
		drawText(currentHungerText, [finalDrawX, finalDrawY], 7, (currentThirst < 0) ? moneyNegativeColor : moneyColor, fontScale);
	}
});