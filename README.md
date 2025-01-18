# Todo List RESTful API

This project is a RESTful API for managing a to-do list. It allows users to register, log in, and perform CRUD operations on their to-do items. The API incorporates user authentication, data validation, pagination, and filtering to provide a secure and user-friendly experience.

---

## Features

- User registration and authentication using JSON Web Tokens (JWT).
- CRUD operations for managing to-do items.
- Pagination and filtering for to-do items.
- Data validation for all endpoints.
- Secure password hashing with bcrypt.
- Error handling and status codes for robustness.
- MongoDB database integration for storing user and to-do data.

---

## Technologies Used

- **Backend Framework:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Validation:** Joi
- **Environment Management:** dotenv
- **Security:** bcrypt for password hashing

---

## Endpoints

### User Endpoints

#### Register

- **URL:** `/register`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@doe.com",
    "password": "password"
  }
  ```
- **Response:**
  ```json
  {
    "token": "<JWT_TOKEN>"
  }
  ```

#### Login

- **URL:** `/login`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "john@doe.com",
    "password": "password"
  }
  ```
- **Response:**
  ```json
  {
    "token": "<JWT_TOKEN>"
  }
  ```

### Todo Endpoints

#### Create a To-Do Item

- **URL:** `/todos`
- **Method:** `POST`
- **Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Request Body:**
  ```json
  {
    "title": "Buy groceries",
    "description": "Buy milk, eggs, and bread"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Buy milk, eggs, and bread"
  }
  ```

#### Update a To-Do Item

- **URL:** `/todos/:id`
- **Method:** `PUT`
- **Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Request Body:**
  ```json
  {
    "title": "Buy groceries",
    "description": "Buy milk, eggs, bread, and cheese"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Buy milk, eggs, bread, and cheese"
  }
  ```

#### Delete a To-Do Item

- **URL:** `/todos/:id`
- **Method:** `DELETE`
- **Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Response:**
  - **Status Code:** `204 No Content`

#### Get All To-Do Items

- **URL:** `/todos`
- **Method:** `GET`
- **Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Query Parameters:**
  - `page`: Page number (e.g., `?page=1`)
  - `limit`: Number of items per page (e.g., `?limit=10`)
  - `term`: Filter term for title or status (optional, e.g., `?term=grocery`)
- **Response:**
  ```json
  {
    "data": [
      {
        "id": 1,
        "title": "Buy groceries",
        "description": "Buy milk, eggs, and bread"
      },
      {
        "id": 2,
        "title": "Pay bills",
        "description": "Pay electricity and water bills"
      }
    ],
    "page": 1,
    "limit": 10,
    "total": 2
  }
  ```

#### Get a Single To-Do Item

- **URL:** `/todos/:id`
- **Method:** `GET`
- **Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Buy groceries",
    "description": "Buy milk, eggs, and bread"
  }
  ```

---

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/07krW5Hnr5ghy/todo-api
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables in a `.env` file:

   ```env
   PORT=3000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_secret_key>
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Access the API at:
   ```
   http://localhost:3000
   ```

---

## Project url

https://roadmap.sh/projects/todo-list-api
