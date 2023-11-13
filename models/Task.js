const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide Name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: Boolean,
});

module.exports = mongoose.model("task", TaskSchema);
