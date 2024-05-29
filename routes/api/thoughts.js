// **`localhost:3001/api/thoughts`**



const router = require('express').Router();


const {
getThought,
getSingleThought,
createThought,
updateThought,
deleteThought,
addFriend,
deleteFriend
} = require("../../controllers/thoughtcontroller")


router.route("/")
.get(getThought)
.post(createThought)


router.route("/:thoughtId")
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought)

// router.route("/:thoughtId/friends/:friendId")
// .post(addFriend)
// .delete(deleteFriend)

module.exports = router