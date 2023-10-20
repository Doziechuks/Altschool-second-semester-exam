import styles from "./RepoList.module.css";
import RepoCard from "../repoCard/RepoCard";
import useFetch from "../../useFetch/useFetch";
// import { data } from "../../dummy";

const RepoList = () => {
  const { data, isLoading, error } = useFetch("/user/repos");

  if (isLoading) return <h1>Loading..</h1>;
  if (error) return <h1>something went wrong</h1>;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Repository List</h2>
      <div className={styles.cardWrapper}>
        {data?.map((data) => (
          <RepoCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default RepoList;
