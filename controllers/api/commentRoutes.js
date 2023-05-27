const router = require('express').Router();
const { Comment, User, Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
    console.log("helllo in the PODT ROUTER")
    try {
        const newComment = await Comment.create(
            {
                ...req.body,
                user_id: req.session.user_id,
                blog_id: req.params.id,
            },


        );
        console.log(newComment);
        res.status(200).json(newComment);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }

});

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [{ model: Blog }, { model: User }],
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;