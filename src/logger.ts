import Path from "path";
import Winston, { transports } from "winston";

const consoleFormat = process.env.NODE_ENV === "production" ? Winston.format.prettyPrint() : Winston.format.simple();

const getFilePath = (filename: string): string => Path.join(__dirname, "../", "logs", filename);

const ERROR_LOG_FILE_PATH: string = getFilePath("error.log");
const COMBINED_LOG_FILE_PATH: string = getFilePath("combined.log");

export const Logger = Winston.createLogger({
	format: Winston.format.json(),
	level: "info",
	silent: process.env.NODE_ENV === "test",
	transports: [
		new transports.Console({
			format: consoleFormat
		}),
		new transports.File({
			filename: ERROR_LOG_FILE_PATH,
			level: "error",
			options: {
				flags: "w"
			}
		}),
		new transports.File({
			filename: COMBINED_LOG_FILE_PATH,
			options: {
				flags: "w"
			}
		})
	]
});
