import {useRef} from "react";
import styles from "./campus.module.css";
import left from "./assets/back.png";
import right from "./assets/right.png";
import gal2 from "./assets/paul3.jpg"
import gal3 from "./assets/paul1.jpg"
import gal4 from "./assets/Screenshot_20230806-165249~3.jpg"
import gal5 from "./assets/student7.jpg"
import gal6 from "./assets/Screenshot_20240504-163017.jpg"

import gal8 from "./assets/Screenshot_20240504-162925.jpg"

import gal11 from "./assets/Screenshot_20240504-162107.jpg"
import gal12 from "./assets/Screenshot_20240504-162400.jpg"
import gal13 from "./assets/student4.jpg"
import gal14 from "./assets/student5.jpg"
import gal15 from "./assets/student6.jpg"

export default function Campus() {






  const slider = useRef()
  let tx =0;
  
  const slideForward = () =>{
  if (tx > -230){
  tx -=33
  }
  slider.current.style.transform= `translateX(${tx}%)`
   }
  
  
   const slideBackward = () =>{
    if (tx < 0){
      tx +=33
      }
      slider.current.style.transform= `translateX(${tx}%)`
       }
    

  return (
    <div id="campus" >
      <div className={styles.campus}>
      <h3>Campus Photo</h3>
          <h4>Gallery</h4>
          <img onClick={slideBackward} className={styles.left} src={left} />
        <img onClick={slideForward}  className={styles.right} src={right} />
        <div  className={styles.gallery}>
        <div ref={slider} className={styles.slider}>
        <img src={gal13} />
          <img src={gal14} />
          <img src={gal15} />
         
          <img src={gal2} />
          <img src={gal3} />
          <img src={gal4} />
          <img src={gal5} />
          <img src={gal6} />
          <img src={gal8} />
        
          <img src={gal11} />
          <img src={gal12} />

        </div>
        </div>
      </div>
    </div>
  );
}
