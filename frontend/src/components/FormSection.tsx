import React, { useEffect, useState } from 'react';
import styles from './InputDesign.module.css';
import TextInputField from './TextInputField';
import TextareaField from './TextareaField';
import CheckboxField from './CheckboxField';
import SelectField from './SelectField';
import { Assignment } from '../types/assignment';
import { useNavigate } from 'react-router-dom';

const FormSection = () => {
  const [title, setTitle] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [recipients, setRecipients] = useState('');
  const [description, setDescription] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [method, setMethod] = useState('email');
  const [connectCalendar, setConnectCalendar] = useState(true);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchAssignments = async () => {
      const response = await fetch(`https://localhost:5000/api/PlanOverview/GetAllPlans`);
      const data = await response.json();
      setAssignments(data.assignments);
    };

    fetchAssignments();
  }, []);

  const handleNotificationChange = (checked: boolean) => {
    setNotifications(checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPlan = {
      membershipRecordNumber: '5235781577',
      title: title,
      targetDate: new Date(targetDate).toISOString().split("T")[0],
      description: description,
      notifications: notifications ? 1 : 0,
      reminderDateTime: '2025-04-03T10:00:00', // Replace with a date picker if needed
      reminderType: method,
      repeatFrequency: 'weekly',
      status: 'current',
      customMessage: '',
    };

    console.log("Submitting plan:", newPlan);

    try {
      const response = await fetch('https://localhost:5000/api/Plan/AddPlan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlan),
      });

      if (!response.ok) {
        throw new Error('Failed to submit plan');
      }

      console.log('✅ Plan submitted successfully!');
      navigate('/plans');
    } catch (error) {
      console.error('❌ Error submitting plan:', error);
    }
  };

  return (
    <form className={styles.div3} onSubmit={handleSubmit}>
      <TextInputField
        label="Title"
        placeholder="Plan #1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextInputField
        label="Target Date"
        placeholder="MM/DD/YYYY"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        iconClass={styles.tiTiCalendarI}
      />

      <section className={styles.div20}>
        <div className={styles.div22}>
          <label className={styles.div21}>Filter by Recipient:</label>
          <select
            className={styles.select}
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
          >
            <option value="" disabled>
              Select a recipient
            </option>
            {assignments.map((r) => (
              <option key={r.assignmentId} value={r.recipientName}>
                {r.recipientName}
              </option>
            ))}
          </select>
        </div>
      </section>

      <TextareaField
        label="Description"
        placeholder="How do you plan to minister?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className={styles.div16}>
        <i className={styles.tiTiBulbI3} />
        <p className={styles.div17}>Need ideas?</p>
      </div>

      <CheckboxField
        label="Notifications?"
        defaultChecked={true}
        onChange={handleNotificationChange}
      />

      {notifications && (
        <section className={styles.div20}>
          <h3 className={styles.div21}>Notification Settings:</h3>
          <SelectField
            label="Method"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            options={[
              { value: 'email', label: 'Email' },
              { value: 'sms', label: 'SMS' },
            ]}
          />
        </section>
      )}

      <CheckboxField
        label="Connect Calendar"
        defaultChecked={true}
        onChange={(checked) => setConnectCalendar(checked)}
      />

      <button type="submit" className={styles.button}>
        Submit Plan
      </button>
    </form>
  );
};

export default FormSection;
