import styles from "../styles/dashboard.module.css";

const Dashboard = () => {
  return (
    <section className={styles.main}>
      
      <div className={styles.header}>
        <h1>Welcome Back, Venkatesh </h1>
        <p>Here's what's happening today.</p>
      </div>

      <div className={styles.cards}>

        <div className={styles.card}>
          <h3>Total Users</h3>
          <span>10</span>
        </div>

        <div className={styles.card}>
          <h3>Total Products</h3>
          <span>20</span>
        </div>

        <div className={styles.card}>
          <h3>Total Orders</h3>
          <span>15</span>
        </div>

      </div>

      <div className={styles.activity}>
        <h2>Recent Activity</h2>

        <ul>
          <li>New user registered.</li>
          <li>Product added successfully.</li>
          <li>Order completed.</li>
          <li>User profile updated.</li>
        </ul>
      </div>

    </section>
  );
};

export default Dashboard;