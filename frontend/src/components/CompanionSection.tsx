import React from 'react';
import styles from './CompanionSection.module.css';
import ProfileItem from './ProfileItem';

const CompanionSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Companion(s):</h2>
      <div>
        <ProfileItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/21f601207d9e9c502038460f2701769a482a82b3"
          name="Steve Young"
          email="young.steve@gmail.com"
        />
        <ProfileItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/8a19f766726294eaec8e8b8d25a3348559696c72"
          name="Thomas Richardson"
          email="BrotherT@gmail.com"
          phone="555-236-4679"
        />
      </div>
    </section>
  );
};

export default CompanionSection;
