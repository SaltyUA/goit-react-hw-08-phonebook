import { Route, Routes } from 'react-router-dom';

import SharedLayout from './sharedLayout';
import Homepage from 'pages/homepage';
import SignIn from 'pages/signin';
import SignUp from 'pages/signup';
import Contacts from 'pages/contacts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
