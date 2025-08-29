const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, populateUserActivity } = require('../controllers/user.controller');
const { check } = require('express-validator');
const { protect, authorize } = require('../middlewares/authMiddleware');

// Validation middleware
const validateRegistration = [
    check('firstName', 'First name is required').not().isEmpty(),
    check('lastName', 'Last name is required').not().isEmpty(),
    check('username', 'Username is required').not().isEmpty(),
    check('memberShipType', 'Member ship type is required').not().isEmpty(),
    check('memberShipStartDate', 'Member ship start date is required').not().isEmpty(),
    check('memberShipEndDate', 'Member ship end date is required').not().isEmpty(),
    check('phoneNumber', 'Phone number is required').not().isEmpty(),
    check('whatsAppNumber', 'WhatsApp number is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('address', 'Address is required').not().isEmpty(),
    check('alternateNumber', 'Alternate number is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty()
];

// validate login credentials
const validateLogin = [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').not().isEmpty()
];

// Register route
router.post('/register', validateRegistration, registerUser);

// login route
router.post('/login', validateLogin, loginUser)

// Get user profile route
router.get('/profile/:userId', protect, getUserProfile);

// accommodation room booking
const { createAccommodationBooking, getAccommodationBookings } = require('../controllers/Reservation/accommodation.controller');

// Create new accommodation booking
router.post('/accommodations', protect, createAccommodationBooking)

// get accommodation booking
router.get('/accommodations/:bookingId', protect, getAccommodationBookings)

// Restaurant reservation routes
const {createRestaurantReservation, getRestaurantReservations} = require('../controllers/Reservation/restaurantReservation.controller');

// Validation middleware for restaurant reservation
const validateRestaurantReservation = [
    check('typeOfReservation', 'Reservation type is required').equals('restaurant'),
    check('noOfDiners', 'Number of diners is required').isInt({ min: 1 }),
    check('date', 'Valid date is required').isISO8601(),
    check('timeSlot', 'Valid time slot is required').isIn(['Breakfast', 'Lunch', 'Dinner']),
    check('guestInfo.name', 'Guest name is required').not().isEmpty(),
    check('guestInfo.phoneNumber', 'Valid phone number is required').not().isEmpty(),
    check('guestInfo.email', 'Valid email is required').isEmail(),
    check('agreeToTnC', 'Terms and conditions must be accepted').isBoolean().custom(value => value === true)
];

// Create new restaurant reservation
router.post('/restaurant-reservations', protect, validateRestaurantReservation, createRestaurantReservation);

// Get restaurant reservation by booking ID
router.get('/restaurant-reservations/:bookingId', protect, getRestaurantReservations);

// Meeting/Wedding reservation routes
const {createMeetingReservation, getMeetingReservation} = require('../controllers/Reservation/meetingOrWeddingReservation.controller');

// Validation middleware for meeting/wedding reservation
const validateMeetingReservation = [
    check('typeOfReservation', 'Reservation type is required').isIn(['Marriage', 'Reception', 'Birthday', 'Office Meeting', 'Other']),
    check('reservationDate', 'Valid reservation date is required').isISO8601(),
    check('reservationEndDate', 'Valid reservation end date is required').isISO8601(),
    check('numberOfRooms', 'Number of rooms is required').isInt({ min: 0 }),
    check('numberOfGuests', 'Number of guests is required').isInt({ min: 1 }),
    check('guestInfo.name', 'Guest name is required').not().isEmpty(),
    check('guestInfo.phoneNumber', 'Valid phone number is required').not().isEmpty(),
    check('guestInfo.email', 'Valid email is required').isEmail(),
    check('agreeToTnC', 'Terms and conditions must be accepted').isBoolean().custom(value => value === true)
];

// Create new meeting/wedding reservation
router.post('/meeting-reservations', protect, validateMeetingReservation, createMeetingReservation);

// Get meeting/wedding reservation by booking ID
router.get('/meeting-reservations/:bookingId', protect, getMeetingReservation);

module.exports = router;

