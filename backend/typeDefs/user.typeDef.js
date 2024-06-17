const userTypeDef = `#graphql
  type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
    # transactions: [Transaction!]
  }

# special type called query, tells our schema what kind of queries
#  we could have for the users
# users: [User!]  - fetch all users ,the response is an array of users where each user can't be null
# authUser: User! - get the authenticated user, if the user is null it is not authenticated.
  type Query{ 
    authUser: User
    user(userId:ID!): User
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
  }

  input SignUpInput {
    username: String!
    name: String!
    password: String!
    gender: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type LogoutResponse {
    message: String!
  }
`;

export default userTypeDef;
