# React Applicant Management System

## Overview
This application manages applicant data using React, featuring global state management with React Context. It includes functionality to add, view, update, and delete applicants.

## Features
- **Add Applicant**: A form to add new applicants to the system.
- **View Applicants**: A dashboard to view all applicants.
- **Update Applicant**: Functionality to update applicant details.
- **Delete Applicant**: Option to delete applicants from the system.

## Setup and Installation
- Clone the repository.
- Run `npm install` to install dependencies.
- Start the application with `npm start`.

## Running the MongoDB Database

This application uses MongoDB as the database, run inside a Docker container. Follow these steps to set up and run MongoDB:

1. **Pull the MongoDB Image**:
   Run the command:
   ```
   docker pull prismagraphql/mongo-single-replica:5.0.3
   ```

2. **Start MongoDB Container**:
   To start the MongoDB container with the necessary environment variables, use the following command:
   ```
   docker run --name mongo \
         -p 27017:27017 \
         -e MONGO_INITDB_ROOT_USERNAME="user" \
         -e MONGO_INITDB_ROOT_PASSWORD="pass" \
         -d prismagraphql/mongo-single-replica:5.0.3
   ```

   Replace `"user"` and `"pass"` with your desired username and password.

This will start a MongoDB instance running as a single-node replica set on port 27017. Ensure Docker is installed and running on your machine before executing these commands.

## Configuration

### Environment Variables
Create a `.env` file in your project root and add the following environment variable for the database connection:

```
DATABASE_URL="mongodb://user:pass@localhost:27017/db_name?authSource=admin&directConnection=true"
```

- Replace `user` and `pass` with your MongoDB username and password.
- `db_name` should be replaced with the name of your database.
- This URL configures your application to connect to the MongoDB database running in the Docker container.

## Usage
- **Adding Applicants**: Navigate to the 'Add Applicant' form and fill in the details.
- **Viewing Applicants**: View all applicants on the dashboard.
- **Updating Applicants**: Click the 'Edit' button next to an applicant to modify their details.
- **Deleting Applicants**: Use the 'Delete' button to remove an applicant.

## Technologies Used
- React with TypeScript
- React Context for State Management
- Next.js
- Fetch API for server communication
