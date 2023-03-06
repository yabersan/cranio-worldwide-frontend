import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <p className={styles.logo}>Cranio worldwide</p>
      <nav className={styles.nav}>
        <a href="#" className={styles.nav_item}>Our therapists</a>
        <a href="#" className={styles.nav_item}>Information for therapists</a>
        <a href="#" className={styles.nav_item}>Contacts</a>
      </nav>
      <div className={styles.sm_block}>
          <a href="#" className={styles.sm_vk} />
          <a href="#" className={styles.sm_inst} />
          <a href="#" className={styles.sm_tg} />
      </div>
    </footer>
  );
}