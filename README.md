# Habit Tracker API

A backend API for managing user habits, built with **Node.js** and **MongoDB**. The API allows users to track their habits, manage progress, receive daily reminders, and includes admin controls for user management and habit templates.

## Features
- **JWT Authentication**: Secure login and registration using JSON Web Tokens.
- **Habit Management**: CRUD operations for user-specific habits with streaks, daily progress tracking, and frequency settings (daily, weekly, monthly).
- **Daily Reminders**: Automated daily notifications for incomplete habits using cron jobs.
- **Admin Features**: Admins can view all users and their habits, and create habit templates for users to adopt.
- **Role-based Access Control**: Admins have special privileges, while users can only manage their own habits.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building the REST API.
- **MongoDB**: NoSQL database to store habit and user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Token)**: Authentication mechanism for securing API endpoints.
- **Cron**: Scheduler for sending daily reminders.
- **Joi**: Data validation for requests.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/habit-tracker-api.git
   cd habit-tracker-api
