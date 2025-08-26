const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODdhZjMxZjNmZWY1MzkxMzQzOTgxMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NjE5MjA2NiwiZXhwIjoxNzU4Nzg0MDY2fQ.KZ15FXBKBMuhGUOL1NWRBali185Um732gbFNsP_RnD8';
const baseURL = 'http://localhost:3000/api/content/about/admin/content-blocks';

async function testAPI() {
  try {
    console.log('Testing missing description...');
    
    const response = await axios.post(baseURL, {
      title: 'Missing Description Test'
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Response:', response.data);
  } catch (error) {
    console.log('Error response:', error.response?.data || error.message);
  }
}

testAPI();
