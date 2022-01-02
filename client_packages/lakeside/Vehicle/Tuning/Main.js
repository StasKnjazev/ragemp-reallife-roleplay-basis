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

mp.events.add("Open->Tungshop->UI",()=>{
	if(mp.players.local.getVariable("loggedIn")==1){
		if(cefState==false){
			cefState=true;
			mp.players.local.vehicle.freezePosition(true);
			mp.gui.chat.show(false);
			mp.gui.chat.activate(false);
			const TuningMain=new Menu("","",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
			
			TuningMain.AddItem(primarycolor=new UIMenuItem("Primärfarbe","Auswahl an Primärfarben"));
			TuningMain.AddItem(secondarycolor=new UIMenuItem("Sekundärfarbe","Auswahl an Sekundärfarben"));
			TuningMain.AddItem(lights=new UIMenuItem("Lichter","Auswahl an Lichter"));
			TuningMain.AddItem(wheels=new UIMenuItem("Räder","Auswahl an Räder"));
			//TuningMain.AddItem(windows=new UIMenuItem("Räder","Auswahl an Fensterscheiben"));
			TuningMain.AddItem(spoiler=new UIMenuItem("Spoiler","Auswahl an Spoiler"));
			TuningMain.AddItem(exhaust=new UIMenuItem("Auspuff","Auswahl an Auspuff"));
			TuningMain.AddItem(engine=new UIMenuItem("Motor","Auswahl an Motoren"));
			TuningMain.AddItem(transmission=new UIMenuItem("Getriebe","Auswahl an Getrieben"));
			TuningMain.AddItem(suspension=new UIMenuItem("Federung","Auswahl an Federungen"));
			TuningMain.AddItem(breaks=new UIMenuItem("Bremsen","Auswahl an Bremsen"));
			TuningMain.AddItem(turbo=new UIMenuItem("Turbolader","Auswahl an Turbolader"));
			
			TuningMain.BindMenuToItem(TuningPcolor,primarycolor);
			TuningMain.BindMenuToItem(TuningCcolor,secondarycolor);
			TuningMain.BindMenuToItem(TuningLights,lights);
			TuningMain.BindMenuToItem(TuningWheels,wheels);
			//TuningMain.BindMenuToItem(TuningWindows,windows);
			TuningMain.BindMenuToItem(TuningSpoiler,spoiler);
			TuningMain.BindMenuToItem(TuningExhaust,exhaust);
			TuningMain.BindMenuToItem(TuningEngine,engine);
			TuningMain.BindMenuToItem(TuningTransmission,transmission);
			TuningMain.BindMenuToItem(TuningLowering,suspension);
			TuningMain.BindMenuToItem(TuningBreaks,breaks);
			TuningMain.BindMenuToItem(TuningTurbo,turbo);
			
			TuningMain.MenuClose.on(()=>{
				cefState=false;
				mp.gui.chat.show(true);
				mp.gui.chat.activate(true);
				mp.players.local.vehicle.freezePosition(false);
			});
		}
	}
});

const TuningPcolor=new Menu("","Primärfarben",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningPcolor.AddItem(new UIMenuItem("Schwarz","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Graphit","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Schwarzstahl","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Dunkelsilber","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Silber","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Blausilber","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Graustahl","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Schattensilber","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Steinsilber","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Mitternachtssilber","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Gunmetal","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Anthrazit","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Rot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Torinorot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Formularot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Blazerot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Anmutigesrot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Granatrot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Wüstenrot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Cabernet rot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Bonbon rot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Hellrot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Goldenes rot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Lavarot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Orange","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Orange 2","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Sunrise Orange","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Hellorange","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Dunkelgrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Grünstich","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Renngrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Meeresgrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Olivengrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Jägergrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Waldgrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Laubgrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Olivegrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Grün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Grün 2","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Blaugrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Limettengrün","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Dunkelgrün 2","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Mitternachtsblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Dunkelblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Sächsischblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Blau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Blau 2","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Marineblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Hafenblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Diamantblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Surferblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Nautischblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Hellblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Violettblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Spinnakerblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Ultrablau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Hellblau 2","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Meerschaumblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Blitzblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Mauiblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Polizei Blau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Epsilonblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Taxigelb","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Renngelb","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Vogelgelb","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Bronze","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Citrusgelb","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Champagnier","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Beige","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Elfenbein","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Schokobraun","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Goldbraun","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Hellbraun","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Strohbeige","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Moosbraun","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Bostonbraun","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Wüstenbraun","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Wüstenbräune","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Buchenholz","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Dunkles Buchenholz","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Schoko Orange","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Sandfarbend","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Sonnengebleicht","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Cremefarbend","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Honigbeige","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Weiß","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Frostweiß","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Grauweiß","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Reines Weiß","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Heißes Pink","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Lachsrosa","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Vermillion Pink","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Schwarzlila","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Schwarzblau","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Schwarzrot","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Lila","Kaufen für $~g~2500"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Schwarz", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Schwarz 2", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Silber", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Silber 2", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Gun Metal", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Schattensilber", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Rot", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Granatrot", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Grün", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Dunkelblau", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Mitternachtsblau", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Blau", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Hellblau", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Braun", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Mittelbraun", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Metallic Hellbraun", "Kaufen für $~g~4000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Schwarz", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Schwarz 2", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Grau", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Hellgrau", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Graphit", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Silbergrau", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Silber", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Blausilber", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Schattensilber", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Rot", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Dunkelrot", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Orange", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Gelb", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Blau", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Mitternachtsblau", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Grün", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Braun", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Weiß", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Lila", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Matt Dunkellila", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes rot", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Dunkelrot", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Grün", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Meeresgrün", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Dunkelblau", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Blau", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Hellblau", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Braun", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Strohbeige", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Orange", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Orange 2", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Taxigelb", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Weiß", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Abgenutztes Armeegrün", "Kaufen für $~g~6000"));
TuningPcolor.AddItem(new UIMenuItem("Gebürsteter Stahl", "Kaufen für $~g~1500"));
TuningPcolor.AddItem(new UIMenuItem("Gebürsteter Schwarzstahl", "Kaufen für $~g~1500"));
TuningPcolor.AddItem(new UIMenuItem("Gebürstetes Aluminium", "Kaufen für $~g~1500"));
TuningPcolor.AddItem(new UIMenuItem("Gebürstetes Gold", "Kaufen für $~g~29000"));
TuningPcolor.AddItem(new UIMenuItem("Legierung", "Kaufen für $~g~1500"));
TuningPcolor.AddItem(new UIMenuItem("Klassisches Gold", "Kaufen für $~g~35000"));
TuningPcolor.AddItem(new UIMenuItem("Pures Gold", "Kaufen für $~g~35000"));
TuningPcolor.AddItem(new UIMenuItem("Chrome", "Kaufen für $~g~12000"));
TuningPcolor.Visible=false;

const TuningCcolor=new Menu("","Sekundärfarben",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningCcolor.AddItem(new UIMenuItem("Schwarz","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Graphit","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Schwarzstahl","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Dunkelsilber","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Silber","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Blausilber","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Graustahl","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Schattensilber","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Steinsilber","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Mitternachtssilber","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Gunmetal","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Anthrazit","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Rot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Torinorot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Formularot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Blazerot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Anmutigesrot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Granatrot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Wüstenrot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Cabernet rot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Bonbon rot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Hellrot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Goldenes rot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Lavarot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Orange","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Orange 2","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Sunrise Orange","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Hellorange","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Dunkelgrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Grünstich","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Renngrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Meeresgrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Olivengrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Jägergrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Waldgrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Laubgrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Olivegrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Grün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Grün 2","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Blaugrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Limettengrün","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Dunkelgrün 2","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Mitternachtsblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Dunkelblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Sächsischblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Blau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Blau 2","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Marineblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Hafenblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Diamantblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Surferblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Nautischblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Hellblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Violettblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Spinnakerblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Ultrablau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Hellblau 2","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Meerschaumblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Blitzblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Mauiblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Polizei Blau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Epsilonblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Taxigelb","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Renngelb","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Vogelgelb","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Bronze","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Citrusgelb","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Champagnier","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Beige","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Elfenbein","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Schokobraun","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Goldbraun","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Hellbraun","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Strohbeige","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Moosbraun","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Bostonbraun","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Wüstenbraun","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Wüstenbräune","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Buchenholz","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Dunkles Buchenholz","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Schoko Orange","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Sandfarbend","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Sonnengebleicht","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Cremefarbend","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Honigbeige","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Weiß","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Frostweiß","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Grauweiß","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Reines Weiß","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Heißes Pink","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Lachsrosa","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Vermillion Pink","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Schwarzlila","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Schwarzblau","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Schwarzrot","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Lila","Kaufen für $~g~2500"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Schwarz", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Schwarz 2", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Silber", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Silber 2", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Gun Metal", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Schattensilber", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Rot", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Granatrot", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Grün", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Dunkelblau", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Mitternachtsblau", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Blau", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Hellblau", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Braun", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Mittelbraun", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Metallic Hellbraun", "Kaufen für $~g~4000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Schwarz", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Schwarz 2", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Grau", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Hellgrau", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Graphit", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Silbergrau", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Silber", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Blausilber", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Schattensilber", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Rot", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Dunkelrot", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Orange", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Gelb", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Blau", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Mitternachtsblau", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Grün", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Braun", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Weiß", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Lila", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Matt Dunkellila", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes rot", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Dunkelrot", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Grün", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Meeresgrün", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Dunkelblau", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Blau", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Hellblau", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Braun", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Strohbeige", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Orange", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Orange 2", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Taxigelb", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Weiß", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Abgenutztes Armeegrün", "Kaufen für $~g~6000"));
TuningCcolor.AddItem(new UIMenuItem("Gebürsteter Stahl", "Kaufen für $~g~1500"));
TuningCcolor.AddItem(new UIMenuItem("Gebürsteter Schwarzstahl", "Kaufen für $~g~1500"));
TuningCcolor.AddItem(new UIMenuItem("Gebürstetes Aluminium", "Kaufen für $~g~1500"));
TuningCcolor.AddItem(new UIMenuItem("Gebürstetes Gold", "Kaufen für $~g~29000"));
TuningCcolor.AddItem(new UIMenuItem("Legierung", "Kaufen für $~g~1500"));
TuningCcolor.AddItem(new UIMenuItem("Klassisches Gold", "Kaufen für $~g~35000"));
TuningCcolor.AddItem(new UIMenuItem("Pures Gold", "Kaufen für $~g~35000"));
TuningCcolor.AddItem(new UIMenuItem("Chrome", "Kaufen für $~g~12000"));
TuningCcolor.Visible=false;

const TuningLights=new Menu("","Lichter",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningLights.AddItem(new UIMenuItem("Standart Lichter","Kaufen für $~g~0"));
TuningLights.AddItem(new UIMenuItem("Xenon Lichter","Kaufen für $~g~6000"));
TuningLights.Visible=false;

const TuningSpoiler=new Menu("","Spoiler",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningSpoiler.AddItem(new UIMenuItem("Spoiler Standart","Kaufen für $~g~0"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 1","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 2","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 3","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 4","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 5","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 6","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 7","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 8","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 9","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 10","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 11","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 12","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 13","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 14","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 15","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 16","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 17","Kaufen für $~g~1000"));
TuningSpoiler.AddItem(new UIMenuItem("Spoiler 18","Kaufen für $~g~1000"));
TuningSpoiler.Visible=false;

const TuningExhaust=new Menu("","Auspuff",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningExhaust.AddItem(new UIMenuItem("Auspuff Standart","Kaufen für $~g~0"));
TuningExhaust.AddItem(new UIMenuItem("Auspuff 1","Kaufen für $~g~1000"));
TuningExhaust.AddItem(new UIMenuItem("Auspuff 2","Kaufen für $~g~1000"));
TuningExhaust.AddItem(new UIMenuItem("Auspuff 3","Kaufen für $~g~1000"));
TuningExhaust.AddItem(new UIMenuItem("Auspuff 4","Kaufen für $~g~1000"));
TuningExhaust.AddItem(new UIMenuItem("Auspuff 5","Kaufen für $~g~1000"));
TuningExhaust.AddItem(new UIMenuItem("Auspuff 6","Kaufen für $~g~1000"));
TuningExhaust.Visible=false;

const TuningWheels=new Menu("","Räder",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningWheels.AddItem(new UIMenuItem("Räder Standart","Kaufen für $~g~500"));
TuningWheels.AddItem(new UIMenuItem("Räder 1","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 2","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 3","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 4","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 5","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 6","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 7","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 8","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 9","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 10","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 11","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 12","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 13","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 14","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 15","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 16","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 17","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 18","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 19","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 20","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 21","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 22","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 23","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 24","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 25","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 26","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 27","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 28","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 29","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 30","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 31","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 32","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 33","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 34","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 35","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 36","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 37","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 38","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 39","Kaufen für $~g~1200"));
TuningWheels.AddItem(new UIMenuItem("Räder 40","Kaufen für $~g~1200"));
TuningWheels.Visible=false;

const TuningEngine=new Menu("","Motor",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningEngine.AddItem(new UIMenuItem("Motorstufe 1","Kaufen für $~g~25000"));
TuningEngine.AddItem(new UIMenuItem("Motorstufe 2","Kaufen für $~g~50000"));
TuningEngine.AddItem(new UIMenuItem("Motorstufe 3","Kaufen für $~g~75000"));
TuningEngine.AddItem(new UIMenuItem("Motorstufe 4","Kaufen für $~g~90000"));
TuningEngine.Visible=false;

const TuningLowering=new Menu("","Tieferlegerung",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningLowering.AddItem(new UIMenuItem("Federung 1","Kaufen für $~g~15000"));
TuningLowering.AddItem(new UIMenuItem("Federung 2","Kaufen für $~g~30000"));
TuningLowering.AddItem(new UIMenuItem("Federung 3","Kaufen für $~g~45000"));
TuningLowering.Visible=false;

const TuningBreaks=new Menu("","Bremsen",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningBreaks.AddItem(new UIMenuItem("Standart Bremsen","Kaufen für $~g~0"));
TuningBreaks.AddItem(new UIMenuItem("Straßen Bremsen","Kaufen für $~g~15000"));
TuningBreaks.AddItem(new UIMenuItem("Sport Bremsen","Kaufen für $~g~30000"));
TuningBreaks.AddItem(new UIMenuItem("Renn Bremsen","Kaufen für $~g~45000"));
TuningBreaks.Visible=false;

const TuningTurbo=new Menu("","Turbolader",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningTurbo.AddItem(new UIMenuItem("Turbolader ausbauen","Kaufen für $~g~0"));
TuningTurbo.AddItem(new UIMenuItem("Turbolader einbauen","Kaufen für $~g~50000"));
TuningTurbo.Visible=false;

const TuningTransmission=new Menu("","Getriebe",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
TuningTransmission.AddItem(new UIMenuItem("Getriebe ausbauen","Kaufen für $~g~0"));
TuningTransmission.AddItem(new UIMenuItem("Getriebe 1","Kaufen für $~g~10000"));
TuningTransmission.AddItem(new UIMenuItem("Getriebe 2","Kaufen für $~g~15000"));
TuningTransmission.AddItem(new UIMenuItem("Getriebe 3","Kaufen für $~g~20000"));
TuningTransmission.Visible=false;

//const TuningWindows=new Menu("","Fensterscheiben",MenuPoint,"shopui_title_supermod","shopui_title_supermod");
//TuningWindows.AddItem(new UIMenuItem("Fenster ausbauen","Kaufen für $~g~0"));
//TuningWindows.AddItem(new UIMenuItem("Helles Rauchglas","Kaufen für $~g~10000"));
//TuningWindows.AddItem(new UIMenuItem("Dunkles Rauchglas","Kaufen für $~g~15000"));
//TuningWindows.AddItem(new UIMenuItem("Limousine","Kaufen für $~g~20000"));
//TuningWindows.Visible=false;



TuningEngine.ItemSelect.on((item,index,value)=>{
	if(item.Text=='Motorstufe 1'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Engine",11,0,25000);
	}else if(item.Text=='Motorstufe 2'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Engine",11,1,50000);
	}else if(item.Text=='Motorstufe 3'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Engine",11,2,75000);
	}else if(item.Text=='Motorstufe 4'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Engine",11,3,90000);
	}
});
TuningLowering.ItemSelect.on((item,index,value)=>{
	if(item.Text=='Federung 1'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Lowering",15,0,15000);
	}else if(item.Text=='Federung 2'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Lowering",15,1,30000);
	}else if(item.Text=='Federung 3'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Lowering",15,2,45000);
	}
});
TuningBreaks.ItemSelect.on((item,index,value)=>{
	let vehicle=mp.players.local.vehicle;
	
	if(item.Text=='Bremse Standart'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Breaks",12,-1,500);
	}else if(item.Text=='Straßen Bremsen'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Breaks",12,0,15000);
	}else if(item.Text=='Sport Bremsen'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Breaks",12,1,30000);
	}else if(item.Text=='Renn Bremsen'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Breaks",12,2,45000);
	}
});
TuningTurbo.ItemSelect.on((item,index,value)=>{
	let vehicle=mp.players.local.vehicle;
	
	if(item.Text=='Turbolader ausbauen'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Turbo",18,-1,500);
	}else if(item.Text=='Turbolader einbauen'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Turbo",18,0,1200);
	}
});
TuningLights.ItemSelect.on((item,index,value)=>{
	let vehicle=mp.players.local.vehicle;
	
	if(item.Text=='Standart Lichter'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Lights",22,-1,500);
	}else if(item.Text=='Xenon Lichter'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Lights",22,0,6000);
	}
});

TuningSpoiler.ItemSelect.on((item,index,value)=>{
	if(item.Text=='Spoiler Standart'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,-1,500);
	}else if(item.Text=='Spoiler 1'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,0,1200);
	}else if(item.Text=='Spoiler 2'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,1,1200);
	}else if(item.Text=='Spoiler 3'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,2,1200);
	}else if(item.Text=='Spoiler 4'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,3,1200);
	}else if(item.Text=='Spoiler 5'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,4,1200);
	}else if(item.Text=='Spoiler 6'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,5,1200);
	}else if(item.Text=='Spoiler 7'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,6,1200);
	}else if(item.Text=='Spoiler 8'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,7,1200);
	}else if(item.Text=='Spoiler 9'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,8,1200);
	}else if(item.Text=='Spoiler 10'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,9,1200);
	}else if(item.Text=='Spoiler 11'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,10,1200);
	}else if(item.Text=='Spoiler 12'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,11,1200);
	}else if(item.Text=='Spoiler 13'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,12,1200);
	}else if(item.Text=='Spoiler 14'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,13,1200);
	}else if(item.Text=='Spoiler 15'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,14,1200);
	}else if(item.Text=='Spoiler 16'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,15,1200);
	}else if(item.Text=='Spoiler 17'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,16,1200);
	}else if(item.Text=='Spoiler 18'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Spoiler",0,17,1200);
	}
});
TuningSpoiler.IndexChange.on((item)=>{
	if(item==0){
		item=-1;
	}else if(item==1){
		item=0;
	}else if(item==2){
		item=1;
	}else if(item==3){
		item=2;
	}else if(item==4){
		item=3;
	}else if(item==5){
		item=4;
	}else if(item==6){
		item=5;
	}else if(item==7){
		item=6;
	}else if(item==8){
		item=7;
	}else if(item==9){
		item=8;
	}else if(item==10){
		item=9;
	}else if(item==11){
		item=10;
	}else if(item==12){
		item=11;
	}else if(item==13){
		item=12;
	}else if(item==14){
		item=13;
	}else if(item==15){
		item=14;
	}else if(item==16){
		item=15;
	}else if(item==17){
		item=16;
	}else if(item==18){
		item=17;
	}else if(item==19){
		item=18;
	}else if(item==20){
		item=19;
	}else if(item==21){
		item=20;
	}
	mp.players.local.vehicle.setMod(Number(0),parseInt(item));
});


