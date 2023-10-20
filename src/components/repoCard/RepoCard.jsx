/* eslint-disable react/prop-types */
import styles from "./RepoCard.module.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { data } from "../../dummy";

const RepoCard = ({ data }) => {
  const [notice] = useState(false);
  const repoUrl = data?.url + data?.name;
  const projectUrl = data?.homepage ? `https://${data?.homepage}` : notice;

  console.log({ notice });
  return (
    <div className={styles.wrapper}>
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
          href={repoUrl}
          target="blank"
          title="Visit repo on Github"
          rel="noopener noreferrer"
        >
          <LinkIcon />
        </a>
        <a
          href={data?.homepage ? projectUrl : null}
          target="blank"
          title="Visit live project"
          rel="noopener noreferrer"
        >
          <OpenInNewIcon />
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
