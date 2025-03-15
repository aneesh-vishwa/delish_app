# Delish App

Delish App is a full-stack food ordering application. The project is structured into two main parts:

- **Backend** (Node.js with Express.js)
- **Frontend** (React.js)

## Project Structure

```
Delish_App
│── backend
│   │── node_modules
│   │── src
│   │   │── config
│   │   │── constants
│   │   │── helpers
│   │   │── middleware
│   │   │── models
│   │   │── routers
│   │   │── data.js
│   │── server.js
│   │── .gitignore
│   │── jsconfig.json
│   │── package-lock.json
│   │── package.json
│
│── frontend
│   │── node_modules
│   │── public
│   │   │── foods/
│   │   │── icons/
│   │   │── favicon.ico
│   │   │── FoodDelivery.png
│   │   │── index.html
│   │   │── layers-2x.png
│   │   │── layers.png
│   │   │── loading.svg
│   │   │── logo192.png
│   │   │── logo512.png
│   │   │── manifest.json
│   │   │── marker-icon-2x.png
│   │   │── marker-icon.png
│   │   │── marker-shadow.png
│   │   │── robots.txt
│   │   │── star-empty.svg
│   │   │── star-full.svg
```

## Backend

The backend is built using **Node.js** and **Express.js**. It includes:
- **Routes** for handling API requests.
- **Middleware** for authentication and request processing.
- **Models** for handling database schemas.
- **Helpers** for utility functions.
- **Config** files for environment and settings.

### Setup Instructions
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## Frontend

The frontend is built using **React.js** and follows a structured public asset folder.

### Setup Instructions
1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Features
- User authentication
- Food listing with categories
- Cart functionality
- Order tracking
- Responsive UI

## License
This project is licensed under the MIT License.

