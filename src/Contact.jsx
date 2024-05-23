import {useState} from "react"
import styles from "./contact.module.css";
import img from "./assets/letter.png"
import letter from "./assets/letter.png"
import phone from "./assets/viber.png"
import location from "./assets/location.png"
export default function Contact() {


  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "69be12c5-7779-470f-af34-acbd799084c5");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();

    if (data.success) {
      setResult("Sent");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
   
  
  }
  return (
    <>
      <div id="contact">
        <h2 className={styles.cont}>Contact Us</h2>
        <h4 className={styles.con}>Get In Touch</h4>
        <div className={styles.contact}>
          <div className={styles.contactCol}>
            <h3>Send us a message <img className={styles.contactIcon} src={img}  /></h3>
            <p>
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              university community.
            </p>
            <ul>
              <li> <img src={letter} /> matthiaspaul2004@gmail.com </li>
              <li> <img src={phone} />  +2348054696701 </li>
              <li> <img src={location} />  Paul Estate, Edjeba, Warri, Delta, Nigeria. </li>
            </ul>
          </div>
          <div className={styles.contactCol}>
         <form onSubmit={onSubmit}>
         <div className={styles.label}>Your name</div>
         <input  className={styles.input} type="text" name="name" placeholder="Enter your name" required />
         <div className={styles.label}>Email Address</div>
         <input className={styles.input} type="email" name="email address" placeholder="Enter your email address" required/>
         <div className={styles.label}>Write your messages here</div>
         <textarea className={styles.text} name="message" rows="6" placeholder="Enter your message" required/>
       <button type="submit" className={styles.btn}>Send</button>
         </form>
         <span>{result}</span>
     

          </div>
      
        </div>
        <hr  className={styles.line}></hr>
      </div>
      
     

<div className={styles.footer}>

<p  className={styles.right}>&#169; 2024 Paul University. All rights reserved.</p>
      <ul>

        <li>
          Terms of Services
        </li>
        <li>
        Privacy Policy
        </li>
      </ul>

</div>
      
  
    </>
  );
}
