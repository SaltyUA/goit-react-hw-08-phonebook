import ContactList from 'components/contactList';
import React from 'react';
import { Form } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Homepage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default Homepage;
