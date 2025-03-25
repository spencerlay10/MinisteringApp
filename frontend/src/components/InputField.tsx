'use client';

import React, { ChangeEvent } from 'react';
import styles from './LogInPage.module.css';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  className = styles.inputField,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={className}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={styles.input}
        placeholder="Value"
      />
    </div>
  );
};

export default InputField;
