import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const ButtonBack = () => {
  return (
    <Link to="/app/cities">
      <button className={styles.btn}>Back</button>
    </Link>
  );
};

export default ButtonBack;
