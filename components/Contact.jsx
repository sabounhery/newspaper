import React from "react";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  return (
    <div class="container">
      <form action="action_page.php">
        <label for="fname">First Name</label>
        <input
          className={styles.myinput}
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          className={styles.myinput}
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="country">Country</label>
        <select className={styles.myselect} id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label for="subject">Subject</label>
        <textarea
          className={styles.mytextarea}
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: "200px" }}
        />

        <input className={styles.mysubmit} type="submit" value="Submit" />
      </form>
    </div>
  );
}
