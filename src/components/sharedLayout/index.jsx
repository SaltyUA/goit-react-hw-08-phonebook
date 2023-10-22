import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { refreshUser } from 'store/auth/thunk';
import { selectIsLoggedIn, selectToken, selectUser } from 'store/selectors';
import { selectError } from 'store/selectors';
import 'react-toastify/dist/ReactToastify.css';
import UserMenu from 'components/userMenu';
import LoginMenu from 'components/loginMenu';

const SharedLayout = () => {
  const error = useSelector(selectError);
  const isLogged = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    isLogged && token && dispatch(refreshUser());
  });

  useEffect(() => {
    error && toast.warning(error);
  }, [error]);

  return (
    <>
      <header className="container d-flex justify-content-around align-items-center">
        <Link to="/" className="h1">
          Phonebook
        </Link>
        {isLogged ? <UserMenu /> : <LoginMenu />}
      </header>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
