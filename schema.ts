import { gql } from 'apollo-server-lambda';

export default gql`
  scalar Date

  schema {
    query: Query
  }

  type Query {
    me: User!
    user(id: ID!): User
    allUsers: [User]
    search(term: String!): [SearchResult!]!
    myChats: [Chat!]!
    allOrders: [Order]
  }

  type Order implements Node {
    id: ID!
    customerFullName: String!
    totalPrice: Int!
    status: Status!
    createdDate: Date!
  }

  enum Status {
    PENDING
    SHIPPED
    COMPLETE
  }

  enum Role {
    USER
    ADMIN
  }

  interface Node {
    id: ID!
  }

  union SearchResult = User | Chat | ChatMessage

  type User implements Node {
    id: ID!
    username: String!
    email: String!
    role: Role!
  }

  type Chat implements Node {
    id: ID!
    users: [User!]!
    messages: [ChatMessage!]!
  }

  type ChatMessage implements Node {
    id: ID!
    content: String!
    time: Date!
    user: User!
  }
`;
