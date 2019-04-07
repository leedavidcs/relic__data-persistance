import Status from "http-status";
import { Context, Middleware } from "koa";
import BodyParser from "koa-bodyparser";
import { Logger } from "../logger";

export const BodyParserHandler: Middleware = BodyParser({
	enableTypes: ["json"],
	jsonLimit: "25mb",
	onerror: (err: Error, ctx: Context) => {
		Logger.error(err);

		ctx.throw(Status.UNPROCESSABLE_ENTITY, err);
	},
	strict: true
});
