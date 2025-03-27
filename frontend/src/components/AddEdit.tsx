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
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.div}>
        <Header />
        <FormSection />
        <BottomNavigation />
      </main>
    </>
  );
}

export default AddEdit;
