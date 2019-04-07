import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import { schema } from "./schemas";
import { Logger } from "../logger";

const apollo: ApolloServer = new ApolloServer({
	schema
});

export const applyGraphQL = (app: Koa): void => {
	apollo.applyMiddleware({
		app,
		path: "/graphql"
	});

	Logger.info("Connected to GraphQL");
};
