import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'
import styles from './Footer.module.css'

const company = ['Home', 'Studio', 'Service', 'Blog']
const policies = ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility']
const social = [
  { label: 'Instagram', icon: <FaInstagram /> },
  { label: 'LinkedIn',  icon: <FaLinkedin /> },
  { label: 'Youtube',   icon: <FaYoutube /> },
  { label: 'Twitter',   icon: <FaTwitter /> },
]

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.divider} />
    <div className={styles.inner}>

      <div className={styles.col}>
        <h4 className={styles.heading}>Company</h4>
        <ul className={styles.list}>
          {company.map(l => <li key={l}><a href="#top" className={styles.link}>{l}</a></li>)}
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.heading}>Terms &amp; Policies</h4>
        <ul className={styles.list}>
          {policies.map(l => <li key={l}><a href="#top" className={styles.link}>{l}</a></li>)}
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.heading}>Follow Us</h4>
        <ul className={styles.list}>
          {social.map(s => (
            <li key={s.label}>
              <a href="#top" className={styles.socialLink}>
                {s.icon} {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.heading}>Contact</h4>
        <address className={styles.addr}>
          <p>1498w Fluton ste, STE 2D</p>
          <p>Chicago, IL 63867</p>
          <p>(123) 456789000</p>
          <p>info@elementum.com</p>
        </address>
      </div>

    </div>
    <div className={styles.bottom}>
      <p>©2023 Elementum. All rights reserved</p>
    </div>
  </footer>
)

export default Footer