import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const [pathName, setPathName] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);

  return (
    <footer
      className={`${pathName === "/" ? styles.container : styles.remove}`}
    >
      <p>
        All rights reserved. Built by <span>Chuka</span> &copy; 2023
      </p>
    </footer>
  );
};

export default Footer;
