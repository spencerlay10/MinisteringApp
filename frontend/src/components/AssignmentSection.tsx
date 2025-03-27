import React, { useEffect, useState } from 'react';
import styles from './AssignmentSection.module.css';
import ProfileItem from './ProfileItem';
import { Assignment } from '../types/assignment';

const AssignmentSection: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://localhost:5000/api/landing') // Adjust API URL as needed
      .then((response) => response.json())
      .then((data) => {
        const extractedAssignments: Assignment[] = data.map((assignment: any) => ({
          id: assignment.assignmentId,
          name: assignment.recipientName, // Adjust based on API response
          email: assignment.email,  // Adjust based on API response
          phone: assignment.phoneNumber || 'N/A', // Default value if no phone
                  // Improved fallback for imageUrl
        imageUrl: assignment.imageUrl && assignment.imageUrl.trim() !== '' 
        ? assignment.imageUrl 
        : 'https://via.placeholder.com/150', // Default image
        }));
        setAssignments(extractedAssignments);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Assignments:</h2>
      {loading ? (
        <p>Loading assignments...</p>
      ) : (
        <div>
          {assignments.length > 0 ? (
            assignments.map((assignment) => (
              <ProfileItem
                key={assignment.id}
                imageUrl={assignment.imageUrl}
                name={assignment.minister}
                email={assignment.email}
                phone={assignment.phone}
              />
            ))
          ) : (
            <p>No assignments available.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default AssignmentSection;
