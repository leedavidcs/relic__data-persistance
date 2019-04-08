import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { UserMutationSchema, UserQuerySchema } from "./user";

/* tslint:disable:object-literal-sort-keys */
export const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "rootQueries",
		fields: {
			Hello: {
				description: "A simple type to get started",
				resolve: () => "World!",
				type: GraphQLString
			},
			...UserQuerySchema
		}
	}),
	mutation: new GraphQLObjectType({
		name: "rootMutations",
		fields: {
			Test: {
				description: "A simple type for getting started!",
				resolve: () => "Testing...",
				type: GraphQLString
			},
			...UserMutationSchema
		}
	})
});
/* tslint:enable:object-literal-sort-keys */
