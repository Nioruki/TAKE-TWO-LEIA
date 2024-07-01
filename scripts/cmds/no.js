module.exports = {
	config = {
		name: "no",
		aliases: [""],
		version: "1.0",
		role: 0,
		author: "Julianne",
		description: "auto-reply",
		category: "chat box",
		guide: {
			en: "{pn}"
		},
		usages: "no"
	}
}

onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "no")
			return () => {
				return message.reply("yes"(event.threadID));
			};
}