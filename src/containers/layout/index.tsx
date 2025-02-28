import { Outlet } from 'react-router';
import Header from './header';
import styles from './styles.module.css';

const Layout = () => {
  return (
    <div className={styles.rootDiv}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
