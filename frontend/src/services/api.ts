import axios from 'axios';

const API_URL = 'http://localhost:5000/api/menu'; // Adjust the URL according to your backend setup

export const fetchMenuItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

export const fetchFilteredMenuItems = async (filters) => {
  try {
    const response = await axios.get(API_URL, { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching filtered menu items:', error);
    throw error;
  }
};