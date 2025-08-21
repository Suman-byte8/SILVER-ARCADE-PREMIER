const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  adults: {
    type: Number,
    required: true,
    min: 1,
    max: 4
  },
  children: {
    type: Number,
    required: true,
    min: 0,
    max: 4
  }
});

const accommodationSchema = new mongoose.Schema({
  arrivalDate: {
    type: Date,
    required: true
  },
  departureDate: {
    type: Date,
    required: true
  },
  rooms: [roomSchema],
//   specialCode: {
//     type: String,
//     default: ''
//   },

//   purposeOfTravel: {
//     type: String,
//     default: null
//   },

  totalAdults: {
    type: Number,
    required: true,
    min: 1
  },
  totalChildren: {
    type: Number,
    required: true,
    min: 0
  },
  guestInfo: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
    }
  },
//   status: {
//     type: String,
//     enum: ['pending', 'confirmed', 'cancelled'],
//     default: 'pending'
//   }
}, {
  timestamps: true
});

const Accommodation = mongoose.model('Accommodation', accommodationSchema);

module.exports = Accommodation;