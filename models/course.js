const mongoose = require('mongoose');
const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this course.'],
    maxlength: [150, 'Name cannot be more than 150 characters'],
  },
  status: {
    type: Boolean,
    required: [true, 'Please specify the status of your course.'],
  },
},{ timestamps: true })

module.exports = mongoose.models.Course || mongoose.model('Course', CourseSchema);