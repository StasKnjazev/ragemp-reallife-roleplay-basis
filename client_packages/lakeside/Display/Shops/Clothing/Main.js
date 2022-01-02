// Project Lakeside V
// made by DorteY
// lake-gaming.com

const NativeUI = require("./lakeside/Display/NativeUI.js");
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

const ScreenRes=mp.game.graphics.getScreenResolution(0,0);
const MenuPoint=new Point(ScreenRes.x +150,50);

mp.events.add("Open->Shop->Clothing->UI",()=>{
	if(mp.players.local.getVariable("loggedIn")==1){
		if(cefState==false){
			cefState=true;
			mp.players.local.freezePosition(true);
			mp.gui.chat.show(false);
			mp.gui.chat.activate(false);
			const ClothingMain=new Menu("Kleidungsgeschäfft","",MenuPoint,"commonmenu","interaction_bgd");
			
			
			ClothingMain.MenuClose.on(()=>{
				cefState=false;
				mp.gui.chat.show(true);
				mp.gui.chat.activate(true);
				mp.players.local.freezePosition(false);
			});
		}
	}
});