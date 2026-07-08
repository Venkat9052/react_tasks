import styles from "../styles/profile.module.css";
import userimage from "../assets/userimage.png";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>

        <div className={styles.profileHeader}>
          <img
            src={userimage}
            alt="Profile"
            className={styles.profileImage}
          />

          <div className={styles.profileTitle}>
            <h1>Venkatesh</h1>
            <p>Frontend Developer</p>
          </div>
        </div>

        <div className={styles.profileDetails}>
          <div className={styles.detailRow}>
            <span>Email</span>
            <p>venkatesh@example.com</p>
          </div>

          <div className={styles.detailRow}>
            <span>Phone</span>
            <p>+91 9876543210</p>
          </div>

          <div className={styles.detailRow}>
            <span>Location</span>
            <p>Andhra Pradesh</p>
          </div>
        </div>

        <div className={styles.skillsSection}>
          <h3>Skills</h3>

          <div className={styles.skills}>
            <span>React</span>
            <span>JavaScript</span>
            <span>Django</span>
            <span>CSS</span>
          </div>
        </div>

        <button className={styles.editBtn}>
          Edit Profile
        </button>

      </div>
    </div>
  );
};

export default Profile;