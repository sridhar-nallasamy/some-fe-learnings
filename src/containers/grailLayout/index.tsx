import styles from './styles.module.css';

const GrailLayout = () => {
  return (
    <div className={styles.rootDiv}>
      <header>This is Header!</header>
      <div className={styles.leftSidebar}>This is Left Sidebar!</div>
      <main>This is Main Content!</main>
      <div className={styles.rightSidebar}>This is Right Sidebar!</div>
      <footer>This is Footer!</footer>
    </div>
  );
};

export default GrailLayout;
