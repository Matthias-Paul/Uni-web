import { useRef } from "react";
import styles from "./testimonials.module.css";
import left from "./assets/back.png";
import right from "./assets/right.png";
import test1 from "./assets/paul1.jpg";
import test2 from "./assets/test1.jpg";
import test3 from "./assets/test2.jpg";
import test4 from "./assets/ayo.jpg";
export default function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -75) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <>
      <div id="testimonials" className={styles.testimonials}>
        <h3 className={styles.topic}>TESTIMONIALS</h3>
        <h4 className={styles.top}>What student says</h4>
        <img onClick={slideBackward} className={styles.left} src={left} />
        <img onClick={slideForward} className={styles.right} src={right} />
        <div className={styles.slider}>
          <ul ref={slider}>
            <li>
              <div className={styles.slide}>
                <div className={styles.userInfo}>
                  <img src={test1} />
                  <div>
                    <h3>Matthias Paul</h3>
                    <span>Paul University, Nigeria</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Paul university was one of the
                  best decisions i have ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectation
                </p>
              </div>
            </li>

            <li>
              <div className={styles.slide}>
                <div className={styles.userInfo}>
                  <img src={test3} />
                  <div>
                    <h3>Raphael Ezekiel</h3>
                    <span>Paul University, Nigeria</span>
                  </div>
                </div>
                <p>
                  At Paul University, i have found a supportive community and
                  inspiring mentors who have helped me excel both academically
                  and personally. The campus culture is vibrant, fostering
                  holistic growth through innovative learning opportunities and
                  engaging activities. i am grateful to be a part of such a
                  dynamic educational environment.
                </p>
              </div>
            </li>

            <li>
              <div className={styles.slide}>
                <div className={styles.userInfo}>
                  <img src={test2} />
                  <div>
                    <h3>Rose Rhoda</h3>
                    <span>Paul University, Nigeria</span>
                  </div>
                </div>
                <p>
                  Paul University has exceeded my expectations in every way. The
                  professors are not only experts in their fields but also
                  incredibly supportive mentors. The campus environment is
                  vibrant and inclusive, providing numerous opportunities for
                  growth and development. I am proud to be a student here.
                </p>
              </div>
            </li>

            <li>
              <div className={styles.slide}>
                <div className={styles.userInfo}>
                  <img src={test4} />
                  <div>
                    <h3>Jude Michael</h3>
                    <span>Paul University, Nigeria</span>
                  </div>
                </div>
                <p>
                  At Paul University, i have discovered a true sense of
                  belonging. The faculty's dedication to our success is
                  unparalleled, and the campus atmosphere is one of creativity
                  and collaboration. I am constantly inspired by opportunities
                  for growth and learning here. Paul University has truly become
                  my home away from home.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
