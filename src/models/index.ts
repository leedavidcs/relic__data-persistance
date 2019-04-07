import config from "config";
import Mongoose from "mongoose";
import { Logger } from "../logger";

export const connectToDatabase = async (): Promise<void> => {
	const dbName: string = config.get<string>("mongodb.dbName");
	const host: string = config.get<string>("mongodb.host");
	const pass: string = config.get<string>("mongodb.pass");
	const port: string = config.get<string>("mongodb.port");
	const user: string = config.get<string>("mongodb.user");

	try {
		await Mongoose.connect(`mongodb://${host}:${port}`, {
			...{ dbName, pass, user },
			useNewUrlParser: true
		});
	} catch (err) {
		Logger.error(err);

		return;
	}

	Logger.info(`Connected to MongoDB database: ${dbName}`);
};
