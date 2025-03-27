import React, { useState, useEffect } from 'react';
import styles from './PlansSection.module.css';
import PlanItem from './PlanItem';
import { Plan } from '../types/plan';
import PlanCard from './PlanCard';

const PlansSection: React.FC = () => {

  const [current_plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await fetch(`https://localhost:5000/api/PlanOverview/GetAllPlans`);
      const data = await response.json();
      console.log(data.plans);
      setPlans(data.plans);
    };

    fetchPlans();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Current Plans:</h2>
      
      {current_plans.length === 0 ? (
          <p className={styles.description}>No current plans.</p>
        ) : (
          current_plans.map((p, index) => (
            <div className={styles.plansList} key={index}>
              <PlanCard title={p.title} targetDate={p.targetDate} />
            </div>
          ))
      )}
    </section>
  );
};

export default PlansSection;