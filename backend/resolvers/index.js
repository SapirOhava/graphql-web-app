import { mergeResolvers } from "@graphql-tools/merge";

import userResolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";

// will merge them into one resolver
const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergedResolvers;