TuningExhaust.ItemSelect.on((item,index,value)=>{
	if(item.Text=='Auspuff Standart'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Exhaust",4,-1,500);
	}else if(item.Text=='Auspuff 1'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Exhaust",4,0,1200);
	}else if(item.Text=='Auspuff 2'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Exhaust",4,1,1200);
	}else if(item.Text=='Auspuff 3'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Exhaust",4,2,1200);
	}else if(item.Text=='Auspuff 4'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Exhaust",4,3,1200);
	}else if(item.Text=='Auspuff 5'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Exhaust",4,4,1200);
	}else if(item.Text=='Auspuff 6'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Exhaust",4,5,1200);
	}
});
TuningExhaust.IndexChange.on((item)=>{
	if(item==0){
		item=-1;
	}else if(item==1){
		item=0;
	}else if(item==2){
		item=1;
	}else if(item==3){
		item=2;
	}else if(item==4){
		item=3;
	}else if(item==5){
		item=4;
	}else if(item==6){
		item=5;
	}else if(item==7){
		item=6;
	}
	mp.players.local.vehicle.setMod(Number(4),parseInt(item));
});

TuningTransmission.ItemSelect.on((item,index,value)=>{
	if(item.Text=='Getriebe ausbauen'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Transmission",13,-1,500);
	}else if(item.Text=='Getriebe 1'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Transmission",13,0,1200);
	}else if(item.Text=='Getriebe 2'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Transmission",13,1,1200);
	}else if(item.Text=='Getriebe 3'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Transmission",13,2,1200);
	}
});
TuningTransmission.IndexChange.on((item)=>{
	if(item==0){
		item=-1;
	}else if(item==1){
		item=0;
	}else if(item==2){
		item=1;
	}else if(item==3){
		item=2;
	}else if(item==4){
		item=3;
	}else if(item==5){
		item=4;
	}else if(item==6){
		item=5;
	}else if(item==7){
		item=6;
	}
});
TuningCcolor.MenuClose.on(()=>{
	let vehicle = mp.players.local.vehicle;
	vehicle.setMod(Number(13),parseInt(vehicle.getVariable("Veh->Data->Tuning->Transmission")));
});


