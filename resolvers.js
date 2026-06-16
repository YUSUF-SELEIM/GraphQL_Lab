const { users, posts, comments, nextIds } = require("./data");

const resolvers = {
  Query: {
    getAllUsers: () => users,
    getUserById: (_, { id }) => users.find((u) => u.id === id),
    getAllPosts: () => posts,
    getPostById: (_, { id }) => posts.find((p) => p.id === id),
    getAllComments: () => comments,
    getCommentById: (_, { id }) => comments.find((c) => c.id === id),

    getPostsByUser: (_, { userId }) => posts.filter((p) => p.userId === userId),
    getUserOfPost: (_, { postId }) => {
      const post = posts.find((p) => p.id === postId);
      return post ? users.find((u) => u.id === post.userId) : null;
    },
    getCommentsByPost: (_, { postId }) => comments.filter((c) => c.postId === postId),
    getPostOfComment: (_, { commentId }) => {
      const comment = comments.find((c) => c.id === commentId);
      return comment ? posts.find((p) => p.id === comment.postId) : null;
    },
  },

  Mutation: {
    addUser: (_, { name, email }) => {
      const user = { id: String(nextIds.user++), name, email };
      users.push(user);
      return user;
    },
    updateUser: (_, { id, name, email }) => {
      const user = users.find((u) => u.id === id);
      if (!user) return null;
      if (name !== undefined) user.name = name;
      if (email !== undefined) user.email = email;
      return user;
    },
    deleteUser: (_, { id }) => {
      const index = users.findIndex((u) => u.id === id);
      if (index === -1) return null;
      const [deleted] = users.splice(index, 1);
      return deleted;
    },

    addPost: (_, { title, content, userId }) => {
      const post = { id: String(nextIds.post++), title, content, userId };
      posts.push(post);
      return post;
    },
    updatePost: (_, { id, title, content }) => {
      const post = posts.find((p) => p.id === id);
      if (!post) return null;
      if (title !== undefined) post.title = title;
      if (content !== undefined) post.content = content;
      return post;
    },
    deletePost: (_, { id }) => {
      const index = posts.findIndex((p) => p.id === id);
      if (index === -1) return null;
      const [deleted] = posts.splice(index, 1);
      return deleted;
    },

    addComment: (_, { text, postId, userId }) => {
      const comment = { id: String(nextIds.comment++), text, postId, userId };
      comments.push(comment);
      return comment;
    },
    updateComment: (_, { id, text }) => {
      const comment = comments.find((c) => c.id === id);
      if (!comment) return null;
      if (text !== undefined) comment.text = text;
      return comment;
    },
    deleteComment: (_, { id }) => {
      const index = comments.findIndex((c) => c.id === id);
      if (index === -1) return null;
      const [deleted] = comments.splice(index, 1);
      return deleted;
    },
  },

  User: {
    posts: (user) => posts.filter((p) => p.userId === user.id),
  },

  Post: {
    author: (post) => users.find((u) => u.id === post.userId),
    comments: (post) => comments.filter((c) => c.postId === post.id),
  },

  Comment: {
    post: (comment) => posts.find((p) => p.id === comment.postId),
    author: (comment) => users.find((u) => u.id === comment.userId),
  },
};

module.exports = resolvers;
