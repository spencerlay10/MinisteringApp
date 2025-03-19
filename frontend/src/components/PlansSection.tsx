import React from 'react';
import styles from './PlansSection.module.css';
import PlanItem from './PlanItem';

const PlansSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Current Plans:</h2>
      <div className={styles.plansList}>
        <PlanItem title="Bake Cookies!" targetDate="04/11/25" />
        <PlanItem title="Fun at the Park" targetDate="05/03/2025" />
        <PlanItem title="Craft Night" targetDate="05/30/25" />
        <PlanItem title="Ward Pool Party" targetDate="06/18/25" />
      </div>
    </section>
  );
};

export default PlansSection;
