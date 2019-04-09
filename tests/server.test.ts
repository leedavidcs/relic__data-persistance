import config from "config";
import Http from "http";
import { Server } from "../src/server";

const port: number = config.get<number>("port");

const INIT_SERVER_SPIN_TIMEOUT: number = 120000;

describe("Server", () => {
	const server: Server = new Server(port);

	afterEach(async () => {
		await server.stop();
	});

	it("Should be a constructor", () => {
		expect(typeof Server).toBe("function");
	});

	it(
		"Should run the server",
		async () => {
			await server.run();

			expect(server.isRunning).toBe(true);
		},
		INIT_SERVER_SPIN_TIMEOUT
	);

	it("Should return an instance of an http server", () => {
		expect(server.instance instanceof Http.Server).toBe(true);
	});
});
