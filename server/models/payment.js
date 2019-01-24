const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)

const paymentSchema = mongoose.Schema({
  user: {
    type: Array,
    default: []
  },
  data: {
    type: Array,
    default: []
  },
  product: {
    type: Array,
    default: []
  }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = { Payment }