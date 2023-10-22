import { Link } from 'react-router-dom';

const LoginMenu = () => {
  return (
    <div class="btn-group" role="group" aria-label="Basic outlined example">
      <Link to={'/signin'} class="btn btn-outline-primary">
        SignIn
      </Link>
      <Link to={'/signup'} class="btn btn-outline-primary">
        SignUp
      </Link>
    </div>
  );
};

export default LoginMenu;
