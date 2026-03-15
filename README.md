# Full Stack Todo App
A simple full-stack **Task Management / Todo Application** that allows users to create an account, log in, and manage their daily tasks.
The application supports adding tasks, editing them, deleting them, marking them as completed, and tracking progress.

## Live Demo
Frontend: todo-frontend-cyan-theta.vercel.app
Backend API: https://todo-backend-lotq.onrender.com

## Features
* User Signup and Login
* Add Tasks with Title, Description, and Deadline
* Edit Tasks
* Delete Tasks
* Mark Tasks as Completed
* Progress Bar showing completed tasks
* Task Counter (Total / Completed / Pending)
* Deadline based task sorting
* Overdue task detection
* Logout functionality

## Tech Stack
Frontend
-> HTML
->  CSS
-> JavaScript

Backend
-> Node.js
-> Express.js

Database
-> MongoDB Atlas

Deployment
-> Frontend: Vercel
-> Backend: Render

Version Control
-> Git & GitHub

## Project Structure
todo-fullstack
│
├── frontend
│   ├── login.html
│   ├── signup.html
│   └── dashboard.html
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── routes
│
└── README.md

## How to Run Locally

1. Clone the repository
git clone https://github.com/Tejaswini-1407/todo-fullstack.git

2. Navigate to backend folder
cd backend

3. Install dependencies
npm install

4. Create a `.env` file
MONGO_URI=mongodb://dbto-do:mypassword123@ac-ftqn4uh-shard-00-00.7hjwmpb.mongodb.net:27017,ac-ftqn4uh-shard-00-01.7hjwmpb.mongodb.net:27017,ac-ftqn4uh-shard-00-02.7hjwmpb.mongodb.net:27017/?ssl=true&replicaSet=atlas-jv6st2-shard-0&authSource=admin&appName=todocluster
JWT_SECRET=mysecretkey

5. Start the server
node server.js

6. Open the frontend HTML files in a browser.

## Future Improvements

* Task filtering (All / Completed / Pending / Overdue)
* Dark mode
* Mobile responsive UI
* JWT authentication
* Task categories or priorities

## Author
Kumbha Sai Lakshmi Tejaswini



