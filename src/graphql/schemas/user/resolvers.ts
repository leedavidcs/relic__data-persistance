import { IUser, User } from "../../../models/user.model";

export const queryUsers = async (root, args): Promise<IUser[]> => await User.find(args);

export const mutationCreateUser = async (root, args): Promise<IUser> => await User.create(args);

export const mutationUpdateUser = async (root, args): Promise<IUser | null> => {
	const { _id, ...rest } = args;

	return await User.findOneAndUpdate({ _id }, rest);
};

export const mutationDeleteUser = async (root, args): Promise<IUser | null> => await User.findOneAndDelete(args);
