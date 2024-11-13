import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Input } from "../../components/Index";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import requestAPI from "../../requestAPI";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [loginInfos, setLoginInfos] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setLoginInfos({
      ...loginInfos,
      [event.target.name]: event.target.value,
    });
  };

  const requestLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await requestAPI("/admin/login", "POST", {
        email: loginInfos.email,
        password: loginInfos.password,
      });

      if (response.error) {
        return toast.error(response.error);
      }

      if (response.success) {
        console.log("deu bom");
        return navigate("/home");
      }
    } catch (error) {
      return toast.error("Não foi possível fazer login");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container-main">
        <div className="logo-login">
          <h1>PARACETAMAL</h1>
        </div>
        <div className="container-main-register">
          <div className="container-register">
            <div className="form-container-password">
              <h2>Login</h2>
              <form onSubmit={requestLogin}>
                <Input
                  label="E-mail"
                  id="email"
                  name="email"
                  placeholder="fulaninha@gmail.com"
                  className="input-style"
                  value={loginInfos.email}
                  onChange={(e) => handleChange(e)}
                />

                <label htmlFor="password">Senha</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={loginInfos.password}
                    onChange={(e) => handleChange(e)}
                  />
                  <button type="button" onClick={handleTogglePassword}>
                    {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>

                <button className="custom-button" type="submit">
                  Entrar
                </button>
              </form>

              <div className="existing-account">
                <p>
                  Ainda não possui uma conta?{" "}
                  <a href="/register">
                    <span>Cadastre-se aqui</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
