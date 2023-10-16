import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'store/auth/thunk';
import { selectIsLoggedIn } from 'store/selectors';

const SignUp = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate('/contacts');
  }, [navigate, isLoggedIn]);
  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = e.target.elements;
    const inputValues = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(register(inputValues));
  };
  return (
    <>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">SignUp</button>
      </form>
    </>
  );
};

export default SignUp;
