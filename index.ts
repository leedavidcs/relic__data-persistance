import config from "config";
import { Server } from "./src/server";
import { Logger } from "./src/logger";

const port: number = config.get<number>("port");
const server: Server = new Server(port);

server.run().then(() => {
	Logger.info(`Data persistance layer listening on port: ${port}`);
});
