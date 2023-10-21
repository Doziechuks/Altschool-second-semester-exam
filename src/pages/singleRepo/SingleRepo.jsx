import { useEffect } from "react";
import styles from "./SingleRepo.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import { ErrorBoundary, Spinner } from "../../components";
import { Seo } from "../../utility/seo";

const SingleRepo = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(`/repos/doziechuks/${id}`);
  console.log(data);

  useEffect(() => {
    Seo({
      title: `${data?.name}`,
      metaDescription: `A full description of ${data?.name} Github Repositories`,
    });
  }, [data?.name]);

  if (isLoading) return <Spinner />;
  if (error) return <h1>something went wrong</h1>;
  return (
    <ErrorBoundary>
      <main className={styles.container}>single repo</main>
    </ErrorBoundary>
  );
};

export default SingleRepo;
