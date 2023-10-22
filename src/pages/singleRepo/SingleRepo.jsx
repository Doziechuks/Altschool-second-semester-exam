import { useEffect } from "react";
import styles from "./SingleRepo.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch/useFetch";
import { Spinner } from "../../components";
import Error from "../error/Error";
import { Seo } from "../../utility/seo";

const SingleRepo = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(`/repos/doziechuks/${id}`);

  useEffect(() => {
    Seo({
      title: `${data?.name}`,
      metaDescription: `A full description of ${data?.name} Github Repositories`,
    });
  }, [data?.name]);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;
  return (
    <main className={styles.container}>
      <div className={styles.heading}>
        <h1>{data?.name} repository</h1>
        <p>
          {data?.description
            ? data?.description
            : `A ${data?.name} project created and version contolled by Github`}
        </p>
        <span>
          Checkout the repository on Github{" "}
          <a
            href={data?.html_url}
            target="blank"
            title="Visit repo on Github"
            rel="noopener noreferrer"
          >
            Here
          </a>
        </span>
      </div>
      <div className={styles.detailsBox}>
        <h3>Other Repository Details</h3>
        <ul>
          <li>
            <span>Main owner</span>: {data?.owner?.login}
          </li>
          <li>
            <span>Created date</span>: {data?.created_at}
          </li>
          <li>
            <span>Project main language</span>: {data?.language}
          </li>
          <li>
            <span>Project live url</span>:{" "}
            {data?.homepage ? (
              <a href={data?.homepage} target="blank">
                {data?.homepage}
              </a>
            ) : (
              <span className={styles.noUrl}>No live url</span>
            )}
          </li>
          <li>
            <span>Last Updated</span>:{data?.updated_at}
          </li>
        </ul>
      </div>
    </main>
  );
};

export default SingleRepo;
