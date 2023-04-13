# Weather App Backend

## Overview
This is a backend application for [Weahter app](https://github.com/Mason-Yao/weather-app.git) that allows users to search for weather information for a given city. This repository contains the backend server for the application, which provides REST API endpoints for retrieving weather data, user authentication and registration, and managing user profiles.

## Technologies Used
* Node.js
* Express
* MongoDB
* Mongoose
* Passport.js local stratege
* Passport.js Google OAuth2.0 stratege
* Weather API

## Getting Started
### Prerequisites
* Node.js v18
* MongoDB v6
* Weather API key (get one at https://www.weatherapi.com/)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/Mason-Yao/weather-server.git
   ```

2. Install dependencies:
   ```
   cd weather-server
   npm install
   ```

3. Set up environment variables:
   Change the content in .env file with your own values.

4. Start the application with nodemon monitoring
   ```
   npm start dev
   ```

5. The application should now be running on FRONTEND_URL with  default value http://localhost:13000 if no evironment variables passed over.
   

