const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');


Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// User.belongsToMany(Blog, {
//   through: {
//     model: Comment,
//     unique: false
//   },
//   as: 'userLinkInBlog',
//   foreignKey: 'user_id'
// });

// Blog.belongsToMany(User, {
//   through: {
//     model: Comment,
//     unique: false
//   },
//   as: 'blogLinkInUser',
//   foreignKey: 'blog_id'
// });


User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});


Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
  foreignKey: 'blog_id'
});


module.exports = { User, Blog, Comment };
