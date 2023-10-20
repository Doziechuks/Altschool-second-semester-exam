import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
        <h2>CHUKA.</h2>
      </Link>
      <div>ALT/SOE/023/0689</div>
    </nav>
  );
};

export default Navbar;
