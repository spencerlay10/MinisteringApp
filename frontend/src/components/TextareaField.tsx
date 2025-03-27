import React from 'react';
import styles from './AddEdit.module.css';

interface TextareaFieldProps {
  label: string;
  placeholder?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  placeholder,
}) => {
  return (
    <div className={styles.div14}>
      <label className={styles.div15}>{label}</label>
      <textarea placeholder={placeholder} className={styles.textarea} />
    </div>
  );
};

export default TextareaField;
