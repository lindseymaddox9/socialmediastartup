// **`localhost:3001/api/thoughts`**
const router = require('express').Router();


const {
getThoughts,
getSingleThought,
createThought,
updateThought,
deleteThought,
addReaction,
deleteReactions,
} = require("../../controllers/thoughtcontroller")

//matches /api/thoughts
router.route("/")
.get(getThoughts)
.post(createThought)

//matches /api/thoughts/thoughtId
router.route("/:thoughtId")
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought)


//matches /api/thoughts/thoughtId
router.route("/:thoughtId/reactions")
.post(addReaction)

router.route("/:thoughtId/reactions/:reactionId")
.delete(deleteReactions)


module.exports = router