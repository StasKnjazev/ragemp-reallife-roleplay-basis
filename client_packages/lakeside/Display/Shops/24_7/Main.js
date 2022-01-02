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

mp.events.add('Open->Shop->24_7',()=>{ 
	if(mp.players.local.getVariable("loggedIn")==1){
		if(cefState==true)return;
		
		cefState=true;
		mp.gui.chat.show(false);
		mp.gui.chat.activate(false);
		mp.players.local.freezePosition(true);
		const NormalShop=new Menu("24/7 Shop","",new Point(50,50));
		items={
			"Schokoladenriegel":{name:"Schokoladenriegel",desc:"Gibt dir Hunger & Leben",price:7},
			"Snickers":{name:"Snickers",desc:"Gibt dir Hunger & Leben",price:7},
			"Sandwich":{name:"Sandwich",desc:"Gibt dir Hunger & Leben",price:12},
			"Wasser":{name:"Wasser",desc:"Gibt dir Durst & Leben",price:4},
			"Schokoladendrink":{name:"Schokoladendrink",desc:"Gibt dir Durst & Leben",price:11},
			"Benzinkanister":{name:"Benzinkanister",desc:"Füllt deinen Wagen wieder auf.",price:54},
			"Reperaturkasten":{name:"Reperaturkasten",desc:"Repariert deinen Wagen.",price:250}
		}
		for(var key in items){
			//if(mp.players.local.getVariable(key)>=1){
				item=items[key];
				fitem=new NativeUI.UIMenuItem(item.name,item.desc);
				fitem.SetRightLabel("$"+item.price);
				NormalShop.AddItem(fitem);
			//}
		}
		NormalShop.ItemSelect.on((item,index)=>{
			for(var key in items){
				if(item.Text!=key)continue;
				mp.events.callRemote("Buy->Item",item.Text);
			}
		});
		NormalShop.MenuClose.on(()=>{
			mp.gui.chat.show(true);
			mp.gui.chat.activate(true);
			cefState=false;
			mp.players.local.freezePosition(false);
		});
	}
});