import styles from "./about.module.css";
import aboutimg from "./assets/student2.jpg";
import abouticon from "./assets/play-button.png";


export default function About() {
  return (
    <>
      <div id="about" className={styles.about}>
        <div className={styles.aboutleft}>
          <img src={aboutimg} />
          <div className={styles.iconimg}>
            {" "}
            <img src={abouticon} />{" "}
          </div>
        </div>

        <div className={styles.aboutright}>
          <h2>ABOUT UNIVERSITY</h2>
          <h3>Nurturing Tomorrows Leaders Today</h3>
          <p>
            Embark on a transforming educational journey with our universitys
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in dynamic field of education.
          </p>
          <p>
            With the focus on innovation, hands-on learning and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools and communities.
          </p>
          <p>
            {" "}
            Whether you are aspire to become a teacher, administrator, counselor
            or educational leader, our diverse range of programs offers the best
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
      
    </>
  );
}
