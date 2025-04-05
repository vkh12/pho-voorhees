import React, { useState, useEffect } from 'react';
import { fetchMenuItems } from '../services/api';

const Filters = ({ setFilteredItems }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [dietaryOptions, setDietaryOptions] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const items = await fetchMenuItems();
      const uniqueCategories = [...new Set(items.map(item => item.category))];
      setCategories(uniqueCategories);

      const uniqueDietaryOptions = [...new Set(items.flatMap(item => item.dietaryOptions))];
      setDietaryOptions(uniqueDietaryOptions);
    };

    loadCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    filterItems(event.target.value, selectedDietary);
  };

  const handleDietaryChange = (event) => {
    const value = event.target.value;
    setSelectedDietary(prev => 
      prev.includes(value) ? prev.filter(option => option !== value) : [...prev, value]
    );
    filterItems(selectedCategory, selectedDietary);
  };

  const filterItems = (category, dietary) => {
    // Assuming fetchMenuItems fetches all items and filters them based on selected criteria
    fetchMenuItems(category, dietary).then(filtered => {
      setFilteredItems(filtered);
    });
  };

  return (
    <div className="filters">
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <div className="dietary-options">
        {dietaryOptions.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              checked={selectedDietary.includes(option)}
              onChange={handleDietaryChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;