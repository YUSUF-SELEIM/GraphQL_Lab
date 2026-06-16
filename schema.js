const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User
    comments: [Comment]
  }

  type Comment {
    id: ID!
    text: String!
    post: Post
    author: User
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User
    getAllPosts: [Post]
    getPostById(id: ID!): Post
    getAllComments: [Comment]
    getCommentById(id: ID!): Comment

    getPostsByUser(userId: ID!): [Post]
    getUserOfPost(postId: ID!): User
    getCommentsByPost(postId: ID!): [Comment]
    getPostOfComment(commentId: ID!): Post
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): User

    addPost(title: String!, content: String!, userId: ID!): Post
    updatePost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): Post

    addComment(text: String!, postId: ID!, userId: ID!): Comment
    updateComment(id: ID!, text: String): Comment
    deleteComment(id: ID!): Comment
  }
`;

module.exports = typeDefs;
