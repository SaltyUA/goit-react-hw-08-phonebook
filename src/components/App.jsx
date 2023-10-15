import { Route, Routes } from 'react-router-dom';

import SharedLayout from './sharedLayout';
import Homepage from 'pages/home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
      <Route index element={<Homepage />} />
    </Routes>
  );
};

export default App;
