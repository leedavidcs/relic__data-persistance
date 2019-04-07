import config from "config";
import { Logger } from "./src/logger";
import { Server } from "./src/server";

const port: number = config.get<number>("port");
const server: Server = new Server(port);

server.run().then(() => {
	Logger.info(`Data persistance layer listening on port: ${port}`);
});
