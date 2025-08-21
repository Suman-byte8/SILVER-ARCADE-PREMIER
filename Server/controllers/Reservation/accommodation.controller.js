const Accommodation = require('../../schema/Reservation/accommodation.model');

const recieveAccommodationBooking = async (req, res) => {
    try {
        const {
            arrivalDate,
            departureDate,
            rooms,
            totalAdults,
            totalChildren,
            guestInfo
        } = req.body;

        // Validate required fields
        if (!arrivalDate || !departureDate || !rooms || !guestInfo) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields"
            });
        }

        // Validate guest information
        if (!guestInfo.name || !guestInfo.phoneNumber || !guestInfo.email) {
            return res.status(400).json({
                success: false,
                message: "Missing guest information"
            });
        }

        // Create new accommodation booking
        const newBooking = await Accommodation.create({
            arrivalDate,
            departureDate,
            rooms,
            totalAdults,
            totalChildren,
            guestInfo
        });

        return res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: newBooking
        });

    } catch (error) {
        console.error('Accommodation booking error:', error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
};

const getAccommodationBookings = async (req, res) => {
    try {
        const bookingId = req.params.bookingId;

        const booking = await Accommodation.findById(bookingId);
        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: booking
        });
    } catch (error) {
        console.error('Error fetching accommodation booking:', error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
}

const getAllAccommodationBookings = async (req, res) => {
    try {
       
        const booking = await Accommodation.find();
        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: booking
        });
    } catch (error) {
        console.error('Error fetching accommodation booking:', error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
}


module.exports = {
    recieveAccommodationBooking,
    getAccommodationBookings
};