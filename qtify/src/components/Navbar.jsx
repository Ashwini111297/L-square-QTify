import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.searchContainer}>
        <Search
          placeholder="Search a album of your choice"
          searchData={searchData}
        />
      </div>

      <button className={styles.feedbackButton}>
       Give Feedback
       </button>

    </nav>
  );
}

export default Navbar;
