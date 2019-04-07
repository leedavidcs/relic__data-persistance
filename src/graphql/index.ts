import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";
import { Logger } from "../logger";
import { schema } from "./schemas";

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
