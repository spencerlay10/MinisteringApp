'use client';
import React from 'react';
import styles from './InputDesign.module.css';
import NavItem from './NavItem';

const plansIcon = `<svg id="Icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 29px; height: 29px"> <g clip-path="url(#clip0_4001_256)"> <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58578C2.21071 4.96086 2 5.46956 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="#48657D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_4001_256"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </svg>`;

const homeIcon = `<svg id="Home" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 29px; height: 29px"> <rect width="29" height="29" fill="#F5F5F5"></rect> <path d="M10.875 26.5833V14.5H18.125V26.5833M3.625 10.875L14.5 2.41666L25.375 10.875V24.1667C25.375 24.8076 25.1204 25.4223 24.6672 25.8755C24.214 26.3287 23.5993 26.5833 22.9583 26.5833H6.04167C5.40073 26.5833 4.78604 26.3287 4.33283 25.8755C3.87961 25.4223 3.625 24.8076 3.625 24.1667V10.875Z" stroke="#48657D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;

const reportsIcon = `<svg id="Icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon" style="width: 29px; height: 29px"> <path d="M16.5 2V6M8.5 2V6M3.5 10H21.5M5.5 4H19.5C20.6046 4 21.5 4.89543 21.5 6V20C21.5 21.1046 20.6046 22 19.5 22H5.5C4.39543 22 3.5 21.1046 3.5 20V6C3.5 4.89543 4.39543 4 5.5 4Z" stroke="#48657D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;

function InputDesign() {
  return (
    <nav className={styles.navContainer} aria-label="Main navigation">
      <NavItem icon={plansIcon} label="Plans" />
      <NavItem icon={homeIcon} label="Home" />
      <NavItem icon={reportsIcon} label="Reports" />
    </nav>
  );
}

export default InputDesign;
