import { GraphQLEnumType, GraphQLObjectType, GraphQLString } from "graphql";

/* tslint:disable:object-literal-sort-keys */
export const UserProps = {
	_id: {
		type: GraphQLString,
		description: "The UUID of the user"
	},
	authProvider: {
		type: new GraphQLEnumType({
			name: "AuthProvider",
			values: {
				LOCAL: { value: "local" }
			}
		}),
		description:
			"The auth provider for this user. (i.e. whether user was registered " +
			"through local, oauth2 google, etc.)"
	},
	email: {
		type: GraphQLString,
		description: "The email that this user has registered through"
	},
	password: {
		type: GraphQLString,
		description: "The user's encrypted password, if he/she has registered through local"
	},
	username: {
		type: GraphQLString,
		description: "The user's username"
	}
};

export const UserType: GraphQLObjectType = new GraphQLObjectType({
	name: "User",
	description: "User",
	fields: UserProps
});
