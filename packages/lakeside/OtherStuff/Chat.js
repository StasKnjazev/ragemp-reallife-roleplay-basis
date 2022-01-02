const time=require("../time.js");

class ChatSingleton {
	constructor () {
		mp.events.add('playerChat', (player, message) => {
			if (!message) return player.notify("Please enter message");
			this.sayRP(player, message);
		});
	}

	getColorInRange(color, dist) {
		if (color === 'white') return this.getWhiteColor(dist);
		else if (color === 'purple') return this.getPurpleColor(dist);
	}

	getWhiteColor(dist) {
		if (dist >= 0 && dist < 2) return '#ffffff';
		else if (dist >= 2 && dist < 4) return '#cecece';
		else if (dist >= 4 && dist < 6) return '#afafaf';
		else if (dist >= 6 && dist < 8) return '#919191';
		else if (dist >= 8 && dist < 10) return '#727272';
	}

	getPurpleColor(dist) {
		if (dist >= 0 && dist < 2) return '#c2a2da';
		else if (dist >= 2 && dist < 4) return '#a58bba';
		else if (dist >= 4 && dist < 6) return '#8a749b';
		else if (dist >= 6 && dist < 8) return '#6e5d7c';
		else if (dist >= 8 && dist < 10) return '#53465e';
	}

	sayRP(player, text) {
		mp.players.forEachInRange(player.position,20,(client)=>{
			const dist = client.dist(player.position);
			const color = this.getColorInRange("white",dist);
			const currentTime = time.getTime();
			client.outputChatBox(`!{${color}} ${currentTime} | ${player.name}: ${text}`);
		});
	}
}
const chat = new ChatSingleton();
module.exports = chat;