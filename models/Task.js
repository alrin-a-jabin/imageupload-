const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    status:{
        type:String,
    }
    },{ timestamps: true }
  );
  
module.exports = Task = mongoose.model('task', TaskSchema);




