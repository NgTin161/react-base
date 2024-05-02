import { useState } from 'react'
import './Login.scss'
import User from '../User/User';
import { useNavigate } from 'react-router-dom';

import { postResgister } from '../../services/apiServices'
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {


    let data = await postResgister(email, username, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate('/')

    }

    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="login-container">
        <div className='header'>
          <span> Do you have an account yet ?</span>
          <button>Login</button>
        </div>
        <div className='title col-4  mx-auto'>
          TinNguyen
        </div>
        <div className='welcome col-4 mx-auto'>
          Hello, who's this ?
        </div>
        <div className='content-form col-4 mx-auto'>
          <div className='form-group'>
            <label>Email</label>
            <input type={"email"} className='form-control' value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className='form-group'>
            <label>Username</label>
            <input type={"email"} className='form-control' value={username} onChange={(event) => setUserName(event.target.value)} />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? FaEyeSlash : FaEye}
              onClick={togglePasswordVisibility}
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
            />

          </div>
          <span className='forgot-password'>Forgot pasword ?</span>
          <div><button className='btn-submit' onClick={() => handleLogin()}>Register</button></div>

          <div className="text-center">
            <span className="back" onClick={() => navigate('/')}> &#60; &#60; Go to Homepage</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register