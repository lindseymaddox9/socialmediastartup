const { User } = require('../models/');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().populate("friends");
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate("friends")
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        {_id: req.params.userId},//finds user we'd like to update in db
        {$set: req.body}, // resets the req.body inputs in db
        {new: true}
      );


      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const dbUserData = await User.findOneAndDelete(
        {_id: req.params.userId },//finds user we'd like to update in db
       );
       //BONUS if user is deleted, delete thoughts associated with their id
       //$in  thoughts array

      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId }, 
        { $addToSet: { friends: req.params.friendId } }, // friendId is the id of the user who is becoming a friend
        { new: true });

      if (!dbUserData) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
 
  async deleteFriend(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });

      if (!dbUserData) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

};
