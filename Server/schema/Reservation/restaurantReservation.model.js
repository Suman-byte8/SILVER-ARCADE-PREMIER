const mongoose = require('mongoose');

const restaurantReservationSchema = new mongoose.Schema({

    typeOfReservation: {
        type: String,
        required: true,
        value: 'restaurant'
    },

    noOfDiners: {
        type: Number,
        required: true,
        min: 1
    },
    date: {
        type: Date,
        required: true
    },
    timeSlot: {
        type: String,
        required: true,
        enum: ['Breakfast', 'Lunch', 'Dinner']
    },
    specialRequests: {
        type: String,
        default: ''
    },
    additionalDetails: {
        type: String,
        default: ''
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
            match: /.+\@.+\..+/
        }
    },
    agreeToTnC: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

const RestaurantReservation = mongoose.model('RestaurantReservation', restaurantReservationSchema);
module.exports = RestaurantReservation;