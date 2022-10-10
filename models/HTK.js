const mongoose = require('mongoose');
const HtkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name htk.'],
    maxlength: [150, 'htk cannot be more than 150 characters'],
  },
  status: {
    type: Boolean,
    required: [true, 'Please specify the status of your stk.'],
  },
},{ timestamps: true })

module.exports = mongoose.models.Htk || mongoose.model('Htk', HtkSchema);