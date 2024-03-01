import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

const getAllPublishers = createAsyncThunk(
  'publishers/getAllPublishers',
  async (data) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(`${BASE_URL}/editoriales?populate=*`, options);
    const result = await res.json();
    return result;
  },
);

export default getAllPublishers;