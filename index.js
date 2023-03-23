import { createServer } from "minecraft-protocol"
import * as dotenv from "dotenv"

dotenv.config()
const { API_URL, API_SECRET, MOTD } = process.env

let server = createServer({
	motd: MOTD,
	maxPlayers: 1
})

server.on("login", async (client) => {
	try {
		let res = await fetch(API_URL, {
			method: "POST",
			body: JSON.stringify({
				id: client.profile.id,
				username: client.profile.name,
				address: client.socket.address().address,
				secret: API_SECRET
			}),
			headers: {
				"content-type": "application/json"
			}
		})
	
		let message = await res.text()
		
		client.end(message)
	} catch (err) {
		console.error(err)
	}
})