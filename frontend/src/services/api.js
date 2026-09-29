import axios from 'axios';
import { FALLBACK_PROJECTS, FALLBACK_PROFILE } from '../data/fallbackData';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchProjects = async (category = 'All') => {
  try {
    const params = category && category !== 'All' ? { category } : {};
    const res = await client.get('/projects', { params });
    if (Array.isArray(res.data) && res.data.length > 0) {
      return res.data;
    }
  } catch (error) {
    console.warn('API fetch projects failed, using fallback data:', error.message);
  }

  // Client-side filtering fallback
  if (category && category !== 'All') {
    return FALLBACK_PROJECTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  return FALLBACK_PROJECTS;
};

export const fetchProjectById = async (id) => {
  try {
    const res = await client.get(`/projects/${id}`);
    if (res.data) return res.data;
  } catch (error) {
    console.warn('API fetch project by ID failed, using fallback:', error.message);
  }
  return FALLBACK_PROJECTS.find(p => p.id === Number(id)) || FALLBACK_PROJECTS[0];
};

export const fetchProfile = async () => {
  try {
    const res = await client.get('/profile');
    if (res.data) return res.data;
  } catch (error) {
    console.warn('API fetch profile failed, using fallback:', error.message);
  }
  return FALLBACK_PROFILE;
};

export const sendContactMessage = async (formData) => {
  try {
    const res = await client.post('/contact', formData);
    return { success: true, data: res.data };
  } catch (error) {
    console.warn('Backend API contact submission failed:', error);
    if (error.response?.status === 422) {
      return { success: false, error: 'Validation error. Please check your form input.' };
    }
    return { 
      success: false,
      error: error.response?.data?.detail || 'Unable to send your message. Please try again or email Vimal directly.'
    };
  }
};
