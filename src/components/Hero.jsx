import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const NAME = "Lindsey";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    requestAnimationFrame(() => setLoaded(true));

    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.meta}>
        <div className={`${styles.metaLeft} ${loaded ? styles.show : ""}`}>
          Digital product designer
          <br />
          and developer
        </div>
        <div className={`${styles.metaRight} ${loaded ? styles.show : ""}`}>
          {time}
          <br />
          Based in New York
        </div>
      </div>

      <h1 className={styles.name} aria-label={NAME}>
        {NAME.split("").map((char, i) => (
          <span
            key={i}
            className={`${styles.char} ${loaded ? styles.charIn : ""}`}
            style={{ transitionDelay: `${0.06 * i + 0.3}s` }}
          >
            {char}
          </span>
        ))}
      </h1>

      <div className={`${styles.tagline} ${loaded ? styles.show : ""}`}>
        <span>Building expressive digital experiences</span>
        <span className={styles.divider} />
        <span className={styles.scrollHint}>Scroll to explore</span>
      </div>
    </section>
  );
}
