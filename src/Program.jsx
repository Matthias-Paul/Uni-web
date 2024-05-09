import styles from "./program.module.css";
import image1 from "./assets/student1.jpg";
import image2 from "./assets/student3.jpg";
import image3 from "./assets/student8.jpg";
import image4 from "./assets/mortarboard.png";
import image5 from "./assets/student.png";
import image6 from "./assets/diploma.png";
export default function Program() {
  return (
    <div id="program">
       <h4 className={styles.text2}>What We Offer</h4>
      <h3 className={styles.text1}>Our Program</h3>
     
      <div className={styles.programs}>
        <div className={styles.program}>
          <img src={image1} />
          <div className={styles.icon1}>
            {" "}
            <img src={image4} /> <h4>Graduation Degree</h4>{" "}
          </div>
          <img src={image2} />
          <div className={styles.icon2}>
            {" "}
            <img src={image5} /> <h4>Masters Degree</h4>{" "}
          </div>
          <img src={image3} />
          <div className={styles.icon3}>
            {" "}
            <img src={image6} /> <h4>Post Graduation </h4>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
