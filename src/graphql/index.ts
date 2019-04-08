import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import { Logger } from "../logger";
import { schema } from "./schemas";

export const applyGraphQL = (app: Koa): void => {
	const apollo: ApolloServer = new ApolloServer({
		schema
	});

	apollo.applyMiddleware({
		app,
		path: "/graphql"
	});

	Logger.info("Connected to GraphQL");
};
