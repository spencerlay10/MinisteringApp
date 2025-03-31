'use client';

import React from 'react';
import styles from './LogInPage.module.css';
import LoginForm from './LoginForm';

const users = [
  { username: 'rex', password: 'password123' },
  { username: 'admin', password: 'admin123' },
  { username: 'user', password: 'userpass' }
];

function LogInPage() {
  const handleLogin = (username: string, password: string) => {
    // Handle login logic here
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('authenticatedUser', username); // Store login info
      alert('Login successful!');
      window.location.href = '/'; // Redirect (modify as needed)
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <main className={styles.logInPage}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b97a88c789d645d573305aea21b04d2c89c3bffd502fd4f03beb413f692c1c02?placeholderIfAbsent=true&apiKey=5b4c8780f4d24aaebb509deee63e658c"
        alt="Company Logo"
        className={styles.img}
      />

      <LoginForm onSubmit={handleLogin} />

      <footer className={styles.footer}>
        <br />
        <br />
        <br />
        <br />
        <br />-
      </footer>
    </main>
  );
}

export default LogInPage;
