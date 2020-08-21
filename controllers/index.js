const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);

module.exports = router;