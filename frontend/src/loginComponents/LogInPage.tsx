'use client';

import React from 'react';
import styles from './LogInPage.module.css';
import LoginForm from './LoginForm';

function LogInPage() {
  const handleLogin = (username: string, password: string) => {
    // Handle login logic here
    console.log('Login attempt:', { username, password });
    // In a real application, you would call an authentication service here
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
