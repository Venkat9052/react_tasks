import styles from "../styles/settings.module.css";
import { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

  return (
    <div className={styles.settings_container}>
      <div className={styles.settings_card}>
        <h1>Settings</h1>
        <p className={styles.subtitle}>
          Manage your account preferences and application settings.
        </p>

        <div className={styles.setting_item}>
          <div>
            <h3>Dark Mode</h3>
            <p>Enable dark theme across the application.</p>
          </div>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className={styles.setting_item}>
          <div>
            <h3>Notifications</h3>
            <p>Receive application notifications.</p>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className={styles.setting_item}>
          <div>
            <h3>Email Updates</h3>
            <p>Receive updates and announcements via email.</p>
          </div>

          <input
            type="checkbox"
            checked={emailUpdates}
            onChange={() => setEmailUpdates(!emailUpdates)}
          />
        </div>

        <button className={styles.save_btn}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;