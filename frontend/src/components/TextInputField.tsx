import React from 'react';
import styles from './InputDesign.module.css';

interface TextInputFieldProps {
  label: string;
  placeholder?: string;
  iconClass?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  placeholder,
  iconClass,
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <div className={styles.div4}>
      <label className={styles.div5}>{label}</label>
      {iconClass ? (
        <div className={styles.div8}>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={styles.input}
          />
          <div className={styles.div9}>
            <i className={iconClass} />
          </div>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      )}
    </div>
  );
};

export default TextInputField;
