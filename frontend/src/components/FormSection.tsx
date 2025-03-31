'use client';
import React, { useState } from 'react';
import styles from './AddEdit.module.css';
import TextInputField from './TextInputField';
import TextareaField from './TextareaField';
import CheckboxField from './CheckboxField';
import SelectField from './SelectField';

const FormSection = () => {
  const [showNotificationSettings, setShowNotificationSettings] =
    useState(true);

  const handleNotificationChange = (checked: boolean) => {
    setShowNotificationSettings(checked);
  };

  return (
    <form className={styles.div3}>
      <TextInputField label="Plan Name" placeholder="Enter plan name" />
      `
      <TextInputField
        label="Target Date"
        placeholder="MM/DD/YYYY"
        iconClass={styles.tiTiCalendarI}
      />
      <TextInputField
        label="Recipient(s)"
        placeholder="Search for people"
        iconClass={styles.tiTiSearchI2}
      />
      <TextareaField
        label="Plan Description"
        placeholder="Provide details about your plan"
      />
      `
      <div className={styles.div16}>
        <i className={styles.tiTiBulbI3} />
        <p className={styles.div17}>Need ideas?</p>
      </div>
      <CheckboxField
        label="Notifications?"
        defaultChecked={true}
        onChange={handleNotificationChange}
      />
      {showNotificationSettings && (
        <section className={styles.div20}>
          <h3 className={styles.div21}>Notification Settings:</h3>
          <SelectField
            label="Method"
            options={[
              { value: 'email', label: 'Email' },
              { value: 'sms', label: 'SMS' },
            ]}
          />
        </section>
      )}
      <CheckboxField label="Connect Calendar" defaultChecked={true} />
      <button type="submit" className={styles.button}>
        Submit Plan
      </button>
    </form>
  );
};

export default FormSection;
