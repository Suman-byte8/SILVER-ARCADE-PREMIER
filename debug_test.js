const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODdhZjMxZjNmZWY1MzkxMzQzOTgxMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NjE5MjA2NiwiZXhwIjoxNzU4Nzg0MDY2fQ.KZ15FXBKBMuhGUOL1NWRBali185Um732gbFNsP_RnD8';
const baseURL = 'http://localhost:3000/api/content/about';

async function debugResponse() {
  try {
    console.log('Testing ADD Content Block to see response structure...');
    
    // First, get the current about page to see what's in the database
    const getResponse = await axios.get(`${baseURL}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    
    console.log('Current About Page contentBlocks:', getResponse.data.contentBlocks ? getResponse.data.contentBlocks.length : 0);
    
    // Add a new content block
    const response = await axios.post(`${baseURL}/admin/content-blocks`, {
      title: 'Debug Content Block',
      description: 'This is for debugging response structure'
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Add Response:', JSON.stringify(response.data, null, 2));
    
    // Check if the item has _id
    console.log('Item has _id:', response.data._id ? 'Yes' : 'No');
    console.log('Item structure:', Object.keys(response.data));
    
    // Get the about page again to see if it was saved
    const getResponse2 = await axios.get(`${baseURL}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    
    console.log('After add - contentBlocks count:', getResponse2.data.contentBlocks.length);
    if (getResponse2.data.contentBlocks.length > 0) {
      console.log('Last content block:', JSON.stringify(getResponse2.data.contentBlocks[getResponse2.data.contentBlocks.length - 1], null, 2));
    }
    
  } catch (error) {
    console.log('Error:', error.response?.data || error.message);
  }
}

debugResponse();
