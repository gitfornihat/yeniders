import React, { useState } from 'react';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
  };

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
  };

  function handleSubmit(e) {
    e.preventDefault();
 
    const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.endsWith('.ru') || !emailFormat.test(email)) {
      setEmailError('Yalnız .ru domenlərinə icazə verilir.');
    } else {
      setEmailError('');
    }

    if (password.length < 8) {
      setPasswordError('Ən azı 8 simvol');
    } else {
      setPasswordError('');
    }

    if (emailError || passwordError) {
      console.log('Ən azı bir şərt ödənilməyib');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password); 
  }
  function handleEmailFocus() {
    console.log('Yalnız .ru domenlərinə icazə verilir.');
  }

  function handlePasswordFocus() {
    console.log('Ən azı 8 simvol');
  }

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='nmail'>Email:</label>
          <input type="text" className='mail' onChange={handleEmailChange} onFocus={handleEmailFocus} placeholder='Email daxil edin'/>
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div>
          <label className='npw'>Parol:</label>
          <input type="password" className='pw' onChange={handlePasswordChange} onFocus={handlePasswordFocus} placeholder='Şifrəni daxil edin'/>
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <div>
          <button type="submit" className='btn'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;

