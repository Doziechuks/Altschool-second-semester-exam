import { useEffect } from "react";
import styles from "./Error.module.css";
import { Link } from "react-router-dom";
import { Seo } from "../../utility/seo";

const Error = () => {
  useEffect(() => {
    Seo({
      title: "Error",
      metaDescription: "An Error page",
    });
  }, []);
  return (
    <div className={styles.container}>
      <h2>Something went wrong!</h2>
      <p>
        This could have occured due to network or unforseen issues, kindly click{" "}
        <Link to="/">Here</Link> to go back home.
      </p>
    </div>
  );
};

export default Error;
