import { useState, useRef } from "react";
import styles from "./about.module.css";
import aboutimg from "./assets/student2.jpg";
import abouticon from "./assets/play-button.png";
import vid from "./assets/Welcome to Cambridge!_20240429_081020.mp4";

export default function About() {
  const [video, setVideo] = useState(false);
  const videoRef = useRef(null);
  const handleClick = (e) => {
    e.stopPropagation();
    setVideo(true);
  };

  const handlePause = (e) => {
    e.stopPropagation();
  };
  const handleVid = () => {
    setVideo(false);
  };

  return (
    <>
      <div id="about" onClick={handleVid} className={styles.about}>
        <div className={styles.aboutleft} >
          <img  src={aboutimg} />
          <div className={styles.iconimg}   >
            <div className={styles.visual}>
              {!video ? (
                <img
                  className={styles.abouticon}
                  src={abouticon}
                  onClick={handleClick}
                />
              ) : (
                <video
                  ref={videoRef}
                  className={styles.vid}
                  onClick={handlePause}
                  controls
                  autoPlay
                >
                  {" "}
                  <source src={vid} type="video/mp4" />{" "}
                </video>
              )}
            </div>
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
