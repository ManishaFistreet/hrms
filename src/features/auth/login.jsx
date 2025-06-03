import React from 'react';
import { constructionSiteBg, logo } from '../../assets';
import './login.css';

const Login = () => {
  return (
 <div className="login-page" style={{ backgroundImage: `url(${constructionSiteBg})` }}>
  <div className="overlay"></div>
  <div className="login-box">
    <div className="login-logo">
      <img src={logo} alt="Logo" />
    </div>
    <h2>LOG IN</h2>
    <form>
      <div className="input-group">
        <input type="text" placeholder="Username" required />
      </div>
      <div className="input-group">
        <input type="password" placeholder="Password" required />
      </div>
      <div className="options">
        <label>
          <input type="checkbox" /> Remember me
        </label>
      </div>
      <button type="submit" className="login-btn">Login</button>
      <p className="forgot">Forgot Password?</p>
    </form>
  </div>
</div>

  );
};

export default Login;