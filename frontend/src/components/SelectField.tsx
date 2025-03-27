import React from 'react';
import styles from './AddEdit.module.css';

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  options?: Option[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options = [] }) => {
  return (
    <div className={styles.div22}>
      <label className={styles.div23}>{label}</label>
      <select className={styles.select}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
