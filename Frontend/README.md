# Full Stack Developer Internship Task

This is a full stack web application built as part of a Full Stack Developer (React) Internship Assessment. The application allows users to register via a form and view all registered users.


- **Frontend**: React, Axios, Tailwind CSS, React Router DOM
- **Backend**: Node.js, Express.js
- **Data Storage**: In-memory array (no database used)


## 📁 Folder Structure


✅ Frontend
- Home page with a welcome message
- User Registration Form (with validation)
- Display page to list all registered users in a table
- Uses **Axios** to communicate with backend API
- Styled using **Tailwind CSS**

✅ Backend
- `POST /users` – Register a new user
- `GET /users` – Retrieve all users
- Uses in-memory array to store users (no DB required)
- CORS enabled for frontend communication

--Backend Setup

cd backend
npm install
▶️ Run the Backend
node index.js
Server will run on: http://localhost:5000

--Frontend Setup
cd ../frontend
npm install
▶️ Run the Frontend
npm run dev
App will run on: http://localhost:5173
