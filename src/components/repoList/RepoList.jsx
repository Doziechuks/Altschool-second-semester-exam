import { useState } from "react";
import styles from "./RepoList.module.css";
import RepoCard from "../repoCard/RepoCard";
import useFetch from "../../useFetch/useFetch";
import { Pagination } from "@mui/material";
import Spinner from "../spinner/Spinner";
import Error from "../../pages/error/Error";

const RepoList = () => {
  const { data, isLoading, error } = useFetch("/user/repos");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToDisplay = data.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Repository List</h2>
      <div className={styles.cardWrapper}>
        {itemsToDisplay?.map((data) => (
          <RepoCard key={data.id} data={data} />
        ))}
      </div>
      <div className={styles.paginationBox}>
        <Pagination
          page={currentPage}
          count={Math.ceil(data.length / itemsPerPage)}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </section>
  );
};

export default RepoList;
