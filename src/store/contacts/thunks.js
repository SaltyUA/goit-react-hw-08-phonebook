import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  () => {
    const response = axios('/contacts');
    return response.data;
  }
);

export const addContact = createAsyncThunk('contacts/addContact', contact => {
  const response = axios.post('/cotacts', contact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', id => {
  const response = axios.delete(`/contacts/${id}`);
  return response.data;
});

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  (id, contact) => {
    const response = axios.patch(`/contacts/${id}`, contact);
    return response.data;
  }
);
