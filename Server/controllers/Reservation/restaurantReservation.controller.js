const { validationResult } = require('express-validator');
const RestaurantReservation = require('../../schema/Reservation/restaurantReservation.model');

// Create new restaurant reservation
const createRestaurantReservation = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        // Create reservation
        const reservation = await RestaurantReservation.create({
            ...req.body,
            userId: req.user._id // Add user ID from auth middleware
        });

        res.status(201).json({
            success: true,
            data: reservation
        });
    } catch (error) {
        console.error('Restaurant Reservation Error:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Get restaurant reservation by ID
const getRestaurantReservations = async (req, res) => {
    const bookingId = req.params.bookingId;
    if (!bookingId) {
        return res.status(400).json({
            success: false,
            message: "Booking ID is required"
        });
    }
    try {
        const reservation = await RestaurantReservation.findById(bookingId);

        if (!reservation) {
            return res.status(404).json({
                success: false,
                error: 'Reservation not found'
            });
        }

        res.status(200).json({
            success: true,
            data: reservation
        });
    } catch (error) {
        console.error('Get Reservation Error:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    createRestaurantReservation,
    getRestaurantReservations
};