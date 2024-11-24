import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/hero.png";
const Hero = () => {
  return (
    <div className={styles.hero_comp}>
      <div className={styles.hero_content}>
        <p>We Provide</p>
        <p>Architectural design</p>
        <p>and Construction</p>
        <div className={styles.hero_section}>
          <p>
            More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because
            our work is different
          </p>
        </div>
      </div>
      <img
        className={styles.hero_image}
        src={heroImage}
        alt="Building image"
      ></img>
    </div>
  );
};

export default Hero;
