import { useState } from 'react'
import styles from './Newsletter.module.css'

import arrowLeft from '../../assets/Vector 2518.svg' 
import arrowRight from '../../assets/Vector 2519.svg'
import leafIcon from '../../assets/Ellipse 739.svg'     

const Newsletter = () => {
  const [done, setDone] = useState(false)

  return (
    <section className={styles.newsletter}>
      
      <div className={styles.squiggleContainer}>
        <img src={arrowLeft} alt="" className={styles.arrow} />
        <img src={arrowRight} alt="" className={styles.arrow} />
      </div>

      <div className={styles.leaf}>
        <img src={leafIcon} alt="" className={styles.vectorAsset} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>
          Subscribe to<br />our newsletter
        </h2>
        <p className={styles.sub}>
          To make your stay special and even more memorable
        </p>
        
        {done ? (
          <p className={styles.thanks}>Thanks for subscribing! 🎉</p>
        ) : (
          <button className={styles.btn} onClick={() => setDone(true)}>
            Subscribe Now
          </button>
        )}
      </div>
    </section>
  )
}

export default Newsletter