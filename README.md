# Airbnb Clone Project

This is Clone Airbnb Clone made by **Rajput Shivam Singh**

## Prerequisites

- Node.js (v20.13.1 or higher recommended)
- MongoDB Database (Atlas or local)
- Cloudinary Account (for image uploads)

## How to Run This Project

Follow these step-by-step instructions to get the project running on your local machine:

### 1. Clone the Repository
If you haven't already, clone this repository to your local machine:
```bash
git clone https://github.com/WhiteDevil-rss/Airbnb-clone.git
cd Airbnb-clone
```

### 2. Install Dependencies
Install all the required npm packages:
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory of the project and add the following variables:
```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```
*(Make sure to replace the placeholder values with your actual credentials.)*

### 4. Initialize Database
Before running the application, you need to populate the database with the initial dummy data. Since the project uses environment variables, you should pass the `.env` file to the initialization script (Requires Node.js v20.6+):
```bash
node --env-file=.env init/index.js
```

### 5. Run the Application
Start the server using npm:
```bash
node --env-file=.env app.js
```
The server should now be running on port 8080. You can access it by opening your browser and navigating to [http://localhost:8080](http://localhost:8080).
