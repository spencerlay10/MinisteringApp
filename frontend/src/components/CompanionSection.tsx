import React, { useEffect, useState } from 'react';
import styles from './CompanionSection.module.css';
import ProfileItem from './ProfileItem';
import {Companion} from '../types/companion';

const CompanionSection: React.FC = () => {
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch('https://localhost:5000/api/companions')
      .then((response) => response.json())
      .then((data) => {
        const extractedCompanions: Companion[] = data.map((companion: any) => ({
          id: companion.id,
          name: companion.name,
          email: companion.email,
          phone: companion.phone || undefined,
          imageUrl: companion.imageUrl?.trim() !== '' 
            ? companion.imageUrl 
            : 'https://via.placeholder.com/150' // Default image if none provided
        }));
        setCompanions(extractedCompanions);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching companions:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Companion(s):</h2>
      {loading ? (
        <p>Loading companions...</p>
      ) : (
        <div>
          {companions.length > 0 ? (
            companions.map((companion) => (
              <ProfileItem
                key={companion.id}
                imageUrl={companion.imageUrl}
                name={companion.name}
                email={companion.email}
                phone={companion.phone}
              />
            ))
          ) : (
            <p>No companions available.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default CompanionSection;