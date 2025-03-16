import React from 'react';
import styles from './PlanItem.module.css';
import IconSVG from './IconSVG';

interface PlanItemProps {
  title: string;
  targetDate: string;
}

const PlanItem: React.FC<PlanItemProps> = ({ title, targetDate }) => {
  return (
    <article className={styles.planItem}>
      <h3 className={styles.planTitle}>{title}</h3>
      <button className={styles.editButton} aria-label="Edit plan">
        <IconSVG
          id="edit-icon"
          svg={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="edit"> <path d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z" fill="#49454F"></path> </svg>`}
        />
      </button>
      <p className={styles.planDate}>Target Date: {targetDate}</p>
    </article>
  );
};

export default PlanItem;
