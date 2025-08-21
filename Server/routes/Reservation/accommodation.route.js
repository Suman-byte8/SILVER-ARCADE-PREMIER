const express = require('express');
const router = express.Router();
const Accommodation = require('../../schema/Reservation/accommodation.model');
const { recieveAccommodationBooking } = require('../../controllers/Reservation/accommodation.controller');
const { protect } = require('../../middlewares/authMiddleware');

// Create new accommodation booking
router.post('/accommodations', protect, recieveAccommodationBooking)

module.exports = router;