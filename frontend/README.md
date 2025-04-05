# Menu Optimization Project

## Overview
The Menu Optimization Project aims to create a dynamic and filterable menu system for a Vietnamese restaurant, Phở Voorhees. This project integrates a backend API with a frontend React application, allowing users to view and filter menu items based on various criteria.

## Project Structure
The project is organized into two main directories: `backend` and `frontend`.

### Backend
- **src/app.ts**: Entry point of the backend application. Initializes the Express app, sets up middleware, and connects to the database.
- **src/controllers/menuController.ts**: Contains the `MenuController` class with methods for CRUD operations and filtering functionality for menu items.
- **src/models/menuItem.ts**: Defines the structure of a menu item in the database, including properties like name, price, category, and dietary options.
- **src/routes/menuRoutes.ts**: Sets up the routes for the menu-related API endpoints, linking them to the appropriate methods in `MenuController`.
- **src/database/connection.ts**: Handles the database connection setup, exporting a function to connect to the database.
- **package.json**: Lists the dependencies required for the backend, including Express, TypeScript, and database libraries.
- **tsconfig.json**: Specifies the TypeScript compiler options and files to include in the compilation.
- **README.md**: Documentation for the backend, including setup instructions and API usage.

### Frontend
- **public/index.html**: Main HTML file for the frontend application, serving as the entry point for the React app.
- **src/App.tsx**: Main component of the React application, setting up routing and rendering the main layout, including the Menu and Filters components.
- **src/components/Menu.tsx**: Fetches menu items from the backend and displays them, allowing for filtering based on user input.
- **src/components/Filters.tsx**: Provides UI elements for filtering the menu items, such as checkboxes or dropdowns.
- **src/services/api.ts**: Contains functions to interact with the backend API, including fetching menu items and applying filters.
- **src/styles/menu.css**: CSS styles for the Menu and Filters components, ensuring a consistent look and feel.
- **package.json**: Lists the dependencies required for the frontend, including React, React-DOM, and Axios.
- **tsconfig.json**: Specifies the TypeScript compiler options and files to include in the compilation.
- **README.md**: Documentation for the frontend, including setup instructions and component usage.

### Docker
- **docker-compose.yml**: Defines the services for the application, including the backend and database services, allowing for easy setup and management of the development environment.

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd menu-optimization-project
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the backend server:
     ```
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the `frontend` directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```
   - Start the frontend application:
     ```
     npm start
     ```

## Usage
- Access the frontend application in your browser at `http://localhost:3000`.
- Use the filtering options to view different menu items based on dietary preferences and categories.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.