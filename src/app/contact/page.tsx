import { EmailIcon, LinkedinIcon, WhatsappIcon } from './icons';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <main className={styles.contactMain}>
      <h1 className={styles.contactTitle}>Contact</h1>
      <p className="mb-2">Feel free to reach out for collaboration or opportunities!</p>
      <ul className={styles.contactList}>
        <li className={styles.contactItem}>
          <EmailIcon />
          <a href="mailto:your.email@example.com" className={styles.contactLink}>your.email@example.com</a>
        </li>
        <li className={styles.contactItem}>
          <LinkedinIcon />
          <a href="https://linkedin.com/in/yourprofile" className={styles.contactLink} target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
        </li>
        <li className={styles.contactItem}>
          <WhatsappIcon />
          <a href="https://wa.me/085797112298" className={styles.contactLink}>085797112298</a>
        </li>
      </ul>
    </main>
  );
}

