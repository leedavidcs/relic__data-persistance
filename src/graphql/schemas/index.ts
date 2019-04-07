import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

export const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "rootQueries",
		fields: {
			Hello: {
				description: "A simple type to get started",
				resolve: () => "World!",
				type: GraphQLString
			}
		}
	}),
	mutation: new GraphQLObjectType({
		name: "rootMutations",
		fields: {
			Test: {
				description: "A simple type for getting started!",
				resolve: () => "Testing...",
				type: GraphQLString
			}
		}
	})
});
