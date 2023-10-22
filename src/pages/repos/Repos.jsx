import { useEffect } from "react";
import styles from "./Repos.module.css";
import { Heading, RepoList } from "../../components";
import { Seo } from "../../utility/seo";

const Repos = () => {
  useEffect(() => {
    Seo({
      title: "Home || An Overview of all my Github Repositories",
      metaDescription:
        "A general list of all the repositires I have created on github",
    });
  }, []);
  return (
    <main className={styles.container}>
      <Heading />
      <RepoList />
    </main>
  );
};

export default Repos;
