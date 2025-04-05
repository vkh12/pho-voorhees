import React, { useEffect, useState } from 'react';
import { fetchMenuItems } from '../services/api';
import './menu.css';

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    dietary: '',
  });

  useEffect(() => {
    const getMenuItems = async () => {
      const items = await fetchMenuItems(filters);
      setMenuItems(items);
    };
    getMenuItems();
  }, [filters]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className="filters">
        <select name="category" onChange={handleFilterChange}>
          <option value="">All Categories</option>
          <option value="appetizer">Appetizer</option>
          <option value="entree">Entrée</option>
          <option value="beverage">Beverage</option>
        </select>
        <select name="dietary" onChange={handleFilterChange}>
          <option value="">All Dietary Options</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten-free">Gluten-free</option>
        </select>
      </div>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id}>
            <div className="menu-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>${item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;