//TuningWindows.IndexChange.on((item)=>{
//	if(item==0){
//		item=-1;
//	}else if(item==1){
//		item=0;
//	}else if(item==2){
//		item=1;
//	}else if(item==3){
//		item=2;
//	}
//});




TuningWheels.ItemSelect.on((item,index,value)=>{
	if(item.Text=='Räder Standart'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,-1,500);
	}else if(item.Text=='Räder 1'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,0,1200);
	}else if(item.Text=='Räder 2'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,1,1200);
	}else if(item.Text=='Räder 3'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,2,1200);
	}else if(item.Text=='Räder 4'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,3,1200);
	}else if(item.Text=='Räder 5'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,4,1200);
	}else if(item.Text=='Räder 6'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,5,1200);
	}else if(item.Text=='Räder 7'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,6,1200);
	}else if(item.Text=='Räder 8'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,7,1200);
	}else if(item.Text=='Räder 9'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,8,1200);
	}else if(item.Text=='Räder 10'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,9,1200);
	}else if(item.Text=='Räder 11'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,10,1200);
	}else if(item.Text=='Räder 12'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,11,1200);
	}else if(item.Text=='Räder 13'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,12,1200);
	}else if(item.Text=='Räder 14'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,13,1200);
	}else if(item.Text=='Räder 15'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,14,1200);
	}else if(item.Text=='Räder 16'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,15,1200);
	}else if(item.Text=='Räder 17'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,16,1200);
	}else if(item.Text=='Räder 18'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,17,1200);
	}else if(item.Text=='Räder 19'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,18,1200);
	}else if(item.Text=='Räder 20'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,19,1200);
	}else if(item.Text=='Räder 21'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,20,1200);
	}else if(item.Text=='Räder 22'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,21,1200);
	}else if(item.Text=='Räder 23'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,22,1200);
	}else if(item.Text=='Räder 24'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,23,1200);
	}else if(item.Text=='Räder 25'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,24,1200);
	}else if(item.Text=='Räder 26'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,25,1200);
	}else if(item.Text=='Räder 27'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,26,1200);
	}else if(item.Text=='Räder 28'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,27,1200);
	}else if(item.Text=='Räder 29'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,28,1200);
	}else if(item.Text=='Räder 30'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,29,1200);
	}else if(item.Text=='Räder 31'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,30,1200);
	}else if(item.Text=='Räder 32'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,31,1200);
	}else if(item.Text=='Räder 33'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,32,1200);
	}else if(item.Text=='Räder 34'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,33,1200);
	}else if(item.Text=='Räder 35'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,34,1200);
	}else if(item.Text=='Räder 36'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,35,1200);
	}else if(item.Text=='Räder 37'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,36,1200);
	}else if(item.Text=='Räder 38'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,37,1200);
	}else if(item.Text=='Räder 39'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,38,1200);
	}else if(item.Text=='Räder 40'){
		mp.events.callRemote("Buy->Vehicle->Tuning","Wheels",23,39,1200);
	}
});
TuningWheels.IndexChange.on((item)=>{
	if(item==0){
		item=-1;
	}else if(item==1){
		item=0;
	}else if(item==2){
		item=1;
	}else if(item==3){
		item=2;
	}else if(item==4){
		item=3;
	}else if(item==5){
		item=4;
	}else if(item==6){
		item=5;
	}else if(item==7){
		item=6;
	}else if(item==8){
		item=7;
	}else if(item==9){
		item=8;
	}else if(item==10){
		item=9;
	}else if(item==11){
		item=10;
	}else if(item==12){
		item=11;
	}else if(item==13){
		item=12;
	}else if(item==14){
		item=13;
	}else if(item==15){
		item=14;
	}else if(item==16){
		item=15;
	}else if(item==17){
		item=16;
	}else if(item==18){
		item=17;
	}else if(item==19){
		item=18;
	}else if(item==20){
		item=19;
	}else if(item==21){
		item=20;
	}else if(item==22){
		item=21;
	}else if(item==23){
		item=22;
	}else if(item==24){
		item=23;
	}else if(item==25){
		item=24;
	}else if(item==26){
		item=25;
	}else if(item==27){
		item=26;
	}else if(item==28){
		item=27;
	}else if(item==29){
		item=28;
	}else if(item==30){
		item=29;
	}else if(item==31){
		item=30;
	}else if(item==32){
		item=31;
	}else if(item==33){
		item=32;
	}else if(item==34){
		item=33;
	}else if(item==35){
		item=34;
	}else if(item==36){
		item=35;
	}else if(item==37){
		item=36;
	}else if(item==38){
		item=37;
	}else if(item==39){
		item=38;
	}else if(item==40){
		item=39;
	}else if(item==41){
		item=40;
	}
	mp.players.local.vehicle.setMod(Number(23),parseInt(item));
});




