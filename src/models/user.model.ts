import { Document, model, Schema, SchemaTimestampsConfig } from "mongoose";

enum AuthProvider {
	Local = "Local"
}

interface IUser extends Document, SchemaTimestampsConfig {
	authProvider: AuthProvider;
	email: string;
	password: string;
	username: string;
}

const UserSchema: Schema<IUser> = new Schema(
	{
		authProvider: {
			enum: [AuthProvider.Local],
			required: true,
			type: String
		},
		email: {
			required: true,
			type: String
		},
		password: {
			required: false,
			type: String
		},
		username: {
			required: true,
			type: String,
			unique: true
		}
	},
	{
		timestamps: true
	}
);

export const User = model<IUser>("User", UserSchema);
