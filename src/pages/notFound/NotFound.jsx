import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <h1>Oops!!</h1>
        <h1>Page not found</h1>
      </div>

      <p>
        Sorry it seemed like this page does not exist please click here to go
        back <Link to="/">Home.</Link>
      </p>
    </main>
  );
};

export default NotFound;
