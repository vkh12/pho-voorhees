import { Schema, model } from 'mongoose';

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dietaryOptions: {
    type: [String],
    enum: ['Vegan', 'Vegetarian', 'Gluten-Free', 'None'],
    default: ['None'],
  },
  description: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

const MenuItem = model('MenuItem', menuItemSchema);

export default MenuItem;