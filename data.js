let users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
  { id: "3", name: "Charlie", email: "charlie@example.com" },
];

let posts = [
  { id: "1", title: "First Post", content: "Hello world", userId: "1" },
  { id: "2", title: "GraphQL Basics", content: "Learning GraphQL", userId: "1" },
  { id: "3", title: "Bob's Thoughts", content: "Random stuff", userId: "2" },
];

let comments = [
  { id: "1", text: "Nice post!", postId: "1", userId: "2" },
  { id: "2", text: "Thanks for sharing", postId: "1", userId: "3" },
  { id: "3", text: "Great explanation", postId: "2", userId: "2" },
];

let nextIds = { user: 4, post: 4, comment: 4 };

module.exports = { users, posts, comments, nextIds };
