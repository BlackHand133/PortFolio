import React from 'react'
import styles from './Contact.module.css'
import { MdAlternateEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";

function Contact() {
  return (
    <div id='contact' className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_desc}>
                Quality-Driven Development: <br />
                I believe in clean, well-structured code that is not only functional but also maintainable and scalable. <br />
                I prioritize robust testing throughout the development process to ensure your application is reliable and performs optimally.
                </p>
                <p>
                    <address>
                    145 M.7 Pa Sang, <br />
                    Wiang Chiang Rung, Chiang Rai,
                    Thailand 57210 
                    </address>
                </p>
                <p><MdAlternateEmail/> prapt.2545@gmail.com</p>
                <p><MdAlternateEmail/> 64020686@up.ac.th</p>
                <p><SiWhatsapp/> 082-332-1162</p>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                    <div className={styles.input_group}>
                        <div>
                            <label htmlFor="first name">First Name</label>
                            <input type="text" placeholder="eg. Somchai"></input>
                        </div>
                        <div>
                            <label htmlFor="last name">Last Name</label>
                            <input type="text" placeholder="eg. Jaidee"></input>
                        </div>
                    </div>
                    <label htmlFor="email address">Email Address</label>
                    <input type="email" placeholder="eg. asdfsa@dddd.com" />
                    <label htmlFor="message">Your message</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Type here"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