TuningPcolor.ItemSelect.on((item,index,value)=>{
    if (item.Text == 'Schwarz') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",0,2500);
    } else
    if (item.Text == 'Graphit') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",1,2500);
    } else
    if (item.Text == 'Schwarzstahl') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",2,2500);
    } else
    if (item.Text == 'Dunkelsilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",3,2500);
    } else
    if (item.Text == 'Silber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",4,2500);
    } else
    if (item.Text == 'Blausilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",5,2500);
    } else
    if (item.Text == 'Graustahl') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",6,2500);
    } else
    if (item.Text == 'Schattensilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",7,2500);
    } else
    if (item.Text == 'Steinsilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",8,2500);
    } else
    if (item.Text == 'Mitternachtssilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",9,2500);
    } else
    if (item.Text == 'Gunmetal') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",10,2500);
    } else
    if (item.Text == 'Anthrazit') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",11,2500);
    } else
    if (item.Text == 'Rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",27,2500);
    } else
    if (item.Text == 'Torinorot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",28,2500);
    } else
    if (item.Text == 'Formularot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",29,2500);
    } else
    if (item.Text == 'Blazerot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",30,2500);
    } else
    if (item.Text == 'Anmutigesrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",31,2500);
    } else
    if (item.Text == 'Granatrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",32,2500);
    } else
    if (item.Text == 'Wüstenrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",33,2500);
    } else
    if (item.Text == 'Cabernet rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",34,2500);
    } else
    if (item.Text == 'Bonbon rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",35,2500);
    } else
    if (item.Text == 'Hellrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",44,2500);
    } else
    if (item.Text == 'Goldenes rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",47,2500);
    } else
    if (item.Text == 'Lavarot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",150,2500);
    } else
    if (item.Text == 'Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",38,2500);
    } else
    if (item.Text == 'Orange 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",138,2500);
    } else
    if (item.Text == 'Sunrise Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",36,2500);
    } else
    if (item.Text == 'Hellorange') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",124,2500);
    } else
    if (item.Text == 'Dunkelgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",49,2500);
    } else
    if (item.Text == 'Grünstich') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",125,2500);
    } else
    if (item.Text == 'Renngrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",50,2500);
    } else
    if (item.Text == 'Meeresgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",51,2500);
    } else
    if (item.Text == 'Olivengrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",52,2500);
    } else
    if (item.Text == 'Jägergrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",144,2500);
    } else
    if (item.Text == 'Waldgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",151,2500);
    } else
    if (item.Text == 'Laubgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",155,2500);
    } else
    if (item.Text == 'Olivegrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",152,2500);
    } else
    if (item.Text == 'Grün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",53,2500);
    } else
    if (item.Text == 'Grün 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",139,2500);
    } else
    if (item.Text == 'Blaugrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",54,2500);
    } else
    if (item.Text == 'Limettengrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",55,2500);
    } else
    if (item.Text == 'Dunkelgrün 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",56,2500);
    } else
    if (item.Text == 'Mitternachtsblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",61,2500);
    } else
    if (item.Text == 'Dunkelblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",62,2500);
    } else
    if (item.Text == 'Sächsischblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",63,2500);
    } else
    if (item.Text == 'Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",64,2500);
    } else
    if (item.Text == 'Blau 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",140,2500);
    } else
    if (item.Text == 'Marineblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",65,2500);
    } else
    if (item.Text == 'Hafenblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",66,2500);
    } else
    if (item.Text == 'Diamantblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",67,2500);
    } else
    if (item.Text == 'Surferblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",68,2500);
    } else
    if (item.Text == 'Nautischblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",69,2500);
    } else
    if (item.Text == 'Hellblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",70,2500);
    } else
    if (item.Text == 'Violettblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",71,2500);
    } else
    if (item.Text == 'Spinnakerblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",72,2500);
    } else
    if (item.Text == 'Ultrablau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",73,2500);
    } else
    if (item.Text == 'Hellblau 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",74,2500);
    } else
    if (item.Text == 'Meerschaumblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",78,2500);
    } else
    if (item.Text == 'Blitzblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",79,2500);
    } else
    if (item.Text == 'Mauiblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",80,2500);
    } else
    if (item.Text == 'Polizei Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",127,2500);
    } else
    if (item.Text == 'Epsilonblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",157,2500);
    } else
    if (item.Text == 'Taxigelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",88,2500);
    } else
    if (item.Text == 'Renngelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",89,2500);
    } else
    if (item.Text == 'Vogelgelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",91,2500);
    } else
    if (item.Text == 'Bronze') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",90,2500);
    } else
    if (item.Text == 'Citrusgelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",92,2500);
    } else
    if (item.Text == 'Champagnier') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",93,2500);
    } else
    if (item.Text == 'Beige') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",94,2500);
    } else
    if (item.Text == 'Elfenbein') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",95,2500);
    } else
    if (item.Text == 'Schokobraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",96,2500);
    } else
    if (item.Text == 'Goldbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",97,2500);
    } else
    if (item.Text == 'Hellbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",98,2500);
    } else
    if (item.Text == 'Strohbeige') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",99,2500);
    } else
    if (item.Text == 'Moosbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",100,2500);
    } else
    if (item.Text == 'Bostonbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",101,2500);
    } else
    if (item.Text == 'Wüstenbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",153,2500);
    } else
    if (item.Text == 'Wüstenbräune') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",154,2500);
    } else
    if (item.Text == 'Buchenholz') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",102,2500);
    } else
    if (item.Text == 'Dunkles Buchenholz') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",103,2500);
    } else
    if (item.Text == 'Schoko Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",104,2500);
    } else
    if (item.Text == 'Sandfarbend') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",105,2500);
    } else
    if (item.Text == 'Sonnengebleicht') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",106,2500);
    } else
    if (item.Text == 'Cremefarbend') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",107,2500);
    } else
    if (item.Text == 'Honigbeige') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",113,2500);
    } else
    if (item.Text == 'Weiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",111,2500);
    } else
    if (item.Text == 'Frostweiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",112,2500);
    } else
    if (item.Text == 'Grauweiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",121,2500);
    } else
    if (item.Text == 'Reines Weiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",134,2500);
    }  else
    if (item.Text == 'Heißes Pink') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",135,2500);
    }  else
    if (item.Text == 'Lachsrosa') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",136,2500);
    }  else
    if (item.Text == 'Vermillion Pink') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",137,2500);
    }  else
    if (item.Text == 'Schwarzlila') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",142,2500);
    }  else
    if (item.Text == 'Schwarzblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",141,2500);
    }  else
    if (item.Text == 'Schwarzrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",143,2500);
    }  else
    if (item.Text == 'Lila') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",145,2500);
    }  else
    if (item.Text == 'Metallic Schwarz') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",15,4000);
    }  else
    if (item.Text == 'Metallic Schwarz 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",16,4000);
    }  else
    if (item.Text == 'Metallic Silber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",17,4000);
    }  else
    if (item.Text == 'Metallic Silber 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",18,4000);
    }  else
    if (item.Text == 'Metallic Gun Metal') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",19,4000);
    }  else
    if (item.Text == 'Metallic Schattensilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",20,4000);
    }  else
    if (item.Text == 'Metallic Rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",43,4000);
    }  else
    if (item.Text == 'Metallic Granatrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",45,4000);
    }  else
    if (item.Text == 'Metallic Grün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",57,4000);
    }  else
    if (item.Text == 'Metallic Dunkelblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",75,4000);
    }  else
    if (item.Text == 'Metallic Mitternachtsblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",76,4000);
    }  else
    if (item.Text == 'Metallic Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",77,4000);
    }  else
    if (item.Text == 'Metallic Hellblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",81,4000);
    }  else
    if (item.Text == 'Metallic Braun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",108,4000);
    }  else
    if (item.Text == 'Metallic Mittelbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",109,4000);
    }  else
    if (item.Text == 'Metallic Hellbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",110,4000);
    }
    if (item.Text == 'Matt Schwarz') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",12,6000);
    }  else
    if (item.Text == 'Matt Schwarz 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",21,6000);
    }  else
    if (item.Text == 'Matt Grau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",13,6000);
    }  else
    if (item.Text == 'Matt Hellgrau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",14,6000);
    }  else
    if (item.Text == 'Matt Graphit') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",22,6000);
    }  else
    if (item.Text == 'Matt Silbergrau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",23,6000);
    }  else
    if (item.Text == 'Matt Silber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",24,6000);
    }  else
    if (item.Text == 'Matt Blausilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",25,6000);
    }  else
    if (item.Text == 'Matt Schattensilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",26,6000);
    }  else
    if (item.Text == 'Matt Rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",39,6000);
    }  else
    if (item.Text == 'Matt Dunkelrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",40,6000);
    }  else
    if (item.Text == 'Matt Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",41,6000);
    }  else
    if (item.Text == 'Matt Gelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",42,6000);
    }  else
    if (item.Text == 'Matt Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",83,6000);
    }  else
    if (item.Text == 'Matt Mitternachtsblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",84,6000);
    }  else
    if (item.Text == 'Matt Grün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",128,6000);
    }  else
    if (item.Text == 'Matt Braun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",129,6000);
    }  else
    if (item.Text == 'Matt Weiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",131,6000);
    }  else
    if (item.Text == 'Matt Lila') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",148,6000);
    }  else
    if (item.Text == 'Matt Dunkellila') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",149,6000);
    }  else
    if (item.Text == 'Abgenutztes rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",46,6000);
    }  else
    if (item.Text == 'Abgenutztes Dunkelrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",48,6000);
    }  else
    if (item.Text == 'Abgenutztes Grün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",59,6000);
    }  else
    if (item.Text == 'Abgenutztes Meeresgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",60,6000);
    }  else
    if (item.Text == 'Abgenutztes Dunkelblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",85,6000);
    }  else
    if (item.Text == 'Abgenutztes Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",86,6000);
    }  else
    if (item.Text == 'Abgenutztes Hellblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",87,6000);
    }  else
    if (item.Text == 'Abgenutztes Braun') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",114,6000);
    }  else
    if (item.Text == 'Abgenutztes Strohbeige') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",116,6000);
    }  else
    if (item.Text == 'Abgenutztes Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",123,6000);
    }  else
    if (item.Text == 'Abgenutztes Orange 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",130,6000);
    }  else
    if (item.Text == 'Abgenutztes Taxigelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",126,6000);
    }  else
    if (item.Text == 'Abgenutztes Weiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",132,6000);
    }  else
    if (item.Text == 'Abgenutztes Armeegrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",133,6000);
    }  else
    if (item.Text == 'Gebürsteter Stahl') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",117,25000);
    }  else
    if (item.Text == 'Gebürsteter Schwarzstahl') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",118,25000);
    }  else
    if (item.Text == 'Gebürstetes Aluminium') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",119,25000);
    }  else
    if (item.Text == 'Gebürstetes Gold') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",159,35000);
    }  else
    if (item.Text == 'Legierung') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",156,10000);
    }  else
    if (item.Text == 'Klassisches Gold') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",37,35000);
    }  else
    if (item.Text == 'Pures Gold') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",158,42000);
    }  else
    if (item.Text == 'Chrome') {
        mp.events.callRemote("Buy->Vehicle->Color->Prim",120,35000);
    }
});

