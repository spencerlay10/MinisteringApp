'use client';
import React from 'react';
import styles from './InputDesign.module.css';

interface CheckboxFieldProps {
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  defaultChecked = false,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className={styles.div18}>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className={styles.input2}
        onChange={handleChange}
      />
      <label className={styles.div19}>{label}</label>
    </div>
  );
};

export default CheckboxField;
