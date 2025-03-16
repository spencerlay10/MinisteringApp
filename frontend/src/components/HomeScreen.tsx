'use client';
import React from 'react';
import styles from './HomeScreen.module.css';
import StatusBar from './StatusBar';
import Header from './Header';
import AssignmentSection from './AssignmentSection';
import CompanionSection from './CompanionSection';
import PlansSection from './PlansSection';
import BottomNavigation from './BottomNavigation';

const HomeScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geologica:wght@400;700&display=swap"
      />
      <StatusBar />
      <Header title="Home" />
      <main className={styles.mainContent}>
        <AssignmentSection />
        <CompanionSection />
        <PlansSection />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default HomeScreen;
