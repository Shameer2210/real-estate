import styles from "./Nav.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <p className={styles.typo}>
          General<br></br>
          <span className={styles.spanned}>Project</span>
        </p>
      </div>
      <ul className={styles.navlist}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Find a Team</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </ul>
    </nav>
    
  );
};

export default Navbar;
