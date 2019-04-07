import Koa, { Middleware } from "koa";
import { BodyParserHandler } from "./body-parser.handler";
import { LoggerHandler } from "./logger.handler";

export const applyHandlers = (app: Koa): void => {
	const handlers: Middleware[] = [LoggerHandler, BodyParserHandler];

	handlers.forEach((handler) => {
		app.use(handler);
	});
};
