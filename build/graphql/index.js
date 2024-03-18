"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const user_1 = require("./user");
function createAppoloGraphqlServer() {
    return __awaiter(this, void 0, void 0, function* () {
        //  Create  GraphQl server
        const gqlserver = new server_1.ApolloServer({
            typeDefs: `
       type Query{
       hello : String
       }

       type Mutation{
        ${user_1.User.mutations}
       }
    `,
            resolvers: {
                Query: Object.assign({}, user_1.User.resolvers.queries),
                Mutation: Object.assign({}, user_1.User.resolvers.mutations)
            }
        });
        //  Start the gql server
        yield gqlserver.start();
        return gqlserver;
    });
}
exports.default = createAppoloGraphqlServer;