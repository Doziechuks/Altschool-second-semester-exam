/* eslint-disable react/prop-types */
import styles from "./RepoCard.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DoDisturb from "@mui/icons-material/DoDisturb";
// import { data } from "../../dummy";

const RepoCard = ({ data }) => {
  const [notice, setNotice] = useState(false);
  // const repoUrl = "https://github.com/Doziechuks/" + data?.name;
  const projectUrl = `https://${data?.homepage}`;

  const handleNoLink = () => {
    setNotice(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotice(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [notice]);

  return (
    <div className={styles.wrapper}>
      {notice && (
        <span className={styles.noLink}>no project link available.</span>
      )}
      <div className={styles.top}>
        <div className={styles.avatarLang}>
          <span className={styles.language}>{data.language}</span>
          <div className={styles.imgBox}>
            <img src={data?.owner?.avatar_url} alt="avatar urlPhoto" />
          </div>
        </div>
        <Link to={`/doziechuks/${data?.name}`} className={styles.repoNameBox}>
          <h4 className={styles.repoName}>{data?.name} repo</h4>
        </Link>
      </div>
      <div className={styles.bottom}>
        <a
          href={data?.html_url}
          target="blank"
          title="Visit repo on Github"
          rel="noopener noreferrer"
        >
          <LinkIcon />
        </a>
        {data?.homepage ? (
          <a
            href={projectUrl}
            target="blank"
            title="Visit live project"
            rel="noopener noreferrer"
          >
            <OpenInNewIcon />
          </a>
        ) : (
          <div className={styles.noLink} onClick={handleNoLink}>
            <DoDisturb />
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
