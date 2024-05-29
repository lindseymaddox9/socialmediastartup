const router = require('express').Router();
const thoughtsRoutes = require('./thoughts');
const userRoutes = require('./userRoutes');

//these routes all attach to the end of api
router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;


