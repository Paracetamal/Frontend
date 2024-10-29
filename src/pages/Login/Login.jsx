import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Input, ButtonLink } from '../../components/Index';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container-main">
        <div className="logo-login">
          <h1>PARACETAMAL</h1>
        </div>
        <div className="container-main-register">
          <div className="container-register">
            <div className="form-container-password">
              <h2>Login</h2>
              <form>
                <Input label='E-mail' id='email' placeholder='fulaninha@gmail.com' className="input-style" />

                <label htmlFor='password'>Senha</label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" onClick={handleTogglePassword}>
                    {showPassword ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>

                <ButtonLink to="/home">Entrar</ButtonLink>
              </form>

              <div className="existing-account">
                <p>Ainda não possui uma conta? <a href="/register"><span>Cadastre-se aqui</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login