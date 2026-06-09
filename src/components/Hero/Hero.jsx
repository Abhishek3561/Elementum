import styles from "./Hero.module.css";

import pinkLine from "../../assets/Vector2510.svg";
import blackLine from "../../assets/Vector2511.svg";
import purpleShape from "../../assets/Ellipse736.svg";

const avatars = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    top: "48%",
    left: "8%",
    size: 70,
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    top: "20%",
    left: "22%",
    size: 75,
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    top: "8%",
    left: "36%",
    size: 85,
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    top: "12%",
    left: "52%",
    size: 80,
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    top: "8%",
    left: "66%",
    size: 85,
  },
  {
    id: 6,
    img: "https://randomuser.me/api/portraits/men/61.jpg",
    top: "12%",
    left: "82%",
    size: 75,
  },
  {
    id: 7,
    img: "https://randomuser.me/api/portraits/women/71.jpg",
    top: "42%",
    left: "38%",
    size: 78,
  },
  {
    id: 8,
    img: "https://randomuser.me/api/portraits/men/81.jpg",
    top: "38%",
    left: "74%",
    size: 72,
  },
];

const Hero = () => {
  return (
    <section className={styles.hero}>

      {/* Left Decoration */}
      <div className={styles.leftDecoration}>
        <img
          src={pinkLine}
          alt=""
          className={styles.pinkLine}
        />

        <img
          src={blackLine}
          alt=""
          className={styles.blackLine}
        />
      </div>

      {/* Purple Shape */}
      <img
        src={purpleShape}
        alt=""
        className={styles.purpleShape}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>
          The <span className={styles.yellow}>thinkers</span> and
          <br />
          doers were <span className={styles.pink}>changing</span>
          <br />
          the <span className={styles.green}>status</span> Quo with
        </h1>

        <p className={styles.subtitle}>
          We are a team of strategists, designers communicators,
          researchers. Together, we believe that progress only
          happens when you refuse to play things safe.
        </p>
      </div>

      <div className={styles.avatarContainer}>
        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className={styles.avatar}
            style={{
              top: avatar.top,
              left: avatar.left,
              width: avatar.size,
              height: avatar.size,
            }}
          >
            <img src={avatar.img} alt="team member" />
          </div>
        ))}

        <div className={styles.glow}></div>
      </div>

    </section>
  );
};

export default Hero;