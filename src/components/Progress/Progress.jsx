import styles from "./Progress.module.css";
import topLine from "../../assets/Vector2517.svg";

const Progress = () => (
  <section className={styles.progress} id="progress">
    
    <img src={topLine} alt="" className={styles.topLineDecoration} />

    <div className={styles.inner}>
      
      <div className={styles.imgWrap}>
        
        <div className={`${styles.tri} ${styles.triTopLeft}`} />
        <div className={`${styles.tri} ${styles.triBottomLeft}`} />
        
        <div className={styles.circle}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop&crop=center"
            alt="Team working"
            className={styles.mainImg}
          />
        </div>
      </div>

      <div className={styles.text}>
        <h2 className={styles.title}>
          <span className={styles.coloredWord}>See</span> how we can
          <br />
          help you <span className={styles.ul}>progress</span>
        </h2>

        <p className={styles.body}>
          We add a layer of fearless insight and action that allows
          changemakers to accelerate their progress in areas such as
          brand, design, digital, comms and social research.
        </p>

        <a href="#contact" className={styles.readmore}>
          Read more
          <span className={styles.line}></span>
        </a>
      </div>

    </div>
  </section>
);

export default Progress;