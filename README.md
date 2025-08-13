# MERN Real Estate App

## Project Description

The MERN Real Estate App is a full-stack web application designed to facilitate real estate transactions. It allows users to browse property listings, create new listings, update their profiles, and manage their listings. The app is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) and incorporates Firebase for file storage and authentication.

### Features

- User authentication and profile management.
- Create, update, and delete property listings.
- Browse and search for property listings.
- Responsive design using Tailwind CSS.
- State management with Redux.

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or higher)
- npm (Node Package Manager)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/MERN-realestate-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd MERN-realestate-app
   ```

### Backend Setup

1. Navigate to the `api` folder:
   ```bash
   cd api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `api` folder and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `client` folder:
   ```bash
   cd ../client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `client` folder and add the following environment variables:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Running the Application

1. Ensure both the backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:5173` to access the application.

## Folder Structure

- `api/`: Contains the backend code.
  - `controllers/`: Handles business logic for authentication, listings, and users.
  - `models/`: Defines MongoDB schemas for listings and users.
  - `utils/`: Utility functions for error handling and user verification.
- `client/`: Contains the frontend code.
  - `src/`: Main source folder for React components, pages, and Redux store.
  - `public/`: Static assets.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
