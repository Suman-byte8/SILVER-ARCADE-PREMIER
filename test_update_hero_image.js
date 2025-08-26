const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Test the update room endpoint with hero image
async function testUpdateRoomWithHeroImage() {
  const roomId = '68adb0cd6ac6c4c3ae937768'; // Use the room ID from the previous test
  
  const formData = new FormData();
  
  // Add text fields
  formData.append('roomName', 'Updated Test Room 101');
  formData.append('roomType', 'Executive Deluxe Room');
  formData.append('roomCapacity', '3');
  formData.append('roomPrice', '200');
  formData.append('roomDescription', 'An updated beautiful test room');
  
  // Add hero image
  const heroImagePath = path.join(__dirname, 'test_hero.png');
  if (fs.existsSync(heroImagePath)) {
    formData.append('heroImage', fs.createReadStream(heroImagePath));
  }
  
  // Add room images
  const roomImagePath = path.join(__dirname, 'test_room.png');
  if (fs.existsSync(roomImagePath)) {
    formData.append('roomImages', fs.createReadStream(roomImagePath));
  }
  
  try {
    const response = await axios.put(`http://localhost:3000/api/rooms/admin/update-room-details/${roomId}`, formData, {
      headers: {
        ...formData.getHeaders(),
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODdhZjMxZjNmZWY1MzkxMzQzOTgxMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NjE5MjA2NiwiZXhwIjoxNzU4Nzg0MDY2fQ.KZ15FXBKBMuhGUOL1NWRBali185Um732gbFNsP_RnD8'
      }
    });
    
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

// Run the test
testUpdateRoomWithHeroImage();
