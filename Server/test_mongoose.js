const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// Define a simple schema for testing
const TestSchema = new mongoose.Schema({
  name: String,
  items: [{
    title: String,
    description: String
  }]
});

const TestModel = mongoose.model('Test', TestSchema);

async function testMongooseArray() {
  try {
    // Create a test document
    let testDoc = await TestModel.findOne();
    if (!testDoc) {
      testDoc = await TestModel.create({
        name: 'Test Document',
        items: []
      });
      console.log('Created test document');
    }

    console.log('Before adding item - items count:', testDoc.items.length);

    // Add an item to the array
    testDoc.items.push({
      title: 'Test Item',
      description: 'Test Description'
    });

    await testDoc.save();
    console.log('After adding item - items count:', testDoc.items.length);

    // Check if the item has _id
    if (testDoc.items.length > 0) {
      const lastItem = testDoc.items[testDoc.items.length - 1];
      console.log('Last item has _id:', lastItem._id ? 'Yes' : 'No');
      console.log('Last item structure:', Object.keys(lastItem));
    }

  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    mongoose.connection.close();
  }
}

testMongooseArray();
