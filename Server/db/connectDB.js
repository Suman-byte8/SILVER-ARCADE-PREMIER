const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            maxPoolSize: 10, // Maximum number of sockets in the connection pool
            minPoolSize: 2,  // Minimum number of sockets to maintain
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            serverSelectionTimeoutMS: 5000, // Timeout for server selection
            heartbeatFrequencyMS: 10000, // How often to check connection status
            retryWrites: true,
            w: 'majority',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`📦 MongoDB Connected: ${conn.connection.host}`);
        console.log(`📊 Connection pool size: ${conn.connection.maxPoolSize}`);
        
        // Monitor connection events
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected, attempting to reconnect...');
        });

        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB reconnected successfully');
        });

    } catch (error) {
        console.error(`❌ Connection Error: ${error.message}`);
        console.log('Retrying connection in 5 seconds...');
        setTimeout(connectDB, 5000);
    }
};

// Enable query debugging in development
if (process.env.NODE_ENV === 'development') {
    mongoose.set('debug', (collectionName, method, query, doc) => {
        console.log(`MongoDB: ${collectionName}.${method}`, {
            query: JSON.stringify(query),
            doc: doc ? 'with doc' : 'no doc'
        });
    });
}

module.exports = connectDB;
