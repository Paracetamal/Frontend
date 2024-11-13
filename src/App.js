import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Product from "./pages/Product/Product";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/cadastro-produto" element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
