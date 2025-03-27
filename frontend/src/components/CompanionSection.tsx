import React, { useEffect, useState } from 'react';
import styles from './CompanionSection.module.css';
import ProfileItem from './ProfileItem';
import {Companion} from '../types/companion';

const CompanionSection: React.FC = () => {
  const [companions, setCompanions] = useState<Companion[]>([]);

      useEffect(() => {
        const fetchCompanions = async () => {
          const response = await fetch(`https://localhost:5000/api/PlanOverview/GetAllPlans`);
          const data = await response.json();
          setCompanions(data.companions);
        };
  
        fetchCompanions();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Companions:</h2>
        <div>
          {companions.length > 0 ? (
            companions.map((companion) => (
              <ProfileItem
                key={companion.companionId}
                imageUrl= ""
                name={companion.companionName}
                email={companion.compEmail}
                phone={companion.compPhoneNumber}
              />
            ))
          ) : (
            <p>No companions available.</p>
          )}
        </div>
    </section>
  );
};

export default CompanionSection;