// Project Lakeside V
// made by DorteY
// lake-gaming.com

mp.events.add({
	"Call->Custom->Event":(eventName,id,price)=>mp.events.callRemote(eventName,id,price),
	"Call->Custom->Event->Timeout":(eventName,timeout)=>{
		setTimeout(()=>{
			mp.events.callRemote(eventName);
		},timeout);
	}
});