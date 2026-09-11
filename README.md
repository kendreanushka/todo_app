# 📝 2DO — Full-Stack To-Do App

A simple full-stack To-Do application built with **React** and **Spring Boot**.  
Users can add tasks with a date and time, mark tasks as completed, and delete tasks.

## 🚀 Live Demo

### Frontend — Vercel
https://todo-app-rouge-one-18.vercel.app/

### Backend — Render
https://todo-app-backend-ck6q.onrender.com/

## ✨ Features

- ➕ Add a new task
- 📅 Set task date
- ⏰ Set task time
- ✅ Mark task as completed
- 🗑️ Delete a task
- 🔄 Fetch tasks from backend
- 🌐 React frontend connected to Spring Boot REST API

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- JavaScript
- HTML
- CSS

### Backend
- Java
- Spring Boot
- Spring Web
- REST API

### Deployment
- **Frontend:** Vercel
- **Backend:** Render
- **Source Code:** GitHub

## 🔗 API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Add a new task |
| PUT | `/tasks/{id}` | Mark/unmark a task as completed |
| DELETE | `/tasks/{id}` | Delete a task |

## 📂 Project Structure

```text
todo_app/
│
├── src/
│   └── main/
│       └── java/
│           └── com/
│               └── anushka/
│                   └── todo_app/
│                       ├── Task.java
│                       ├── TaskController.java
│                       └── TodoAppApplication.java
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskItem.jsx
│   │   │
│   │   ├── services/
│   │   │   └── taskService.js
│   │   │
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Dockerfile
├── pom.xml
└── README.md
```

## 🔄 How It Works

```text
User
  ↓
React Frontend
  ↓
REST API Request
  ↓
Spring Boot Backend
  ↓
Task Data
  ↓
JSON Response
  ↓
React Frontend
```

The React frontend sends HTTP requests to the Spring Boot REST API.

For example:

```text
Add Task
   ↓
POST /tasks
   ↓
Spring Boot
   ↓
Task added
   ↓
JSON response
   ↓
Task displayed in React
```

## ☁️ Deployment

### Frontend — Vercel

The React/Vite frontend is deployed on **Vercel**.

```text
GitHub
   ↓
Vercel
   ↓
React/Vite Build
   ↓
Live Frontend
```

### Backend — Render

The Spring Boot backend is deployed on **Render** using Docker.

```text
GitHub
   ↓
Render
   ↓
Docker Build
   ↓
Spring Boot Application
   ↓
Live REST API
```

Both deployments are connected to the GitHub repository, so pushing changes to `main` can trigger automatic deployments.

## ⚠️ Note

The backend currently stores tasks in an **in-memory ArrayList**.

Therefore, tasks are not permanently stored in a database. If the backend restarts or redeploys, the existing tasks are cleared.

## 👩‍💻 Author

**Anushka**

Computer Engineering Student

GitHub:  
https://github.com/kendreanushka