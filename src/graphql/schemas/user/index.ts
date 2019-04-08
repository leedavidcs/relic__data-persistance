import { GraphQLList } from "graphql";
import { User } from "../../../models/user.model";
import { notNull } from "../utils";
import { UserProps, UserType } from "./types";

const { _id, authProvider, email, password, username } = UserProps;

/* tslint:disable:object-literal-sort-keys */
export const UserQuerySchema = {
	Users: {
		description: "List all users",
		resolve: (root, args) => User.find(args),
		type: new GraphQLList(UserType),
		args: UserProps
	}
};

export const UserMutationSchema = {
	CreateUser: {
		description: "Create a user",
		resolve: () => {
			return;
		},
		type: UserType,
		args: {
			...notNull({ authProvider, email, username }),
			password
		}
	},
	UpdateUser: {
		description: "Updates a user",
		resolve: () => {
			return;
		},
		type: UserType,
		args: {
			...notNull({ _id }),
			email,
			password,
			username
		}
	},
	DeleteUser: {
		description: "Delete a user",
		resolve: () => {
			return;
		},
		type: UserType,
		args: notNull({ _id })
	}
};
/* tslint:enable:object-literal-sort-keys */
