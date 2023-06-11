const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  tags: [
    {
      tagName: {
        type: String,
      },
      color: {
        type: String,
      },
    },
  ],
  timestamp: {
    type: String,
    default: Date.now(),
  },
  dueDate: {
    type: Date,
    default: Date.now(),
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
