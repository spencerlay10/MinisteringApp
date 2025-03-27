"use client";
import * as React from "react";
import styles from "./Header.module.css";

// this is the main Header page being used to navigate in the Landing Page and other changes

// StatusBar component for the top section
const StatusBar: React.FC = () => {
  return (
    <header className={styles.statusBar}>
      <time className={styles.time}>9:41</time>
      <div className={styles.statusBarSpacer} />
      <div>
        <svg
          width="135"
          height="14"
          viewBox="0 0 135 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-1"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M43.1152 2.03302C43.1152 1.39998 42.6376 0.886795 42.0485 0.886795H40.9818C40.3927 0.886795 39.9152 1.39998 39.9152 2.03302V11.967C39.9152 12.6 40.3927 13.1132 40.9818 13.1132H42.0485C42.6376 13.1132 43.1152 12.6 43.1152 11.967V2.03302ZM35.681 3.33208H36.7477C37.3368 3.33208 37.8144 3.85758 37.8144 4.50581V11.9395C37.8144 12.5877 37.3368 13.1132 36.7477 13.1132H35.681C35.0919 13.1132 34.6144 12.5877 34.6144 11.9395V4.50581C34.6144 3.85758 35.0919 3.33208 35.681 3.33208ZM31.3493 5.98112H30.2826C29.6935 5.98112 29.2159 6.51331 29.2159 7.1698V11.9245C29.2159 12.581 29.6935 13.1132 30.2826 13.1132H31.3493C31.9384 13.1132 32.4159 12.581 32.4159 11.9245V7.1698C32.4159 6.51331 31.9384 5.98112 31.3493 5.98112ZM26.0485 8.42642H24.9818C24.3927 8.42642 23.9152 8.951 23.9152 9.59812V11.9415C23.9152 12.5886 24.3927 13.1132 24.9818 13.1132H26.0485C26.6376 13.1132 27.1152 12.5886 27.1152 11.9415V9.59812C27.1152 8.951 26.6376 8.42642 26.0485 8.42642Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58.6865 3.30213C61.1736 3.30223 63.5656 4.22432 65.3681 5.8778C65.5038 6.00545 65.7208 6.00384 65.8545 5.87419L67.152 4.61072C67.2197 4.54496 67.2574 4.45588 67.2568 4.3632C67.2563 4.27052 67.2175 4.18187 67.149 4.11688C62.418 -0.257833 54.9542 -0.257833 50.2232 4.11688C50.1547 4.18183 50.1158 4.27044 50.1152 4.36313C50.1145 4.45581 50.1522 4.54491 50.2199 4.61072L51.5177 5.87419C51.6513 6.00404 51.8684 6.00565 52.0041 5.8778C53.8068 4.22421 56.1991 3.30212 58.6865 3.30213ZM58.6831 7.5224C60.0404 7.52232 61.3493 8.03406 62.3554 8.95819C62.4915 9.08934 62.7059 9.0865 62.8385 8.95178L64.1258 7.63247C64.1936 7.56327 64.2312 7.46939 64.2303 7.37184C64.2293 7.27429 64.1898 7.18121 64.1206 7.11342C61.0568 4.22257 56.3121 4.22257 53.2482 7.11342C53.179 7.18121 53.1395 7.27434 53.1386 7.37192C53.1377 7.4695 53.1755 7.56337 53.2434 7.63247L54.5303 8.95178C54.663 9.0865 54.8773 9.08934 55.0134 8.95819C56.0189 8.03467 57.3267 7.52297 58.6831 7.5224ZM61.2075 10.316C61.2095 10.4213 61.1724 10.5229 61.1051 10.5967L58.9284 13.0514C58.8646 13.1236 58.7776 13.1642 58.6869 13.1642C58.5961 13.1642 58.5091 13.1236 58.4453 13.0514L56.2683 10.5967C56.201 10.5228 56.164 10.4212 56.166 10.3159C56.168 10.2105 56.2088 10.1108 56.2788 10.0401C57.6689 8.72625 59.7048 8.72625 61.0949 10.0401C61.1649 10.1108 61.2056 10.2106 61.2075 10.316Z"
            fill="black"
          />
          <rect
            opacity="0.35"
            x="74.7568"
            y="1"
            width="24"
            height="12"
            rx="3.8"
            stroke="black"
          />
          <path
            opacity="0.4"
            d="M100.257 5.28113V9.3566C101.062 9.01143 101.585 8.20847 101.585 7.31886C101.585 6.42926 101.062 5.6263 100.257 5.28113Z"
            fill="black"
          />
          <rect
            x="76.2568"
            y="2.5"
            width="21"
            height="9"
            rx="2.5"
            fill="black"
          />
        </svg>
      </div>
    </header>
  );
};

// NavigationBar component for the bottom section
const NavigationBar: React.FC = () => {
  return (
    <nav className={styles.navigationBar}>
      <button aria-label="Menu">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 15H26.25M3.75 7.5H26.25M3.75 22.5H26.25"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h1 className={styles.navTitle}>Home</h1>
      <div className={styles.navSpacer} />
    </nav>
  );
};

// Main InputDesign component
function InputDesign() {
  return (
    <main className={styles.container}>
      <section className={styles.contentWrapper}>
        <StatusBar />
      </section>
      <NavigationBar />
    </main>
  );
}

export default InputDesign;
