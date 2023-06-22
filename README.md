# mcauth23
This is a very simple server using the [`minecraft-protocol`](https://github.com/PrismarineJS/node-minecraft-protocol) package that sends profile information about the player trying to connect to an HTTP API, and immediately rejects the connection using the API response as the rejection message.

Using this, you can provide the user with a token that they can use to verify their Minecraft profile with an external service.
