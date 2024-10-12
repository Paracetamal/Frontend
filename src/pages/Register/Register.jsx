import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Input, ButtonLink } from '../../components/Index';
import './Register.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
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
              <h2>Cadastre-se</h2>
              <form>
                <Input label='Digite seu E-mail' id='email' placeholder='fulaninha@gmail.com' className="input-style" />

                <label htmlFor='password'>Crie sua senha</label>
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

                <label htmlFor='password-check'>Confirme sua senha</label>
                <div className="password-input">
                  <input
                    type={showPasswordConfirm ? 'text' : 'password'}  // Alterado para usar showPasswordConfirm
                    id='password-check'
                    name='password-check'
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button type="button" onClick={handleTogglePasswordConfirm}>
                    {showPasswordConfirm ? <FiEye size={20} /> : <FiEyeOff size={20} />}
                  </button>
                </div>  

                <ButtonLink to="/home">Cadastrar</ButtonLink>
              </form>

              <div className="existing-account">
                <p>Já possuí uma conta? <a href="/"><span>Entrar</span></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;
