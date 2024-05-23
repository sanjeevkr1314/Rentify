Rentify - Where Renting Meets Simplicity
Project Overview
Rentify is a web application designed to facilitate the process of finding rental properties for tenants and listing properties for landlords. The application includes features for user authentication, property listing, filtering, and more. This project was developed as part of the PRESIDIO Challenge.

Table of Contents
Features
Tech Stack
Setup Instructions
Usage
Environment Variables
Future Enhancements
Contributing

Features
Part I: Basic Application
User Authentication: Users can register as either sellers or buyers.
Seller Flow:
Post property details (e.g., place, area, number of bedrooms, bathrooms, nearby amenities).
View, update, and delete their posted properties.
Buyer Flow:
View all listed rental properties.
Filter properties based on various criteria.
Express interest in properties and view seller details.
Part II: Add-On Features
Pagination: Implemented for better navigation through property listings.
Form Validation: Ensures all necessary fields are filled out correctly.
Mandatory Login: Buyers must log in to view seller details.
Like Button: Allows buyers to like properties and tracks the count in real-time.

Tech Stack
Front-end: React
Back-end: Node.js, Express
Database: MongoDB
Authentication: JWT (JSON Web Tokens)

Setup Instructions
Prerequisites
Node.js and npm installed on your machine.
MongoDB instance running (local or cloud-based, e.g., MongoDB Atlas).

Installation
Clone the repository:
git clone <repository-url>

cd rentify
cd server
Install dependencies:
npm install

cd ../client
npm install

cd ../server
Set up environment variables:
Create a .env file in the root directory with the following variables:

MONGO_URL=your_mongo_database_url
PORT=your_desired_port
JWT_SECRET=your_jwt_secret_key
Running the Application

Start the server:
npm run server

Start the client:
cd client
npm run dev

The application should now be running on http://localhost:<PORT>.

Usage
Register: Create an account as a seller or buyer.
Login: Access your account to post or view properties.
Post Property (Sellers): Add property details to list a rental.
View Properties (Buyers): Browse available rental properties and express interest.
Like Properties: Like your favorite properties to keep track of them.
Environment Variables
Ensure your .env file is configured with the correct values:

MONGO_URL: URL for your MongoDB database.
PORT: Port number for running the backend server.
JWT_SECRET: Secret key for signing JWT tokens.

Future Enhancements
1.Add more advanced filtering options.
2.Implement a messaging system for direct communication between buyers and sellers.
3.Enhance the UI/UX for better user experience.
4.Deployment

Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.
