import React, { useState, useEffect } from 'react';
import styles from './PlansSection.module.css';
import PlanItem from './PlanItem';
import { Plan } from '../types/plan';

const PlansSection: React.FC = () => {
  // State to store plans fetched from the database
  const [plans, setPlans] = useState<Plan[]>([]);
  // State to track loading status
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // State to handle any errors
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch plans from your database
    const fetchPlans = async () => {
      setIsLoading(true);
      try {
        // Replace with your actual API endpoint
        const response = await fetch('/api/plans');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setPlans(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch plans:', err);
        setError('Failed to load plans. Please try again later.');
        // You could set some fallback data here if needed
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlans();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Current Plans:</h2>
      
      {isLoading ? (
        <div className={styles.loading}>Loading plans...</div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : plans.length === 0 ? (
        <div className={styles.empty}>No plans found. Create some plans to get started!</div>
      ) : (
        <div className={styles.plansList}>
          {plans.map((plan) => (
            <PlanItem 
              key={plan.id}
              title={plan.title}
              targetDate={plan.targetDate}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default PlansSection;