import React from 'react';
import styles from './index.css';

export default props => {
  const handleJump = () => {
    props.history.push('/discover');
  };
  return (
    <div className={styles.root}>
      <button onClick={handleJump}>jump </button>
    </div>
  );
};
