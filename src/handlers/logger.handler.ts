import { Middleware } from "koa";
import Logger from "koa-logger";

export const LoggerHandler: Middleware = Logger();
