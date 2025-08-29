const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetingOrWeddingReservationSchema = new Schema({
    typeOfReservation: {
        type: String,
        enum: ['Marriage', 'Reception', 'Birthday', 'Office Meeting', 'Other'],
        required: true
    },
    reservationDate: {
        type: Date,
        required: true
    },
    reservationEndDate: {
        type: Date,
        required: true
    },
    numberOfRooms: {
        type: Number,
        required: true
    },
    numberOfGuests: {
        type: Number,
        required: true
    },
    additionalDetails: {
        type: String
    },
    guestInfo: {
        name: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true }
    },
    agreeToTnC: {
        type: Boolean,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('MeetingOrWeddingReservation', MeetingOrWeddingReservationSchema);
