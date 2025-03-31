'use client';
import React from 'react';
import styles from './AddEdit.module.css';
import Header from './Header';
import FormSection from './FormSection';
import BottomNavigation from './BottomNavigation';

function AddEdit() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geologica:wght@400;700&display=swap"
      />
      <main className={styles.div}>
        <Header title="Add/Edit Plan" />
        <FormSection />
        <BottomNavigation />
      </main>
    </>
  );
}

export default AddEdit;
