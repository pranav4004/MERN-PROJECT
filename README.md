# Social Media Web Application

## Overview
This project is a social media web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to register, add friends, post pictures, and view their resumes. 

## Features
- **User Registration and Authentication**: Secure registration and login functionality.
- **Add Friends**: Users can search for and add friends.
- **Post Pictures**: Users can upload and share pictures.
- **View Resumes**: Users can upload and view resumes in their profiles.
- **Responsive Design**: The application is optimized for both desktop and mobile devices.

## Technologies Used
- **MongoDB**: Database to store user information, posts, and resumes.
- **Express.js**: Backend framework to build the RESTful API.
- **React**: Frontend library to build the user interface.
- **Node.js**: Runtime environment to run the backend server.

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)
- MongoDB

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/social-media-app.git
    cd social-media-app
    ```

2. Navigate to the `server` directory:
    ```sh
    cd server
    ```

3. Install backend dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the `server` directory and add the following environment variables:
    ```plaintext
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup
1. Open a new terminal window and navigate to the `client` directory:
    ```sh
    cd client
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## Usage

### Register and Login
- Open the application in your browser.
- Register a new account or login with an existing one.

### Adding Friends
- Use the search functionality to find other users.
- Send friend requests and accept requests from others.

### Posting Pictures
- Navigate to the posts section.
- Upload pictures to share with friends.

### Viewing Resumes
- Go to your profile or a friend's profile to view uploaded resumes.

## Project Structure
- `server/`: Contains the backend code.
  - `models/`: Mongoose models.
  - `routes/`: Express routes.
  - `controllers/`: Request handlers.
  - `middlewares/`: Custom middlewares.
  - `config/`: Configuration files.
- `client/`: Contains the frontend code.
  - `src/`: Main source code directory.
    - `components/`: Reusable React components.
    - `pages/`: React components for different pages.
    - `services/`: API service functions.
    - `context/`: Context API for state management.
    - `styles/`: CSS and styling files.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries or issues, please contact pranavsampat123@gmail.com.
