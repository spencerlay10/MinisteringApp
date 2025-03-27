import React from 'react';
import styles from './InputDesign.module.css';

interface TextareaFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.div14}>
      <label className={styles.div15}>{label}</label>
      <textarea
        placeholder={placeholder}
        className={styles.textarea}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextareaField;
