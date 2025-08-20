# SILVER ARCADE PREMIER

A comprehensive gaming arcade management system with client portal, admin panel, and backend server.

## Project Overview

The Silver Arcade Premier platform consists of three main components:
- Client Portal: User-facing website for bookings and information
- Admin Panel: Management dashboard for system control
- Server: Backend API handling data and business logic

## Client Portal Features

### Core Components
- Dynamic Image Carousel (Swiper.js)
  - Transparent SemiNavbar integration
  - Custom navigation controls
  - Infinite loop functionality
  
- Booking System
  - Room reservations
  - Event bookings
  - Membership management
  
- Content Sections
  - Distinctive Brands showcase
  - Curated Offers display
  - Interactive Facilities page
  - Why Book With Us section
  - Contact form with map integration

### UI Enhancements
- Responsive design across devices
- Tailwind CSS styling
- GSAP animations
- Modern component architecture

## Admin Panel Features

### Core Functionality
- Authentication System
  - Login/Signup pages
  - Forgot password functionality
  - Role-based access

- Dashboard
  - Statistical cards
  - Data visualization
  - Favorite items tracking

- Management Modules
  - Room management
  - Menu management
  - Content management
  - User management

### Technical Features
- Dark/Light theme toggle
- Local storage persistence
- Protected routes
- Responsive sidebar navigation

## Server API Features

### User Management
- Registration & Authentication
  - JWT token generation
  - Password hashing
  - Role management

### Content Management
- Room Management
  - Image upload with Cloudinary
  - Room details storage
  - Availability tracking

- Hero Banner Management
  - Banner content CRUD
  - Image processing
  - Content scheduling

- Curated Offers
  - Offer management
  - Dynamic content updates
  - Image handling

### Security Features
- JWT authentication
- Role-based access control
- Activity logging
- Secure password handling

## Technology Stack

### Frontend (Client & Admin)
- React 18
- Tailwind CSS
- Swiper.js
- GSAP
- React Router v6
- Chart.js
- React Icons
- shadcn/ui

### Backend
- Node.js
- Express
- MongoDB
- JWT
- Cloudinary
- Multer
- Streamifier

## Installation Guide

1. Clone the repository:
```bash
git clone https://github.com/yourusername/SILVER-ARCADE-PREMIER.git
cd SILVER-ARCADE-PREMIER
```

2. Install dependencies for each component:

```bash
# Client Portal
cd Client
npm install

# Admin Panel
cd ../Admin\ Panel
npm install

# Server
cd ../Server
npm install
```

3. Configure environment variables:
Create `.env` files in each directory:

```env
# Client .env
VITE_API_URL=http://localhost:3000

# Admin Panel .env
VITE_API_URL=http://localhost:3000
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name

# Server .env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Start development servers:

```bash
# In separate terminals:

# Client
cd Client
npm run dev

# Admin Panel
cd ../Admin\ Panel
npm run dev

# Server
cd ../Server
npm run dev
```

## Project Structure

```
SILVER-ARCADE-PREMIER/
├── Client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── context/
├── Admin Panel/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── context/
└── Server/
    ├── controllers/
    ├── models/
    ├── routes/
    └── middleware/
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is licensed under the MIT License.