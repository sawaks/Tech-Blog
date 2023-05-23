const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./blogRoutes');
const projectRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/dashboard', blogRoutes);
router.use('/blogAddComment', commentRoutes);

module.exports = router;
