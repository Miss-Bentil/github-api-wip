import React from 'react';

function Login() {
  const CLIENT_ID = '2fdd6ad2c3c32c13fd71';
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
  };
  return (
    <div>
      <h1>Login with GitHub</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
