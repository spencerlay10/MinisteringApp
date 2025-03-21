import React from 'react';
import styles from './AssignmentSection.module.css';
import ProfileItem from './ProfileItem';

const AssignmentSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Assignments:</h2>
      <div>
        <ProfileItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7351f04e2828cc97d6a21f286c65ca410e3b4b57"
          name="Lonni Burdett"
          email="lonni@gmail.com"
          phone="111-111-11111"
        />
        <ProfileItem
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/c7b9d4c9d4ee40a09d8dcb8a734bde9ac4e683ef"
          name="Sam Lake"
          email="lakesistah@gmail.com"
        />
      </div>
    </section>
  );
};

export default AssignmentSection;
