import React, { useEffect, useState } from 'react';
import styles from './Plans.module.css';
import PlanCard from './PlanCard';
import WideButton from './WideButton';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { Plan } from '../types/plan';
import BottomNavigation from './BottomNavigation';

// Temporary list of recipients
const recipients = [
    "John Doe",
    "Jane Smith",
    "Emily Johnson",
    "Michael Brown",
    "Sarah Davis"
];

const PlansMain: React.FC = () => {
  
  const navigate = useNavigate();
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [current_plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await fetch(`https://localhost:5000/api/PlanOverview/GetAllPlans`);
      const data = await response.json();
      console.log(data.plans);
      setPlans(data.plans);
    };

    fetchPlans();
  }, []);

  return (
    <div className={styles.container}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geologica:wght@400;700&display=swap"
      />
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
            <option value="" disabled>Select a recipient</option>
            {recipients.map((recipient, index) => (
              <option key={index} value={recipient}>
                {recipient}
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
        

        {/* Button to view past plans */}
        <div className={styles.viewPastPlans}>
          <WideButton button_text={'View Past Plans'} />
        </div>
      </main>

      {/* Floating Plus Button */}
      <button className={styles.floatingButton} onClick={() => navigate("/addEdit")}>
        +
      </button>
    </div>
  );
};

// Full Plans page
function PlansPage() {
    return (
      <>
          <Header/>
          <PlansMain />
          <BottomNavigation />
      </>
    );
  }

export default PlansPage;