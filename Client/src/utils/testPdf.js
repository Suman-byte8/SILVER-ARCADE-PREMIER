import { downloadConfirmationPDF } from './pdfGenerator';

// Test data for PDF generation
const testBookingData = {
  _id: 'TEST123456',
  typeOfReservation: 'Wedding',
  reservationDate: '2024-12-25T14:00:00Z',
  reservationEndDate: '2024-12-25T22:00:00Z',
  numberOfGuests: 150,
  numberOfRooms: 5,
  guestInfo: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890'
  },
  additionalDetails: 'We would like a special cake and floral arrangements for the wedding ceremony.'
};

// Test the PDF generation
const testPDF = () => {
  console.log('Testing PDF generation...');
  try {
    downloadConfirmationPDF(testBookingData, 'meeting');
    console.log('PDF generation successful! Check your downloads folder.');
  } catch (error) {
    console.error('PDF generation failed:', error);
  }
};

// Run test
testPDF();
