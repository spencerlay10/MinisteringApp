import React, { useEffect, useState } from 'react';
import styles from './AssignmentSection.module.css';
import ProfileItem from './ProfileItem';
import { Assignment } from '../types/assignment';
import Michele from './Michele_Photo.png';

const AssignmentSection: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

    useEffect(() => {
      const fetchAssignments = async () => {
        const response = await fetch(`https://localhost:5000/api/PlanOverview/GetAllPlans`);
        const data = await response.json();
        setAssignments(data.assignments);
      };

      fetchAssignments();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Assignments:</h2>
        <div>
          {assignments.length > 0 ? (
            assignments.map((assignment) => (
              <ProfileItem
                key={assignment.assignmentId}
                imageUrl={Michele}
                name={assignment.recipientName}
                email={assignment.email}
                phone={assignment.phoneNumber}
              />
            ))
          ) : (
            <p>No assignments available.</p>
          )}
        </div>
    </section>
  );
};

export default AssignmentSection;
