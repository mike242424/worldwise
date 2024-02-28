import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy Cpoyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
};

export default Footer;
