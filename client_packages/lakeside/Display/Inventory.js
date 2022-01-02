// Project Lakeside V
// made by DorteY
// lake-gaming.com

const NativeUI = require('./lakeside/Display/NativeUI.js');
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const BadgeStyle = NativeUI.BadgeStyle;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;

mp.keys.bind(0x49,true,function(){
	if(mp.players.local.getVariable("loggedIn")==1){
		if(cefState==true)return;
		if(mp.gui.cursor.visible)return;
		
		cefState=true;
		mp.gui.chat.show(false);
		mp.gui.chat.activate(false);
		const Inv=new Menu("Inventar","",new Point(50,50));
		items={
			"Schokoladenriegel":{name:"Schokoladenriegel",desc:"Gibt dir Hunger & Leben",amount:mp.players.local.getVariable("Schokoladenriegel")},
			"Snickers":{name:"Snickers",desc:"Gibt dir Hunger & Leben",amount:mp.players.local.getVariable("Snickers")},
			"Sandwich":{name:"Sandwich",desc:"Gibt dir Hunger & Leben",amount:mp.players.local.getVariable("Sandwich")},
			"Wasser":{name:"Wasser",desc:"Gibt dir Durst & Leben",amount:mp.players.local.getVariable("Wasser")},
			"Schokoladendrink":{name:"Schokoladendrink",desc:"Gibt dir Durst & Leben",amount:mp.players.local.getVariable("Schokoladendrink")},
			"Trauben":{name:"Trauben",desc:"Wird zum verarbeiten von Traubensaft verwendet.",amount:mp.players.local.getVariable("Trauben")},
			"Traubensaft":{name:"Traubensaft",desc:"Kann am Exporthändler verkauft werden.",amount:mp.players.local.getVariable("Traubensaft")},
			"Verbandskasten":{name:"Verbandskasten",desc:"Füllt deine Leben wieder auf.",amount:mp.players.local.getVariable("Verbandskasten")},
			"Benzinkanister":{name:"Benzinkanister",desc:"Füllt deinen Wagen auf.",amount:mp.players.local.getVariable("Benzinkanister")},
			"Reperaturkasten":{name:"Reperaturkasten",desc:"Repariert deinen Wagen.",amount:mp.players.local.getVariable("Reperaturkasten")}
		}
		for(var key in items){
			item=items[key];
			fitem=new NativeUI.UIMenuItem(item.name,item.desc);
			fitem.SetRightLabel("x"+item.amount);
			if(mp.players.local.getVariable(item.name)>=1){
				Inv.AddItem(fitem);
			}
		}
		Inv.AddItem(new UIMenuItem("~r~Schließen","Fenster Schließen"));
		
		
		Inv.ItemSelect.on((item,index)=>{
			for(var key in items){
				if(item.Text!=key)continue;
				mp.events.callRemote("Use->Item",item.Text);
			}
		});
		Inv.ItemSelect.on((item,index)=>{
			if(item.Text=="~r~Schließen"){
				Inv.Close();
			}
		});
		Inv.MenuClose.on(()=>{
			cefState=false;
			mp.gui.chat.show(true);
			mp.gui.chat.activate(true);
		});
	}
});