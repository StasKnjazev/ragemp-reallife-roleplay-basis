const log4js = require('log4js');

class LogSingleton {
	constructor(){
		log4js.configure({
			appenders:{ 
				file:{type:'file',filename:`./packages/lakeside/serverLogs.log`},
				console:{type:'console'},
			},
			categories:{default:{appenders: ['file','console'],level:'debug'}}
		  });
		this.log=log4js.getLogger();
	}
}
const logSingleton=new LogSingleton();
module.exports=logSingleton;