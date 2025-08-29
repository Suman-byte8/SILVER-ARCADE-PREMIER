const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendConfirmationEmail = async (booking, type = 'Accommodation') => {
  try {
    // Generate booking details based on reservation type
    let bookingDetails = '';
    
    if (type.toLowerCase() === 'restaurant') {
      bookingDetails = `
        <li><strong>Booking ID:</strong> ${booking._id}</li>
        <li><strong>Date:</strong> ${booking.date ? new Date(booking.date).toLocaleDateString() : 'N/A'}</li>
        <li><strong>Time Slot:</strong> ${booking.timeSlot || 'N/A'}</li>
        <li><strong>Number of Diners:</strong> ${booking.noOfDiners || 'N/A'}</li>
        ${booking.specialRequests ? `<li><strong>Special Requests:</strong> ${booking.specialRequests}</li>` : ''}
      `;
    } else if (type.toLowerCase() === 'meeting/wedding') {
      bookingDetails = `
        <li><strong>Booking ID:</strong> ${booking._id}</li>
        <li><strong>Event Type:</strong> ${booking.typeOfReservation || 'N/A'}</li>
        <li><strong>Start Date:</strong> ${booking.reservationDate ? new Date(booking.reservationDate).toLocaleDateString() : 'N/A'}</li>
        <li><strong>End Date:</strong> ${booking.reservationEndDate ? new Date(booking.reservationEndDate).toLocaleDateString() : 'N/A'}</li>
        <li><strong>Number of Rooms:</strong> ${booking.numberOfRooms || 'N/A'}</li>
        <li><strong>Number of Guests:</strong> ${booking.numberOfGuests || 'N/A'}</li>
        ${booking.additionalDetails ? `<li><strong>Additional Details:</strong> ${booking.additionalDetails}</li>` : ''}
      `;
    } else {
      // Default to accommodation details
      bookingDetails = `
        <li><strong>Booking ID:</strong> ${booking._id}</li>
        <li><strong>Arrival Date:</strong> ${booking.arrivalDate ? new Date(booking.arrivalDate).toLocaleDateString() : 'N/A'}</li>
        <li><strong>Departure Date:</strong> ${booking.departureDate ? new Date(booking.departureDate).toLocaleDateString() : 'N/A'}</li>
        <li><strong>Number of Rooms:</strong> ${(booking.rooms && booking.rooms.length) ? booking.rooms.length : 'N/A'}</li>
        <li><strong>Adults:</strong> ${booking.totalAdults || 'N/A'}</li>
        <li><strong>Children:</strong> ${booking.totalChildren || 'N/A'}</li>
      `;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: booking.guestInfo.email,
      subject: type + ' Booking Confirmation - Silver Arcade Premier',
      html: '<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">' +
            '<h2 style="color: #333; text-align: center;">Booking Confirmation</h2>' +
            '<p>Dear ' + booking.guestInfo.name + ',</p>' +
            '<p>Thank you for your ' + type.toLowerCase() + ' booking at Silver Arcade Premier!</p>' +
            '<h3 style="color: #555;">Booking Details:</h3>' +
            '<ul>' + bookingDetails + '</ul>' +
            '<p>We look forward to welcoming you!</p>' +
            '<p style="color: #666; font-size: 14px;">' +
            'If you have any questions, please contact us at ' + (process.env.EMAIL_USER || 'our support email') + '.' +
            '</p>' +
            '</div>'
    };

    await transporter.sendMail(mailOptions);
    console.log(type + ' confirmation email sent successfully to:', booking.guestInfo.email);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};

module.exports = {
  sendConfirmationEmail
};
