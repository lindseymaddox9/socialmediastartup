// `localhost:3001/api/users`

const router = require('express').Router();

// * `GET` all users
const {
getUsers,
getSingleUser,
createUser,
updateUser,
deleteUser,
addFriend,
deleteFriend
} = require("../../controllers/usercontroller")

// `localhost:3001/api/users`
router.route("/")
.get(getUsers)
.post(createUser)

// `localhost:3001/api/users/:userId`
router.route("/:userId")
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)

// `localhost:3001/api/users/:userId/friends/:friendId`
router.route("/:userId/friends/:friendId")
.post(addFriend)
.delete(deleteFriend)

module.exports = router