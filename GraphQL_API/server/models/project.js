const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the schema for the project
const projectSchema = new Schema({
  title: { type: String, required: true },
  weight: { type: Number, required: true },
  description: { type: String, required: true },
});

// export the Project model for use in other parts of the application
module.exports = mongoose.model('Project', projectSchema);
