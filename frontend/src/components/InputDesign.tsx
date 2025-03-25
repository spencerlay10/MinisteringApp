'use client';
import styles from './InputDesign.module.css';
import Header from './Header';
import FormSection from './FormSection';
import BottomNavigation from './BottomNavigation';

function InputDesign() {
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

export default InputDesign;
