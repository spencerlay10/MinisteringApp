import React from 'react';
import styles from './ProfileItem.module.css';

interface ProfileItemProps {
  imageUrl: string | undefined;  // Allow imageUrl to be undefined
  name: string;
  email: string;
  phone?: string;
}

const ProfileItem: React.FC<ProfileItemProps> = ({
  imageUrl,
  name,
  email,
  phone,
}) => {
  return (
    <article className={styles.profileItem}>
      <div className="profileImage"></div>
      <img src={imageUrl} alt={name} className={styles.profileImage} />
      <div className={styles.profileInfo}>
        <span>{name}</span>
        <br />
        <span>{email}</span>
        {phone && (
          <>
            <br />
            <span>{phone}</span>
          </>
        )}
      </div>
    </article>
  );
};

export default ProfileItem;
