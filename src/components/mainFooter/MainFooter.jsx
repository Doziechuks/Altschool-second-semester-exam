import styles from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={styles.container}>
      <p>
        All rights reserved. Built by <span>Chuka</span> &copy; 2023
      </p>
    </footer>
  );
};

export default MainFooter;
