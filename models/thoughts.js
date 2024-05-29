const {Schema, Types, model} = require('mongoose');

const reactionSchema =require("./reaction")
const thoughtSchema = new Schema({
  thoughttext:{
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
  reactions:[
    reactionSchema
  ]

},{
  toJSON:{
    virtuals: true
  }
})

thoughtSchema.virtual("reaction").get(function(){
  return this.reactions.length
})

const Thought = model("thought", thoughtSchema)

module.exports = Thought