TuningCcolor.ItemSelect.on((item,index,value)=>{
    if (item.Text == 'Schwarz') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",0,2500);
    } else
    if (item.Text == 'Graphit') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",1,2500);
    } else
    if (item.Text == 'Schwarzstahl') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",2,2500);
    } else
    if (item.Text == 'Dunkelsilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",3,2500);
    } else
    if (item.Text == 'Silber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",4,2500);
    } else
    if (item.Text == 'Blausilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",5,2500);
    } else
    if (item.Text == 'Graustahl') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",6,2500);
    } else
    if (item.Text == 'Schattensilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",7,2500);
    } else
    if (item.Text == 'Steinsilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",8,2500);
    } else
    if (item.Text == 'Mitternachtssilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",9,2500);
    } else
    if (item.Text == 'Gunmetal') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",10,2500);
    } else
    if (item.Text == 'Anthrazit') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",11,2500);
    } else
    if (item.Text == 'Rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",27,2500);
    } else
    if (item.Text == 'Torinorot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",28,2500);
    } else
    if (item.Text == 'Formularot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",29,2500);
    } else
    if (item.Text == 'Blazerot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",30,2500);
    } else
    if (item.Text == 'Anmutigesrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",31,2500);
    } else
    if (item.Text == 'Granatrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",32,2500);
    } else
    if (item.Text == 'Wüstenrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",33,2500);
    } else
    if (item.Text == 'Cabernet rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",34,2500);
    } else
    if (item.Text == 'Bonbon rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",35,2500);
    } else
    if (item.Text == 'Hellrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",44,2500);
    } else
    if (item.Text == 'Goldenes rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",47,2500);
    } else
    if (item.Text == 'Lavarot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",150,2500);
    } else
    if (item.Text == 'Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",38,2500);
    } else
    if (item.Text == 'Orange 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",138,2500);
    } else
    if (item.Text == 'Sunrise Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",36,2500);
    } else
    if (item.Text == 'Hellorange') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",124,2500);
    } else
    if (item.Text == 'Dunkelgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",49,2500);
    } else
    if (item.Text == 'Grünstich') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",125,2500);
    } else
    if (item.Text == 'Renngrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",50,2500);
    } else
    if (item.Text == 'Meeresgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",51,2500);
    } else
    if (item.Text == 'Olivengrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",52,2500);
    } else
    if (item.Text == 'Jägergrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",144,2500);
    } else
    if (item.Text == 'Waldgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",151,2500);
    } else
    if (item.Text == 'Laubgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",155,2500);
    } else
    if (item.Text == 'Olivegrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",152,2500);
    } else
    if (item.Text == 'Grün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",53,2500);
    } else
    if (item.Text == 'Grün 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",139,2500);
    } else
    if (item.Text == 'Blaugrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",54,2500);
    } else
    if (item.Text == 'Limettengrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",55,2500);
    } else
    if (item.Text == 'Dunkelgrün 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",56,2500);
    } else
    if (item.Text == 'Mitternachtsblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",61,2500);
    } else
    if (item.Text == 'Dunkelblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",62,2500);
    } else
    if (item.Text == 'Sächsischblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",63,2500);
    } else
    if (item.Text == 'Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",64,2500);
    } else
    if (item.Text == 'Blau 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",140,2500);
    } else
    if (item.Text == 'Marineblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",65,2500);
    } else
    if (item.Text == 'Hafenblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",66,2500);
    } else
    if (item.Text == 'Diamantblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",67,2500);
    } else
    if (item.Text == 'Surferblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",68,2500);
    } else
    if (item.Text == 'Nautischblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",69,2500);
    } else
    if (item.Text == 'Hellblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",70,2500);
    } else
    if (item.Text == 'Violettblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",71,2500);
    } else
    if (item.Text == 'Spinnakerblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",72,2500);
    } else
    if (item.Text == 'Ultrablau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",73,2500);
    } else
    if (item.Text == 'Hellblau 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",74,2500);
    } else
    if (item.Text == 'Meerschaumblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",78,2500);
    } else
    if (item.Text == 'Blitzblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",79,2500);
    } else
    if (item.Text == 'Mauiblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",80,2500);
    } else
    if (item.Text == 'Polizei Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",127,2500);
    } else
    if (item.Text == 'Epsilonblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",157,2500);
    } else
    if (item.Text == 'Taxigelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",88,2500);
    } else
    if (item.Text == 'Renngelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",89,2500);
    } else
    if (item.Text == 'Vogelgelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",91,2500);
    } else
    if (item.Text == 'Bronze') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",90,2500);
    } else
    if (item.Text == 'Citrusgelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",92,2500);
    } else
    if (item.Text == 'Champagnier') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",93,2500);
    } else
    if (item.Text == 'Beige') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",94,2500);
    } else
    if (item.Text == 'Elfenbein') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",95,2500);
    } else
    if (item.Text == 'Schokobraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",96,2500);
    } else
    if (item.Text == 'Goldbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",97,2500);
    } else
    if (item.Text == 'Hellbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",98,2500);
    } else
    if (item.Text == 'Strohbeige') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",99,2500);
    } else
    if (item.Text == 'Moosbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",100,2500);
    } else
    if (item.Text == 'Bostonbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",101,2500);
    } else
    if (item.Text == 'Wüstenbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",153,2500);
    } else
    if (item.Text == 'Wüstenbräune') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",154,2500);
    } else
    if (item.Text == 'Buchenholz') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",102,2500);
    } else
    if (item.Text == 'Dunkles Buchenholz') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",103,2500);
    } else
    if (item.Text == 'Schoko Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",104,2500);
    } else
    if (item.Text == 'Sandfarbend') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",105,2500);
    } else
    if (item.Text == 'Sonnengebleicht') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",106,2500);
    } else
    if (item.Text == 'Cremefarbend') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",107,2500);
    } else
    if (item.Text == 'Honigbeige') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",113,2500);
    } else
    if (item.Text == 'Weiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",111,2500);
    } else
    if (item.Text == 'Frostweiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",112,2500);
    } else
    if (item.Text == 'Grauweiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",121,2500);
    } else
    if (item.Text == 'Reines Weiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",134,2500);
    }  else
    if (item.Text == 'Heißes Pink') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",135,2500);
    }  else
    if (item.Text == 'Lachsrosa') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",136,2500);
    }  else
    if (item.Text == 'Vermillion Pink') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",137,2500);
    }  else
    if (item.Text == 'Schwarzlila') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",142,2500);
    }  else
    if (item.Text == 'Schwarzblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",141,2500);
    }  else
    if (item.Text == 'Schwarzrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",143,2500);
    }  else
    if (item.Text == 'Lila') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",145,2500);
    }  else
    if (item.Text == 'Metallic Schwarz') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",15,4000);
    }  else
    if (item.Text == 'Metallic Schwarz 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",16,4000);
    }  else
    if (item.Text == 'Metallic Silber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",17,4000);
    }  else
    if (item.Text == 'Metallic Silber 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",18,4000);
    }  else
    if (item.Text == 'Metallic Gun Metal') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",19,4000);
    }  else
    if (item.Text == 'Metallic Schattensilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",20,4000);
    }  else
    if (item.Text == 'Metallic Rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",43,4000);
    }  else
    if (item.Text == 'Metallic Granatrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",45,4000);
    }  else
    if (item.Text == 'Metallic Grün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",57,4000);
    }  else
    if (item.Text == 'Metallic Dunkelblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",75,4000);
    }  else
    if (item.Text == 'Metallic Mitternachtsblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",76,4000);
    }  else
    if (item.Text == 'Metallic Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",77,4000);
    }  else
    if (item.Text == 'Metallic Hellblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",81,4000);
    }  else
    if (item.Text == 'Metallic Braun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",108,4000);
    }  else
    if (item.Text == 'Metallic Mittelbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",109,4000);
    }  else
    if (item.Text == 'Metallic Hellbraun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",110,4000);
    }
    if (item.Text == 'Matt Schwarz') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",12,6000);
    }  else
    if (item.Text == 'Matt Schwarz 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",21,6000);
    }  else
    if (item.Text == 'Matt Grau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",13,6000);
    }  else
    if (item.Text == 'Matt Hellgrau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",14,6000);
    }  else
    if (item.Text == 'Matt Graphit') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",22,6000);
    }  else
    if (item.Text == 'Matt Silbergrau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",23,6000);
    }  else
    if (item.Text == 'Matt Silber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",24,6000);
    }  else
    if (item.Text == 'Matt Blausilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",25,6000);
    }  else
    if (item.Text == 'Matt Schattensilber') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",26,6000);
    }  else
    if (item.Text == 'Matt Rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",39,6000);
    }  else
    if (item.Text == 'Matt Dunkelrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",40,6000);
    }  else
    if (item.Text == 'Matt Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",41,6000);
    }  else
    if (item.Text == 'Matt Gelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",42,6000);
    }  else
    if (item.Text == 'Matt Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",83,6000);
    }  else
    if (item.Text == 'Matt Mitternachtsblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",84,6000);
    }  else
    if (item.Text == 'Matt Grün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",128,6000);
    }  else
    if (item.Text == 'Matt Braun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",129,6000);
    }  else
    if (item.Text == 'Matt Weiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",131,6000);
    }  else
    if (item.Text == 'Matt Lila') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",148,6000);
    }  else
    if (item.Text == 'Matt Dunkellila') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",149,6000);
    }  else
    if (item.Text == 'Abgenutztes rot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",46,6000);
    }  else
    if (item.Text == 'Abgenutztes Dunkelrot') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",48,6000);
    }  else
    if (item.Text == 'Abgenutztes Grün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",59,6000);
    }  else
    if (item.Text == 'Abgenutztes Meeresgrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",60,6000);
    }  else
    if (item.Text == 'Abgenutztes Dunkelblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",85,6000);
    }  else
    if (item.Text == 'Abgenutztes Blau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",86,6000);
    }  else
    if (item.Text == 'Abgenutztes Hellblau') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",87,6000);
    }  else
    if (item.Text == 'Abgenutztes Braun') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",114,6000);
    }  else
    if (item.Text == 'Abgenutztes Strohbeige') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",116,6000);
    }  else
    if (item.Text == 'Abgenutztes Orange') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",123,6000);
    }  else
    if (item.Text == 'Abgenutztes Orange 2') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",130,6000);
    }  else
    if (item.Text == 'Abgenutztes Taxigelb') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",126,6000);
    }  else
    if (item.Text == 'Abgenutztes Weiß') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",132,6000);
    }  else
    if (item.Text == 'Abgenutztes Armeegrün') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",133,6000);
    }  else
    if (item.Text == 'Gebürsteter Stahl') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",117,25000);
    }  else
    if (item.Text == 'Gebürsteter Schwarzstahl') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",118,25000);
    }  else
    if (item.Text == 'Gebürstetes Aluminium') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",119,25000);
    }  else
    if (item.Text == 'Gebürstetes Gold') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",159,35000);
    }  else
    if (item.Text == 'Legierung') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",156,10000);
    }  else
    if (item.Text == 'Klassisches Gold') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",37,35000);
    }  else
    if (item.Text == 'Pures Gold') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",158,42000);
    }  else
    if (item.Text == 'Chrome') {
        mp.events.callRemote("Buy->Vehicle->Color->Sec",120,35000);
    }
});





