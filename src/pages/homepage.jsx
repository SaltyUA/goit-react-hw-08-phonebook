import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <p>This app created on React course for GoIT</p>
      <p>
        Please <Link to="/signin">signin</Link> or{' '}
        <Link to="/signup">signup</Link>
      </p>
    </>
  );
};

export default HomePage;
