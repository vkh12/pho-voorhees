import { Request, Response } from 'express';
import MenuItem from '../models/menuItem';

class MenuController {
    // Get all menu items with optional filtering
    async getMenuItems(req: Request, res: Response) {
        try {
            const { category, dietary } = req.query;
            const filter: any = {};

            if (category) {
                filter.category = category;
            }

            if (dietary) {
                filter.dietaryOptions = { $in: dietary.split(',') };
            }

            const menuItems = await MenuItem.find(filter);
            res.status(200).json(menuItems);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching menu items', error });
        }
    }

    // Create a new menu item
    async createMenuItem(req: Request, res: Response) {
        try {
            const newItem = new MenuItem(req.body);
            const savedItem = await newItem.save();
            res.status(201).json(savedItem);
        } catch (error) {
            res.status(400).json({ message: 'Error creating menu item', error });
        }
    }

    // Update an existing menu item
    async updateMenuItem(req: Request, res: Response) {
        try {
            const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedItem) {
                return res.status(404).json({ message: 'Menu item not found' });
            }
            res.status(200).json(updatedItem);
        } catch (error) {
            res.status(400).json({ message: 'Error updating menu item', error });
        }
    }

    // Delete a menu item
    async deleteMenuItem(req: Request, res: Response) {
        try {
            const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
            if (!deletedItem) {
                return res.status(404).json({ message: 'Menu item not found' });
            }
            res.status(200).json({ message: 'Menu item deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting menu item', error });
        }
    }
}

export default new MenuController();