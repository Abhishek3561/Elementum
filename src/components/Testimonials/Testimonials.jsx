import { useState } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    text: "Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable",
  },
];

const scatteredAvatars = [
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    styleClass: styles.avatarLeftTop,
  },
  {
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&crop=face",
    styleClass: styles.avatarLeftBottom,
  },
  {
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
    styleClass: styles.avatarRightTopFar,
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    styleClass: styles.avatarRightTopClose,
  },
  {
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face",
    styleClass: styles.avatarRightMiddle,
  },
  {
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=250&h=250&fit=crop&crop=face",
    styleClass: styles.avatarRightBottom,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.testi}>
      <div className={styles.container}>
        
        {scatteredAvatars.map((av, i) => (
          <div
            key={i}
            className={`${styles.av} ${av.styleClass} ${active === i % testimonials.length ? styles.avActive : ""}`}
            onClick={() => setActive(i % testimonials.length)}
          >
            <img src={av.img} alt={`Reviewer ${i + 1}`} />
          </div>
        ))}

        {/* Center Content Block */}
        <div className={styles.centerSection}>
          <h2 className={styles.title}>
            <span className={styles.coloredWord}>What</span> our customer says <span className={styles.underlinedPhrase}>About Us</span>
          </h2>
          
          <div className={styles.card}>
            <span className={`${styles.quote} ${styles.quoteOpen}`}>“</span>
            <p className={styles.text}>{testimonials[active].text}</p>
            <span className={`${styles.quote} ${styles.quoteClose}`}>”</span>
          </div>

          
        </div>

      </div>
    </section>
  );
};

export default Testimonials;