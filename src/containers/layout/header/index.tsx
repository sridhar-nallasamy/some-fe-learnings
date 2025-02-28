import styles from './styles.module.css';
import VgsLogo from '../../../assets/VGS.svg';
import { useLocation, useNavigate } from 'react-router';
import { registry } from '../../../constants/index';
import FileCodeIcon from '../../../assets/fileCodeIcon';

const Header = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.replace(/^\//g, '');

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
          value={currentPath}
          onChange={onChangeHandler}
          className={styles.select}
        >
          {Object.values(registry).map(
            ({ path, label }) =>
              path && (
                <option value={path} key={path}>
                  {label}
                </option>
              )
          )}
        </select>
        <FileCodeIcon
          className={styles.fileCodeIcon}
          onClick={() => {
            window.open(registry[currentPath].path, '_blank');
          }}
        />
      </div>
    </header>
  );
};

export default Header;
