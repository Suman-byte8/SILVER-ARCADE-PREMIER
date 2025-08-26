const axios = require('axios');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ODdhZjMxZjNmZWY1MzkxMzQzOTgxMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1NjE5MjA2NiwiZXhwIjoxNzU4Nzg0MDY2fQ.KZ15FXBKBMuhGUOL1NWRBali185Um732gbFNsP_RnD8';
const baseURL = 'http://localhost:3000/api/content/about';

async function testAllFunctionality() {
  console.log('=== COMPREHENSIVE ABOUT PAGE API TESTING ===\n');

  try {
    // Test 1: Get About Page
    console.log('1. Testing GET About Page...');
    const getResponse = await axios.get(`${baseURL}/`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ GET About Page successful');
    const aboutPage = getResponse.data;
    console.log('   Content Blocks count:', aboutPage.contentBlocks.length);
    console.log('   Amenities count:', aboutPage.amenities.length);
    console.log('   Services count:', aboutPage.services.length);

    // Test 2: Add Content Block
    console.log('\n2. Testing ADD Content Block...');
    const addContentResponse = await axios.post(`${baseURL}/admin/content-blocks`, {
      title: 'Test Content Block',
      description: 'This is a test content block description'
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('✅ Content Block added successfully');
    const contentBlockId = addContentResponse.data[0]._id;
    console.log('   Content Block ID:', contentBlockId);

    // Test 3: Update Content Block
    console.log('\n3. Testing UPDATE Content Block...');
    const updateContentResponse = await axios.put(`${baseURL}/admin/content-blocks/${contentBlockId}`, {
      title: 'Updated Content Block',
      description: 'This is an updated description'
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('✅ Content Block updated successfully');

    // Test 4: Add Amenity
    console.log('\n4. Testing ADD Amenity...');
    const addAmenityResponse = await axios.post(`${baseURL}/admin/amenities`, {
      title: 'Test Amenity',
      description: 'This is a test amenity description'
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('✅ Amenity added successfully');
    const amenityId = addAmenityResponse.data[0]._id;
    console.log('   Amenity ID:', amenityId);

    // Test 5: Update Amenity
    console.log('\n5. Testing UPDATE Amenity...');
    const updateAmenityResponse = await axios.put(`${baseURL}/admin/amenities/${amenityId}`, {
      title: 'Updated Amenity',
      description: 'This is an updated amenity description'
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('✅ Amenity updated successfully');

    // Test 6: Add Service
    console.log('\n6. Testing ADD Service...');
    const addServiceResponse = await axios.post(`${baseURL}/admin/services`, {
      title: 'Test Service',
      description: 'This is a test service description'
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('✅ Service added successfully');
    const serviceId = addServiceResponse.data[0]._id;
    console.log('   Service ID:', serviceId);

    // Test 7: Update Service
    console.log('\n7. Testing UPDATE Service...');
    const updateServiceResponse = await axios.put(`${baseURL}/admin/services/${serviceId}`, {
      title: 'Updated Service',
      description: 'This is an updated service description'
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    console.log('✅ Service updated successfully');

    // Test 8: Test validation - Missing required fields
    console.log('\n8. Testing VALIDATION - Missing required fields...');
    try {
      await axios.post(`${baseURL}/admin/content-blocks`, {
        title: 'Missing Description'
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      if (error.response?.status === 400) {
        console.log('✅ Validation working correctly - 400 error for missing fields');
      } else {
        console.log('❌ Unexpected error:', error.response?.data);
      }
    }

    // Test 9: Get updated About Page to verify all changes
    console.log('\n9. Testing GET About Page after all changes...');
    const finalGetResponse = await axios.get(`${baseURL}/`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ Final GET successful');
    const finalAboutPage = finalGetResponse.data;
    console.log('   Final Content Blocks count:', finalAboutPage.contentBlocks.length);
    console.log('   Final Amenities count:', finalAboutPage.amenities.length);
    console.log('   Final Services count:', finalAboutPage.services.length);

    console.log('\n=== ALL TESTS COMPLETED SUCCESSFULLY ===');

  } catch (error) {
    console.log('❌ Error during testing:', error.response?.data || error.message);
  }
}

testAllFunctionality();
