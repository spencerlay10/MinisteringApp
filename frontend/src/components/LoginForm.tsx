'use client';

import React, { FormEvent, useState } from 'react';
import styles from './LogInPage.module.css';
import InputField from '../components/InputField';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  const handleForgotPassword = () => {
    // Handle forgot password functionality
    console.log('Forgot password clicked');
  };

  return (
    <form className={styles.formLogIn} onSubmit={handleSubmit}>
      <InputField label="Username " value={username} onChange={setUsername} />

      <InputField
        label="Password "
        value={password}
        onChange={setPassword}
        type="password"
        className={styles.inputField2}
      />

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </div>

      <p className={styles.forgotPassword} onClick={handleForgotPassword}>
        Forgot password?
      </p>
    </form>
  );
};

export default LoginForm;
