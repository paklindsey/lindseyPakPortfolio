import styles from "./About.module.css";

const SKILLS = [
  "Digital Product Design",
  "Front End Development",
  "React / Next.js",
  "Brand Design",
  "Project Management",
];

export default function About() {
  return (
    <section id="about">
      <div className="section-header reveal">
        <div className="section-label">
          <span className="num">02</span>
          <span>About</span>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={`${styles.heading} reveal`}>
            Built for people.
            <br /> <em>Obsessed with craft.</em>
          </h2>
          <div className={`${styles.body} reveal reveal-delay-1`}>
            <p>
              Ever since I was young, I've been drawn to the place where
              technology and design meet. Where something functional becomes
              something that genuinely resonates.
            </p>
            <p>
              I create digital products with one goal in mind: to be useful. Not
              just usable, but truly, meaningfully helpful to the people who use
              them.
            </p>
          </div>
        </div>

        <div className={`${styles.right} reveal reveal-delay-2`}>
          <p className={styles.skillsTitle}>Capabilities</p>
          <div className={styles.skillsList}>
            {SKILLS.map((skill) => (
              <div key={skill} className={styles.skillRow}>
                <span>{skill}</span>
                <span className={styles.dot} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
