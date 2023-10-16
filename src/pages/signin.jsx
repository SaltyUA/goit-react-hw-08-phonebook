import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'store/auth/thunk';
import { selectIsLoggedIn } from 'store/selectors';

const SignIn = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [navigate, isLoggedIn]);

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const inputValues = {
      email: email.value,
      password: password.value,
    };

    dispatch(logIn(inputValues));
  };

  return (
    <>
      <h2>SignIn</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">SignIn</button>
      </form>
    </>
  );
};

export default SignIn;
