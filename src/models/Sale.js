const mongoose = require('mongoose');
const moment = require('moment');

const SaleSchema = new mongoose.Schema({
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
  description: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  points: {
    type: Number,
    require: false,
  },
  type: {
    type: Number,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Sale = mongoose.model('Sale', SaleSchema);

module.exports = Sale;
