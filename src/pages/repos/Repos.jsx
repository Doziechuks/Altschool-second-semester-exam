import styles from "./Repos.module.css";
import { Heading, RepoList } from "../../components";

const Repos = () => {
  return (
    <main className={styles.container}>
      <Heading />
      <RepoList />
    </main>
  );
};

export default Repos;
