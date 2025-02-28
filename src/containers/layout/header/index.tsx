import styles from './styles.module.css';
import VgsLogo from '../../../assets/VGS.svg';
import { useLocation, useNavigate } from 'react-router';
import { registry } from '../../../constants/index';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(e.target.value);
  };

  return (
    <header className={styles.rootDiv}>
      <img
        src={VgsLogo}
        alt='Logo'
        className={styles.logoImg}
        onClick={() => {
          navigate('');
        }}
      />
      <div className={styles.selectBox}>
        <select
          value={pathname.replace(/^\//g, '')}
          onChange={onChangeHandler}
          className={styles.select}
        >
          {registry.map(
            ({ path, label }) =>
              path && (
                <option value={path} key={path}>
                  {label}
                </option>
              )
          )}
        </select>
      </div>
    </header>
  );
};

export default Header;
