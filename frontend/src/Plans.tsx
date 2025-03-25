import React, { useEffect, useState } from 'react';
import styles from './Plans.module.css';
import PlanCard from './components/PlanCard';
import WideButton from './components/WideButton';
import { Plan } from './Plan';
import StatusBar from './components/StatusBar';
import Header from './components/Header';

// Temporary list of recipients
const recipients = [
    "John Doe",
    "Jane Smith",
    "Emily Johnson",
    "Michael Brown",
    "Sarah Davis"
];

// Temporary list of plans
const current_plans = [
    "Bake Cookies!",
    "Fun at the Park",
    "Craft Night"
];

// // Pull plans from the API
// const [current_plans, setPlans] = useState<Plan[]>([]);

//     useEffect(() => {
//         const fetchPlans = async () => {
//             const response = await fetch(`https://localhost:5000/api/Books/AllBooks?pageSize=${pageSize}&pageNum=${pageNum}&sortOrder=${sortOrder}`);
//             const data = await response.json();
//             setPlans(data);
//         };

//     fetchPlans();

//     }, []);

// Main Content
const PlansMain: React.FC = () => {
    const [selectedRecipient, setSelectedRecipient] = useState("");

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
        {current_plans.map((p) => (
            <div className={styles.plansList}>
                <PlanCard title={p} targetDate="04/11/2025" />
            </div>
        ))}
        

        {/* Button to view past plans */}
        <div className={styles.viewPastPlans}>
          <WideButton button_text={'View Past Plans'} />
        </div>
      </main>

      {/* Floating Plus Button */}
      <button className={styles.floatingButton}>
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
          <Header title={'Plans'} />
          <PlansMain />
      </>
    );
  }

export default PlansPage;
