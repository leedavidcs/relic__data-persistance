import { GraphQLFieldConfigArgumentMap, GraphQLNonNull } from "graphql";
import _ from "lodash";

export const notNull = (types: GraphQLFieldConfigArgumentMap): GraphQLFieldConfigArgumentMap => {
	const mappedToNotNull: GraphQLFieldConfigArgumentMap = _.mapValues(types, ({ type, ...restType }) => ({
		...restType,
		type: new GraphQLNonNull(type)
	}));

	return mappedToNotNull;
};