TuningPcolor.MenuClose.on(()=>{
    TuningPcolor.RefreshIndex();
});
TuningCcolor.MenuClose.on(()=>{
    TuningCcolor.RefreshIndex();
});
TuningEngine.MenuClose.on(()=>{
    TuningEngine.RefreshIndex();
});
TuningBreaks.MenuClose.on(()=>{
    TuningBreaks.RefreshIndex();
});
TuningLights.MenuClose.on(()=>{
    TuningLights.RefreshIndex();
});
TuningWheels.MenuClose.on(()=>{
    TuningWheels.RefreshIndex();
	let vehicle = mp.players.local.vehicle;
	mp.players.local.vehicle.setMod(Number(23),parseInt(vehicle.getVariable("Veh->Data->Tuning->Wheels")));
});
TuningSpoiler.MenuClose.on(()=>{
    TuningSpoiler.RefreshIndex();
	let vehicle = mp.players.local.vehicle;
	mp.players.local.vehicle.setMod(Number(0),parseInt(vehicle.getVariable("Veh->Data->Tuning->Spoiler")));
});
TuningExhaust.MenuClose.on(()=>{
    TuningExhaust.RefreshIndex();
	let vehicle = mp.players.local.vehicle;
	mp.players.local.vehicle.setMod(Number(4),parseInt(vehicle.getVariable("Veh->Data->Tuning->Exhaust")));
});


