# Task Manager RESTful API

A simple RESTful API using Node.js and Express.js to manage a collection of in-memory tasks.  
It supports basic **CRUD operations**, validation, error handling, and `method-override` for HTML form compatibility.

---

##  Features

- Create, Read, Update, Delete tasks (CRUD)
- In-memory task storage (no database required)
- Field validation (`title` and `description` are required)
- `method-override` for HTML form support of PUT and DELETE
- Optional pagination for `GET /tasks`
- Proper HTTP status codes and error messages

---

##  Technologies Used

- Node.js
- Express.js
- UUID (for generating unique task IDs)
- method-override (for supporting PUT & DELETE from forms)

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Sudarshankale/internship-Task.git
```

# 2. Install dependencies

```
-npm install
```

# 3. Start the server

-nodemon index.js

# Server will start on:

http://localhost:8080/tasks


All endpoints below are relative to this base URL.

---

##  Endpoints Summary

| Method | Endpoint        | Description                    |
|--------|------------------|--------------------------------|
| GET    | `/tasks`         | Retrieve all tasks             |
| GET    | `/tasks/:id`     | Get a task by ID               |
| POST   | `/tasks`         | Create a new task              |
| PUT    | `/tasks/:id`     | Update a task by ID            |
| DELETE | `/tasks/:id`     | Delete a task by ID            |

---