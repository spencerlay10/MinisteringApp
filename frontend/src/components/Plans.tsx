import React, { useEffect, useState } from 'react';
import styles from './Plans.module.css';
import PlanCard from './PlanCard';
import WideButton from './WideButton';
import StatusBar from './StatusBar';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { Plan } from '../types/plan';
import BottomNavigation from './BottomNavigation';
import { Assignment } from '../types/assignment';

const PlansMain: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [current_plans, setPlans] = useState<Plan[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await fetch(
        `https://localhost:5000/api/PlanOverview/GetAllPlans`
      );
      const data = await response.json();
      console.log(data.plans);
      setPlans(data.plans);
      setAssignments(data.assignments);
    };

    fetchPlans();
  }, []);

  return (
    <div className={styles.container}>
      {/* Description section */}
      <main className={styles.mainContent}>
        <p className={styles.description}>
          This is where you can make future ministering plans and view existing
          plans.
        </p>

        {/* Recipient dropdown */}
        <label className={styles.recipientLabel}>Filter by Recipient:</label>
        <div className={styles.selectContainer}>
          <select
            className={styles.selectInput}
            value={selectedRecipient}
            onChange={(e) => setSelectedRecipient(e.target.value)}
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

        {/* List of Current Plans */}
        <h2 className={styles.plansTitle}>Current Plans:</h2>
        {current_plans.length === 0 ? (
          <p className={styles.description}>No current plans.</p>
        ) : (
          current_plans.map((p, index) => (
            <div className={styles.plansList} key={index}>
              <PlanCard title={p.title} targetDate={p.targetDate} />
            </div>
          ))
        )}
        <br />

        {/* Button to view past plans */}
        <div className={styles.viewPastPlans}>
          <WideButton button_text={'View Past Plans'} />
        </div>
      </main>

      {/* Floating Plus Button */}
      <button
        className={styles.floatingButton}
        onClick={() => navigate('/addEdit')}
      >
        +
      </button>
    </div>
  );
};

// Full Plans page
function PlansPage() {
  return (
    <>
      <StatusBar />
      <Header />
      <PlansMain />
      <BottomNavigation />
    </>
  );
}

export default PlansPage;
