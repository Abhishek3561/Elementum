import styles from './About.module.css'

const About = () => (
  <section className={styles.about} id="studio">
    <div className={styles.blob} />
    <div className={styles.inner}>

      <div className={styles.text}>
        <h2 className={styles.title}>
          <span className={styles.yellowLineAccent}>Tomorrow</span> should<br />
          be better than <span className={styles.greenCapsuleWord}>today</span>
        </h2>
        <p className={styles.body}>
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to play things safe.
        </p>
        <a href="#services" className={styles.readmore}>
          Read more <span className={styles.line} />
        </a>
      </div>

      {/* This frame isolates image layout elements from global curve flow blocks */}
      <div className={styles.imgWrap}>
        <div className={styles.circle}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&crop=center"
            alt="Team celebrating"
          />
        </div>
        {/* Red square shifted upwards over the upper-right corner shoulder */}
        <div className={styles.redSquare} />
      </div>

    </div>
  </section>
)

export default About