const express = require('express');
const connectDB = require('./db/connectDB');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Import routes

// User routes
const userRoutes = require('./routes/user.route');
// admin routes
const adminRoutes = require('./routes/admin.route');
// Home page content management routes
const homeRoutes = require('./routes/Content Change Routes/home.route');
// Room management routes
const roomsRoutes = require('./schema/Client Content Models/Room Management/rooms.route');
// Facilities routes
const facilitiesRoutes = require('./routes/Content Change Routes/facilities.route');
// About page routes
const aboutRoutes = require('./routes/Content Change Routes/about.route');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/content/home', homeRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/facilities', facilitiesRoutes);
app.use('/api/content/about', aboutRoutes)

// Start the server
connectDB().then(() => {
    app.listen(process.env.PORT)
    console.log(`Server is running on port ${process.env.PORT}`);

})
.catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
});

module.exports = app;