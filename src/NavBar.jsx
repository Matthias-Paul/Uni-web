import {useState, useEffect} from "react"
import styles from "./navbar.module.css"
import edu from "../src/assets/mortarboard.png"
export default function NavBar() {
const [sticky, setSticky] = useState(false)

useEffect(()=>{
window.addEventListener("scroll", ()=>{
window.scrollY > 50? setSticky(true): setSticky(false)

})

}, [])


  return (
    <>
<nav  className={sticky? styles.stick: styles.nav}>
    <div  className={styles.cap}>
    <img className={styles.image} src={edu} />
     <div className={styles.uni}>Paul University</div>
    </div>
<ul  className={styles.list}>
    <li  > <a  className={styles.li}  href="#home"> Home </a></li>
    <li> <a className={styles.li} href="#program"> Program </a></li>
    <li> <a className={styles.li} href="#about"> About Us </a></li>
    <li> <a className={styles.li} href="#campus"> Campus </a></li>
    <li> <a className={styles.li} href="#testimonials">Testimonials </a></li>
    <li> <a className={styles.li} href="#contact"> Contact Us </a></li>
</ul>

</nav>
    </>
  )
}
