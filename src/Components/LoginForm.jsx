import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
//   const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      // Вход выполнен успешно
      alert('Добро пожаловать!!!');
      
      // Перенаправляем пользователя на другую страницу
    //   history.push('/Adminpage');
    } else {
      // Вывести сообщение об ошибке входа
      setErrorMessage('Вы ввели неправильный логин или пароль');
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
      <button type="submit">Войти</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
}

export default LoginForm;
