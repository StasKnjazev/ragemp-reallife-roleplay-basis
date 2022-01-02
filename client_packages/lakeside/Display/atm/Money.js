let money;

function prettify(num) {
    const n = num.toString();
    const separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1${separator}`);
}
exports.prettify = prettify;

mp.events.add({
	"cMoney-Update":(value)=>money=value,
	"closeCefATM":()=>closeCefATM(),
	
	"render":()=>{
		if (money >= 0 && mp.gui.cursor.visible === false) {
			mp.game.graphics.drawText(`$${prettify(money)}`,[0.940, 0.050], { 
				font: 7, 
				color: [115, 186, 131, 255], 
				scale: [0.7, 0.7], 
			});
		}
	},

	"cMoney-ShowATM":(execute)=>{
		if(cefState==true)return;
		
		cefATM=mp.browsers.new("package://lakeside/Display/atm/index.html");
		cefATM.execute(execute);
		mp.gui.cursor.visible=true;
		mp.gui.chat.activate(false);
		mp.gui.cursor.show(true,true);
		mp.gui.chat.show(false);
		mp.game.ui.displayRadar(false);
	},

	"cMoney-SendNotification":(message)=>{
		const maxStringLength = 99;
		mp.game.ui.setNotificationTextEntry("CELL_EMAIL_BCON");
		for (let i = 0, msgLen = message.length; i < msgLen; i += maxStringLength) mp.game.ui.addTextComponentSubstringPlayerName(message.substr(i, Math.min(maxStringLength, message.length - i)));
		mp.game.ui.setNotificationMessage("CHAR_BANK_FLEECA", "CHAR_BANK_FLEECA", false, 2, 'FLEECA BANK', `New message`);
		mp.game.ui.drawNotification(false, true);
	},
});

function closeCefATM(){
	if(cefATM){
		cefATM.destroy(); 
		cefATM=null;
	}
	mp.gui.cursor.visible=false;
	mp.gui.chat.activate(true);
	mp.gui.cursor.show(false,false);
	mp.gui.chat.show(true);
	mp.game.ui.displayRadar(true);
}
exports.closeCefATM=closeCefATM;