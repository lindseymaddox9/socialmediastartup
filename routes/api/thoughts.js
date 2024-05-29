// **`localhost:3001/api/thoughts`**
const router = require('express').Router();


const {
getThoughts,
getSingleThought,
createThought,
updateThought,
deleteThought,

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
router.route("/:thoughtId")
.add(reaction)
.delete(reaction)


module.exports = router