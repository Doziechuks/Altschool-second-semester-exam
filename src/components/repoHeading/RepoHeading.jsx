import styles from "./RepoHeading.module.css";

const RepoHeading = () => {
  return (
    <header className={styles.heading}>
      <h1>welcome to my github repository list project</h1>
      <p>
        An Altschool V2 second semester exam for the Frontend Engineering track.
        A task to test our skill set and proficiency in Reacjs, Frontend design
        principles, and responsive web design.
      </p>
    </header>
  );
};

export default RepoHeading;
