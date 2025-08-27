const Facility = require('./schema/Client Content Models/Our Facilities/facilities.model');
const cloudinary = require('./config/cloudinary');
const streamifier = require('streamifier');

// Test the uploadToCloudinary function
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: 'silver-arcade-premier-facilities',
        transformation: [{ width: 1024, crop: 'limit' }, { quality: 'auto' }],
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(uploadStream);
  });
};

// Test creating a facility without image
async function testCreateFacility() {
  try {
    const facilityData = {
      title: "Test Facility",
      subtitle: "Test Subtitle",
      description: "Test Description",
      path: "test-path",
      order: 0,
      isActive: true,
      image: ""
    };

    const facility = new Facility(facilityData);
    await facility.save();
    console.log("Facility created successfully:", facility);
    return facility;
  } catch (error) {
    console.error("Error creating facility:", error.message);
    console.error("Full error:", error);
    throw error;
  }
}

// Test the upload function
async function testUpload() {
  try {
    // Create a simple buffer for testing
    const testBuffer = Buffer.from('test image content');
    const result = await uploadToCloudinary(testBuffer);
    console.log("Upload successful:", result);
    return result;
  } catch (error) {
    console.error("Upload error:", error.message);
    console.error("Full error:", error);
    throw error;
  }
}

// Run tests
async function runTests() {
  try {
    console.log("Testing facility creation...");
    await testCreateFacility();
    
    console.log("Testing upload function...");
    await testUpload();
    
    console.log("All tests passed!");
  } catch (error) {
    console.error("Test failed:", error);
    process.exit(1);
  }
}

runTests();