TuningPcolor.IndexChange.on((item)=>{
	if(item==8){
		item=8;
	}else if(item==9){
		item=9;
	}else if(item==10){
		item=10;
	}else if(item==11){
		item=28;
	}else if(item==12){
		item=27;
	}else if(item==13){
		item=28;
	}else if(item==14){
		item=29;
	}else if(item==15){
		item=30;
	}else if(item==16){
		item=31;
	}else if(item==17){
		item=32;
	}else if(item==18){
		item=33;
	}else if(item==19){
		item=34;
	}else if(item==20){
		item=35;
	}else if(item==21){
		item=44;
	}else if(item==22){
		item=47;
	}else if(item==23){
		item=150;
	}else if(item==24){
		item=38;
	}else if(item==25){
		item=138;
	}else if(item==26){
		item=36;
	}else if(item==27){
		item=124;
	}else if(item==28){
		item=49;
	}else if(item==29){
		item=125;
	}else if(item==30){
		item=50;
	}else if(item==31){
		item=51;
	}else if(item==32){
		item=52;
	}else if(item==33){
		item=144;
	}else if(item==34){
		item=151;
	}else if(item==35){
		item=155;
	}else if(item==36){
		item=152;
	}else if(item==37){
		item=53;
	}else if(item==38){
		item=139;
	}else if(item==39){
		item=54;
	}else if(item==40){
		item=55;
	}else if(item==41){
		item=56;
	}else if(item==42){
		item=61;
	}else if(item==43){
		item=62;
	}else if(item==44){
		item=63;
	}else if(item==45){
		item=64;
	}else if(item==46){
		item=140;
	}else if(item==47){
		item=65;
	}else if(item==48){
		item=66;
	}else if(item==49){
		item=67;
	}else if(item==50){
		item=68;
	}else if(item==51){
		item=69;
	}else if(item==52){
		item=70;
	}else if(item==53){
		item=71;
	}else if(item==54){
		item=72;
	}else if(item==55){
		item=73;
	}else if(item==56){
		item=74;
	}else if(item==57){
		item=78;
	}else if(item==58){
		item=79;
	}else if(item==59){
		item=80;
	}else if(item==60){
		item=127;
	}else if(item==61){
		item=157;
	}else if(item==62){
		item=88;
	}else if(item==63){
		item=89;
	}else if(item==64){
		item=91;
	}else if(item==65){
		item=90;
	}else if(item==66){
		item=92;
	}else if(item==67){
		item=93;
	}else if(item==68){
		item=94;
	}else if(item==69){
		item=95;
	}else if(item==70){
		item=96;
	}else if(item==71){
		item=97;
	}else if(item==72){
		item=98;
	}else if(item==73){
		item=99;
	}else if(item==74){
		item=100;
	}else if(item==75){
		item=101;
	}else if(item==76){
		item=153;
	}else if(item==77){
		item=154;
	}else if(item==78){
		item=102;
	}else if(item==79){
		item=103;
	}else if(item==80){
		item=104;
	}else if(item==81){
		item=105;
	}else if(item==82){
		item=106;
	}else if(item==83){
		item=107;
	}else if(item==84){
		item=113;
	}else if(item==85){
		item=111;
	}else if(item==86){
		item=112;
	}else if(item==87){
		item=121;
	}else if(item==88){
		item=134;
	}else if(item==89){
		item=135;
	}else if(item==90){
		item=136;
	}else if(item==91){
		item=137;
	}else if(item==92){
		item=142;
	}else if(item==93){
		item=141;
	}else if(item==94){
		item=143;
	}else if(item==95){
		item=145;
	}else if(item==96){
		item=15;
	}else if(item==97){
		item=16;
	}else if(item==98){
		item=17;
	}else if(item==99){
		item=18;
	}else if(item==100){
		item=19;
	}else if(item==101){
		item=20;
	}else if(item==102){
		item=43;
	}else if(item==103){
		item=45;
	}else if(item==104){
		item=57;
	}else if(item==105){
		item=75;
	}else if(item==106){
		item=76;
	}else if(item==107){
		item=77;
	}else if(item==108){
		item=81;
	}else if(item==109){
		item=108;
	}else if(item==110){
		item=109;
	}else if(item==111){
		item=110;
	}else if(item==112){
		item=12;
	}else if(item==113){
		item=21;
	}else if(item==114){
		item=13;
	}else if(item==115){
		item=14;
	}else if(item==116){
		item=22;
	}else if(item==117){
		item=23;
	}else if(item==118){
		item=24;
	}else if(item==119){
		item=25;
	}else if(item==120){
		item=26;
	}else if(item==121){
		item=39;
	}else if(item==122){
		item=40;
	}else if(item==123){
		item=41;
	}else if(item==124){
		item=42;
	}else if(item==125){
		item=81;
	}else if(item==126){
		item=84;
	}else if(item==127){
		item=128;
	}else if(item==128){
		item=129;
	}else if(item==129){
		item=131;
	}else if(item==130){
		item=148;
	}else if(item==131){
		item=149;
	}else if(item==132){
		item=46;
	}else if(item==133){
		item=48;
	}else if(item==134){
		item=59;
	}else if(item==135){
		item=60;
	}else if(item==136){
		item=85;
	}else if(item==137){
		item=86;
	}else if(item==138){
		item=87;
	}else if(item==139){
		item=114;
	}else if(item==140){
		item=116;
	}else if(item==141){
		item=123;
	}else if(item==142){
		item=130;
	}else if(item==143){
		item=126;
	}else if(item==144){
		item=132;
	}else if(item==145){
		item=133;
	}else if(item==146){
		item=117;
	}else if(item==147){
		item=118;
	}else if(item==148){
		item=119;
	}else if(item==149){
		item=159;
	}else if(item==150){
		item=156;
	}else if(item==151){
		item=37;
	}else if(item==152){
		item=158;
	}else if(item==153){
		item=120;
	}
	let vehicle = mp.players.local.vehicle;
	vehicle.setColours(Number(item),Number(vehicle.getVariable("Veh->Data->Tuning->Color->Sec")));
});
TuningPcolor.MenuClose.on(()=>{
	let vehicle = mp.players.local.vehicle;
	vehicle.setColours(Number(vehicle.getVariable("Veh->Data->Tuning->Color->Prim")),Number(vehicle.getVariable("Veh->Data->Tuning->Color->Sec")));
});





