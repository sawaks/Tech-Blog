const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });



    // for (const blog of blogData) {
    //     await Blog.create({
    //         ...blog,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    // }

    await Blog.create({
        ...blogData[0],
        user_id: 1
    })

    await Blog.create({
        ...blogData[1],
        user_id: 2
    })

    await Blog.create({
        ...blogData[2],
        user_id: 3
    })

    // await Comment.bulkCreate(commentData);

    await Comment.create({
        ...commentData[0],
        user_id: 2,
        blog_id: 1
    });

    await Comment.create({
        comment: commentData[1].comment,
        user_id: 3,
        blog_id: 2
    });

    await Comment.create({
        comment: commentData[2].comment,
        user_id: 1,
        blog_id: 3
    });
    // for (const comment of commentData) {
    //     await Comment.create({
    //         ...comment,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //         blog_id: blogs[Math.floor(Math.random() * blogs.length)].id,
    //     });
    // }



    process.exit(0);
};

seedDatabase();