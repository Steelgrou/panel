import React, { useState } from 'react';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (localStorage.getItem('username') === username) {
      setErrorMessage('Этот профиль уже занят или вы ввели неправильный пароль');
      document.body.style.border = '1px solid red';
    } else {
      setErrorMessage('');
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
     
      setSuccessMessage('Зарегистрировано !!! Поздравляем!!');
      
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="tel" 
        required
        placeholder="Введите номер" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        required
        placeholder="Введите пароль" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button type="submit">Зарегистрироваться</button>
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
    </form>
  );
}

export default RegisterForm;
