const { validationResult } = require('express-validator');
const meetingSchema = require("../../schema/Reservation/meetingOrWeddingReservation.model");
const { sendConfirmationEmail } = require('../../config/emailConfig');

// Create new meeting or wedding reservation
const createMeetingReservation = async (req, res) => {
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
        const reservation = await meetingSchema.create({
            ...req.body,
            userId: req.user._id // Add user ID from auth middleware
        });

        // Send confirmation email after successful reservation
        await sendConfirmationEmail(reservation, 'Meeting/Wedding');

        res.status(201).json({
            success: true,
            data: reservation
        });
    } catch (error) {
        console.error('Meeting or Wedding Reservation Error:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

// Get meeting or wedding reservation by ID
const getMeetingReservation = async (req, res) => {
    const bookingId = req.params.bookingId;
    if (!bookingId) {
        return res.status(400).json({
            success: false,
            message: "Booking ID is required"
        });
    }
    try {
        const reservation = await meetingSchema.findById(bookingId);

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
        console.error('Get Meeting Reservation Error:', error);
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    createMeetingReservation,
    getMeetingReservation
};
