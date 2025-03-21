import React from 'react';
import styles from './PlanCard.module.css';

interface PlanCardProps {
  title: string;
  targetDate: string;
  onEdit?: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, targetDate, onEdit }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>Target Date: {targetDate}</p>
      </div>
      <button onClick={onEdit} className={styles.icon}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df5a5e6cfda04a0706c1c680823a0a1aebbb80ad?placeholderIfAbsent=true&apiKey=4285164a36624ba6b5d80e1bb4ae6efb"
          alt="Edit plan"
        />
      </button>
    </div>
  );
};

export default PlanCard;
