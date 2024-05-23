import { Link } from "react-scroll"
import {useState} from "react"
import styles from "./navbar.module.css"
import edu from "../src/assets/mortarboard.png"
import menu from "../src/assets/menu.png"
export default function NavBar() {

const [hide, setHide] = useState(true)

 
const toggle =()=>{
hide? setHide(false):setHide(true);
}

  return (
    <>
<nav className={styles.nav} >
    
    <div  className={styles.cap}>
    <img className={styles.image} src={edu} />
     <div className={styles.uni}>Paul University</div>
    </div>
<div  className={hide? styles.hide:""}>
<ul  className={styles.list}>
    
  <li> <Link to="home" smooth={true} offset={0} duration={500}  className={styles.li} > Home </Link></li>
    <li> <Link to="program" smooth={true} offset={0} duration={500}  className={styles.li} > Program </Link></li>
    <li> <Link to="about" smooth={true} offset={0} duration={500}  className={styles.li} > About Us </Link></li>
    <li> <Link to="campus" smooth={true} offset={0} duration={500}  className={styles.li} > Campus </Link></li>
    <li> <Link to="testimonials" smooth={true} offset={0} duration={500}  className={styles.li} > Testimonials </Link></li>
    <li> <Link to="contact" smooth={true} offset={0} duration={500}  className={styles.li} > Contact Us </Link></li>
   
</ul>
</div>
<img className={styles.menu} src={menu} onClick={toggle} />
</nav>
    </>
  )
}




