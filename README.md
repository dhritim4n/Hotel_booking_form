# Hotel Booking Form

A full-stack hotel booking application built with React, Vite, Express.js, and MongoDB. This project allows users to book hotel rooms, view available bookings, and manage reservations.

## Features

- **Frontend**: Built with React and Vite for a fast and modern user experience.
  - Responsive design with Tailwind CSS.
  - Components for booking forms, hotel hero section, and about section.
  - Toast notifications for user feedback.
  - API integration for booking submission.

- **Backend**: Powered by Express.js and MongoDB.
  - RESTful API for managing bookings.
  - Middleware for input validation using `express-validator`.
  - MongoDB models for users and bookings.
  - Environment variable support with `dotenv`.

## Project Structure

```bash
hotel-booking-app
├── frontend                # Frontend application
│   ├── public              # Public assets
│   └── src                 # Source files
│       ├── components      # React components
│       ├── pages           # Application pages
│       ├── App.jsx         # Main app component
│       └── index.jsx       # Entry point
└── backend                 # Backend application
    ├── config              # Configuration files
    ├── controllers         # Request handlers
    ├── middleware          # Custom middleware
    ├── models              # MongoDB models
    ├── routes              # API routes
    ├── .env                # Environment variables
    ├── server.js           # Entry point
    └── package.json        # Backend dependencies
```

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/hotel-booking-app.git
   cd hotel-booking-app
   ```

2. **Install dependencies**:

   For the frontend and backend:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Copy the example environment file and update the values:

   ```bash
   cp backend/.env.example backend/.env
   ```

4. **Run the development server**:

   For the frontend:

   ```bash
   cd frontend
   npm run dev
   ```

   For the backend:

   ```bash
   cd backend
   npm run dev
   ```

5. **Access the application**:

   Open your browser and go to `http://localhost:5173` for the frontend and `http://localhost:5000` for the backend.

## Technologies Used

- **Frontend**:
  - React
  - Vite
  - Tailwind CSS
  - Axios

- **Backend**:
  - Express.js
  - MongoDB
  - Mongoose
  - dotenv
  - express-validator


