import React from 'react';
import styles from './ProfileItem.module.css';

interface ProfileItemProps {
  imageUrl: string;
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
      <img src={imageUrl} alt="" className={styles.profileImage} />
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
