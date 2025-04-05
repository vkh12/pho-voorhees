# Menu Optimization Project - Backend

This project is designed to optimize the menu management for a restaurant by integrating a database for menu items while maintaining filterable functionality.

## Project Structure

- **src/app.ts**: Entry point of the backend application. Initializes the Express app, sets up middleware, and connects to the database.
- **src/controllers/menuController.ts**: Contains the `MenuController` class with methods for handling CRUD operations for menu items, including filtering functionality.
- **src/models/menuItem.ts**: Defines the `MenuItem` model, representing the structure of a menu item in the database (name, price, category, dietary options).
- **src/routes/menuRoutes.ts**: Sets up the routes for the menu-related API endpoints, linking them to the appropriate methods in `MenuController`.
- **src/database/connection.ts**: Handles the database connection setup, exporting a function to connect to the database using a library like Mongoose or Sequelize.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd menu-optimization-project/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure the database**:
   Update the database connection settings in `src/database/connection.ts` as needed.

4. **Run the application**:
   ```
   npm start
   ```

## API Usage

- **GET /api/menu**: Fetch all menu items with optional filtering parameters.
- **POST /api/menu**: Create a new menu item.
- **PUT /api/menu/:id**: Update an existing menu item by ID.
- **DELETE /api/menu/:id**: Delete a menu item by ID.

## Notes

- Ensure that the database is running before starting the backend application.
- Use Postman or similar tools to test the API endpoints.

For more detailed information on the frontend setup and usage, please refer to the frontend README.md file.