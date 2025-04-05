import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Filters from './components/Filters';
import { fetchMenuItems } from './services/api';

const App: React.FC = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filters, setFilters] = useState({ category: '', dietary: '' });

  useEffect(() => {
    const getMenuItems = async () => {
      const items = await fetchMenuItems(filters);
      setMenuItems(items);
    };
    getMenuItems();
  }, [filters]);

  return (
    <div className="App">
      <h1>Phở Voorhees Menu</h1>
      <Filters setFilters={setFilters} />
      <Menu items={menuItems} />
    </div>
  );
};

export default App;