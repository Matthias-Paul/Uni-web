import styles from "./hero.module.css";

export default function Hero() {
  return (
    <>
      <div id="home" className={styles.hero}>
        <div className={styles.herotext}>
          <h1>We guarantee better education for a better world</h1>
          <p>Our curriculum is designed to empower students with the 
            knowledge, skills, and experience needed to excel in the dynamic
            field of education  </p>
          <button className={styles.btn} >Explore more &#8594;</button>
        </div>
     
      </div>
    </>
  );
}
