import config from "config";
import { Mockgoose } from "mockgoose";
import Mongoose from "mongoose";
import { Logger } from "../logger";

const dbName: string = config.get<string>("mongodb.dbName");
const host: string = config.get<string>("mongodb.host");
const pass: string = config.get<string>("mongodb.pass");
const port: string = config.get<string>("mongodb.port");
const user: string = config.get<string>("mongodb.user");

let mockgoose: Mockgoose | null = null;

const prepareMockgoose = async (): Promise<void> => {
	mockgoose = new Mockgoose(Mongoose);

	await mockgoose.prepareStorage();
};

const cleanupMockgoose = async (): Promise<void> => {
	if (mockgoose === null) {
		Logger.error("There is no Mockgoose to reset");

		return;
	}

	await mockgoose.helper.reset();
	await mockgoose.shutdown();

	mockgoose = null;
};

export const connectToDatabase = async (): Promise<void> => {
	if (process.env.NODE_ENV === "test") {
		await prepareMockgoose();
	}

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

export const closeDatabase = async (): Promise<void> => {
	await Mongoose.disconnect();

	if (process.env.NODE_ENV === "test") {
		await cleanupMockgoose();
	}

	Logger.info(`Closed connection to MongoDB database: ${dbName}`);
};
