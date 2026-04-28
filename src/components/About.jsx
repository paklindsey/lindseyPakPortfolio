import styles from './About.module.css'

const SKILLS = [
  'Creative Development',
  'Motion Design',
  'UI / UX Design',
  'WebGL / Three.js',
  'React / Next.js',
  'Webflow',
]

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
            Design that<br /><em>moves</em> people<br />forward.
          </h2>
          <div className={`${styles.body} reveal reveal-delay-1`}>
            <p>
              I'm a creative developer with a soft spot for the space where design
              and code blur together — where a well-timed transition or a carefully
              chosen typeface can completely change how something feels.
            </p>
            <p>
              I build for studios, founders, and teams who care about the craft.
              Every project starts with a question: what should this feel like?
            </p>
          </div>
        </div>

        <div className={`${styles.right} reveal reveal-delay-2`}>
          <p className={styles.skillsTitle}>Capabilities</p>
          <div className={styles.skillsList}>
            {SKILLS.map(skill => (
              <div key={skill} className={styles.skillRow}>
                <span>{skill}</span>
                <span className={styles.dot} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
