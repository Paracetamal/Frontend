import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { routes } from './routes';
import Home from './pages/Home/Home';

const router = createBrowserRouter(routes);


const App = () => {
  return (
    <RouterProvider router={router} />

  );
};

export default App;
