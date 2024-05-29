const {Schema, Types, model} = require('mongoose');

const reactionSchema = new Schema({

    reactionId:{
        type:Schema.Types.ObjectId, 
        default:() => new Types.ObjectId()
    },
   reactiontext:{
    type:String,
    required:true,
    maxlength: 280,
    minlength: 1,
  },
  username:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
 

},{
  toJSON:{
    virtuals: true
  }
})



module.exports = reactionSchema