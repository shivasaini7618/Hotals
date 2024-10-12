const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true,
  },
  work:{
    type:String,
    enum: ['manager' , 'chef' , 'waiter'],
    required:true
  },
  mobile:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  address:{
    type:String,
    required:true
  },
  salary:{
    type:Number,
    default:20000
  }
});

const Person = mongoose.model('Person' , personSchema);
// module.exports = ('Person' , personSchema);
module.exports = Person;