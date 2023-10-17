import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { refreshUser } from 'store/auth/thunk';
import { selectIsLoggedIn, selectToken, selectUser } from 'store/selectors';
import { selectError } from 'store/selectors';

const SharedLayout = () => {
  const error = useSelector(selectError);
  const isLogged = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  });
  useEffect(() => {
    error && toast.warning(error);
  }, [error]);

  return (
    <>
      <header>
        <nav>
          <Link to="/">Phonebook</Link>
          <NavLink to="/">Home</NavLink>
          {isLogged ? <p>user</p> : <NavLink to="/signin">SignIn</NavLink>}
          {isLogged ? (
            <Link to="/logout">LogOut</Link>
          ) : (
            <NavLink to="/signup">SignUp</NavLink>
          )}
        </nav>
      </header>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default SharedLayout;