TuningCcolor.IndexChange.on((item)=>{
	if(item==8){
		item=8;
	}else if(item==9){
		item=9;
	}else if(item==10){
		item=10;
	}else if(item==11){
		item=28;
	}else if(item==12){
		item=27;
	}else if(item==13){
		item=28;
	}else if(item==14){
		item=29;
	}else if(item==15){
		item=30;
	}else if(item==16){
		item=31;
	}else if(item==17){
		item=32;
	}else if(item==18){
		item=33;
	}else if(item==19){
		item=34;
	}else if(item==20){
		item=35;
	}else if(item==21){
		item=44;
	}else if(item==22){
		item=47;
	}else if(item==23){
		item=150;
	}else if(item==24){
		item=38;
	}else if(item==25){
		item=138;
	}else if(item==26){
		item=36;
	}else if(item==27){
		item=124;
	}else if(item==28){
		item=49;
	}else if(item==29){
		item=125;
	}else if(item==30){
		item=50;
	}else if(item==31){
		item=51;
	}else if(item==32){
		item=52;
	}else if(item==33){
		item=144;
	}else if(item==34){
		item=151;
	}else if(item==35){
		item=155;
	}else if(item==36){
		item=152;
	}else if(item==37){
		item=53;
	}else if(item==38){
		item=139;
	}else if(item==39){
		item=54;
	}else if(item==40){
		item=55;
	}else if(item==41){
		item=56;
	}else if(item==42){
		item=61;
	}else if(item==43){
		item=62;
	}else if(item==44){
		item=63;
	}else if(item==45){
		item=64;
	}else if(item==46){
		item=140;
	}else if(item==47){
		item=65;
	}else if(item==48){
		item=66;
	}else if(item==49){
		item=67;
	}else if(item==50){
		item=68;
	}else if(item==51){
		item=69;
	}else if(item==52){
		item=70;
	}else if(item==53){
		item=71;
	}else if(item==54){
		item=72;
	}else if(item==55){
		item=73;
	}else if(item==56){
		item=74;
	}else if(item==57){
		item=78;
	}else if(item==58){
		item=79;
	}else if(item==59){
		item=80;
	}else if(item==60){
		item=127;
	}else if(item==61){
		item=157;
	}else if(item==62){
		item=88;
	}else if(item==63){
		item=89;
	}else if(item==64){
		item=91;
	}else if(item==65){
		item=90;
	}else if(item==66){
		item=92;
	}else if(item==67){
		item=93;
	}else if(item==68){
		item=94;
	}else if(item==69){
		item=95;
	}else if(item==70){
		item=96;
	}else if(item==71){
		item=97;
	}else if(item==72){
		item=98;
	}else if(item==73){
		item=99;
	}else if(item==74){
		item=100;
	}else if(item==75){
		item=101;
	}else if(item==76){
		item=153;
	}else if(item==77){
		item=154;
	}else if(item==78){
		item=102;
	}else if(item==79){
		item=103;
	}else if(item==80){
		item=104;
	}else if(item==81){
		item=105;
	}else if(item==82){
		item=106;
	}else if(item==83){
		item=107;
	}else if(item==84){
		item=113;
	}else if(item==85){
		item=111;
	}else if(item==86){
		item=112;
	}else if(item==87){
		item=121;
	}else if(item==88){
		item=134;
	}else if(item==89){
		item=135;
	}else if(item==90){
		item=136;
	}else if(item==91){
		item=137;
	}else if(item==92){
		item=142;
	}else if(item==93){
		item=141;
	}else if(item==94){
		item=143;
	}else if(item==95){
		item=145;
	}else if(item==96){
		item=15;
	}else if(item==97){
		item=16;
	}else if(item==98){
		item=17;
	}else if(item==99){
		item=18;
	}else if(item==100){
		item=19;
	}else if(item==101){
		item=20;
	}else if(item==102){
		item=43;
	}else if(item==103){
		item=45;
	}else if(item==104){
		item=57;
	}else if(item==105){
		item=75;
	}else if(item==106){
		item=76;
	}else if(item==107){
		item=77;
	}else if(item==108){
		item=81;
	}else if(item==109){
		item=108;
	}else if(item==110){
		item=109;
	}else if(item==111){
		item=110;
	}else if(item==112){
		item=12;
	}else if(item==113){
		item=21;
	}else if(item==114){
		item=13;
	}else if(item==115){
		item=14;
	}else if(item==116){
		item=22;
	}else if(item==117){
		item=23;
	}else if(item==118){
		item=24;
	}else if(item==119){
		item=25;
	}else if(item==120){
		item=26;
	}else if(item==121){
		item=39;
	}else if(item==122){
		item=40;
	}else if(item==123){
		item=41;
	}else if(item==124){
		item=42;
	}else if(item==125){
		item=81;
	}else if(item==126){
		item=84;
	}else if(item==127){
		item=128;
	}else if(item==128){
		item=129;
	}else if(item==129){
		item=131;
	}else if(item==130){
		item=148;
	}else if(item==131){
		item=149;
	}else if(item==132){
		item=46;
	}else if(item==133){
		item=48;
	}else if(item==134){
		item=59;
	}else if(item==135){
		item=60;
	}else if(item==136){
		item=85;
	}else if(item==137){
		item=86;
	}else if(item==138){
		item=87;
	}else if(item==139){
		item=114;
	}else if(item==140){
		item=116;
	}else if(item==141){
		item=123;
	}else if(item==142){
		item=130;
	}else if(item==143){
		item=126;
	}else if(item==144){
		item=132;
	}else if(item==145){
		item=133;
	}else if(item==146){
		item=117;
	}else if(item==147){
		item=118;
	}else if(item==148){
		item=119;
	}else if(item==149){
		item=159;
	}else if(item==150){
		item=156;
	}else if(item==151){
		item=37;
	}else if(item==152){
		item=158;
	}else if(item==153){
		item=120;
	}
	let vehicle = mp.players.local.vehicle;
	vehicle.setColours(Number(vehicle.getVariable("Veh->Data->Tuning->Color->Prim")),Number(item));
});
TuningCcolor.MenuClose.on(()=>{
	let vehicle = mp.players.local.vehicle;
	vehicle.setColours(Number(vehicle.getVariable("Veh->Data->Tuning->Color->Prim")),Number(vehicle.getVariable("Veh->Data->Tuning->Color->Sec")));
});