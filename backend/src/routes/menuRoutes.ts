import { Router } from 'express';
import MenuController from '../controllers/menuController';

const router = Router();
const menuController = new MenuController();

// Route to get all menu items with optional filtering
router.get('/menu', menuController.getAllMenuItems);

// Route to get a specific menu item by ID
router.get('/menu/:id', menuController.getMenuItemById);

// Route to create a new menu item
router.post('/menu', menuController.createMenuItem);

// Route to update an existing menu item
router.put('/menu/:id', menuController.updateMenuItem);

// Route to delete a menu item
router.delete('/menu/:id', menuController.deleteMenuItem);

export default router;