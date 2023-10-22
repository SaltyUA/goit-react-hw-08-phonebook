import { FormContainer } from 'components/form/Form.styled';
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
      <FormContainer onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="********"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          SignUp
        </button>
      </FormContainer>
    </>
  );
};

export default SignUp;
