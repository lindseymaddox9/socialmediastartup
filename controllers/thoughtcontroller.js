const { Thought, User } = require("../models");

module.exports = {
  async getThoughts(req, res) {
    try {
      const thought = await Thought.find().select("-__v");

      res.json(thought);
    } catch (err) {
      console.error({ message: err });
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");

      if (!thought) {
        return res.status(404).json({ message: "No Thought with that ID" });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new Thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      // const user = await User.findOneandUpdate(
      //   { _id: req.params.userId },
      //   { $addToSet: { thoughts: thought._id } },
      //   { new: true }
      // );

      // if (!user) {
      //   return res.status(404).json({ message: "No user for thought" });
      // }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true }
      );
      if (!dbThoughtData) {
        return res.status(404).json({ message: "No thought with this id" });
      }

      res.json(dbThoughtData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delete thought
  async deleteThought(req, res) {
    try {
      const deletedThought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!deletedThought) {
        return res.status(404).json({ message: "No thought with this id" });
      }
      res.json(deletedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //add reaction
  async addReaction(req, res) {
    try {
      const thoughtId = req.params.thoughtId;
      const { reactiontext, username } = req.body;

      const newReaction = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $push: { reactions: { reactiontext, username } } },
        { new: true }
      );

      if (!newReaction) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(newReaction);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  //delete
  async deleteReactions(req, res) {
    try {
      const deletedReaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } }
      );
      if (!deletedReaction) {
        return res.status(404).json({ message: "no reaction with this id!" });
      }

      res.json(deletedReaction);
    } catch(err) {
  
      console.log(err);
      res.status(500).json(err);
    }
  },
};
