import styles from "../styles/retry.module.css"


const Retry = ({ error, onRetry }) => {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.card}`}>
        <h2 className={`${styles.title}`}>{error}</h2>
        <p className={`${styles.error}`}>something went wrong while fetching users !</p>
      <button onClick={onRetry} className={`${styles.retryBtn}`}>
        Retry
      </button>
      </div>
    </div>
  );
};

export default Retry;