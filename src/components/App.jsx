import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SharedLayout from './sharedLayout';
import Homepage from 'pages/homepage';
import SignIn from 'pages/signin';
import SignUp from 'pages/signup';
import Contacts from 'pages/contacts';
import PublicGuard from 'guards/publicGuard';
import PrivateGuard from 'guards/privateGuard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route
          path="signin"
          element={
            <PublicGuard>
              <SignIn />
            </PublicGuard>
          }
        />
        <Route
          path="signup"
          element={
            <PublicGuard>
              <SignUp />
            </PublicGuard>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateGuard>
              <Contacts />
            </PrivateGuard>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
