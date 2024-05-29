// **`localhost:3001/api/users`**

// * `GET` all users

const router = require('express').Router();


const {
getUsers,
getSingleUser,
createUser,
updateUser,
deleteUser,
addFriend,
deleteFriend
} = require("../../controllers/usercontroller")

// **`localhost:3001/api/users`**
router.route("/")
.get(getUsers)
.post(createUser)

// **`localhost:3001/api/users/:userId`**
router.route("/:userId")
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)

// **`localhost:3001/api/users/:userId/friends/:friendId`**
router.route("/:userId/friends/:friendId")
.post(addFriend)
.delete(deleteFriend)

module.exports = router