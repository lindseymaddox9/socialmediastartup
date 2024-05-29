// const Thoughts = require('./Thoughts');

// module.exports = { Thoughts };

// const User = require('./User');

// module.exports = { User };
const router = require('express').Router();
const apiRoutes = require("./api/")

router.use("/api", apiRoutes)


module.exports = router