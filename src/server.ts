import Http, { RequestListener } from "http";
import Koa from "koa";
import { applyGraphQL } from "./graphql";
import { applyHandlers } from "./handlers";
import { connectToDatabase } from "./models";

/**
 * @class Server
 */
export class Server {
	private app: Koa;
	private httpServer: Http.Server;
	private port: number;

	constructor(port: number) {
		this.port = Number(port);
		this.app = new Koa();

		const requestListener: RequestListener = this.app.callback();

		this.httpServer = new Http.Server(requestListener);
	}

	public run(): Promise<void> {
		return new Promise<void>(async (resolve) => {
			await this.configure();

			this.httpServer.listen(this.port, () => {
				resolve();
			});
		});
	}

	public stop(): Promise<void> {
		return new Promise<void>((resolve) => {
			this.httpServer.close(() => {
				resolve();
			});
		});
	}

	public get isRunning(): boolean {
		return this.httpServer.listening;
	}

	private async configure(): Promise<void> {
		await connectToDatabase();

		applyHandlers(this.app);
		applyGraphQL(this.app);
	}
}
