import { expect } from "chai";
import config from "config";
import Http from "http";
import { Server } from "../src/server";

const port: number = config.get<number>("port");

describe("Server", () => {
	const server: Server = new Server(port);

	afterEach(() => {
		server.stop();
	});

	it("Should be a constructor", () => {
		expect(typeof Server).to.equal("function");
	});

	it("Should run the server", async () => {
		await server.run();

		expect(server.isRunning).to.equal(true);
	});

	it("Should return an instance of an http server", () => {
		expect(server.instance instanceof Http.Server).to.equal(true);
	});
});
