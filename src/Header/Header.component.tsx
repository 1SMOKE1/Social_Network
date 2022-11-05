import React from "react";
import styles from '.././styles/Header.module.css';

const Header = () => {
  return(
    <div className={styles.header}>
    <h1>World of Tanks Social Network</h1>
    <ul className={styles.header_list}>
      <li>
        <p>Home</p>
      </li>
      <li>
        <p>News Feed</p>
      </li>
      <li>
        <p>Mesages</p>
      </li>
    </ul> 
    </div>
  )
}

export default Header;

