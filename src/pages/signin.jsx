import { FormContainer } from 'components/form/Form.styled';
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
      <FormContainer onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" class="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="********"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          SignIn
        </button>
      </FormContainer>
    </>
  );
};

export default SignIn;
