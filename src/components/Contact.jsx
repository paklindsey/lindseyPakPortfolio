import styles from './Contact.module.css'

const SOCIALS = [
  { num: '01', label: 'Twitter / X', href: '#' },
  { num: '02', label: 'LinkedIn', href: '#' },
  { num: '03', label: 'GitHub', href: '#' },
  { num: '04', label: 'Dribbble', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header reveal">
        <div className="section-label">
          <span className="num">03</span>
          <span>Contact</span>
        </div>
      </div>

      <div className={styles.inner}>
        <span className={`${styles.eyebrow} reveal`}>
          Let's make something together
        </span>
        <h2 className={`${styles.heading} reveal reveal-delay-1`}>
          Get in<br /><em>touch.</em>
        </h2>
        <a
          href="mailto:hello@lindsey.dev"
          className={`${styles.email} reveal reveal-delay-2`}
        >
          hello@lindsey.dev <span className={styles.arrow}>↗</span>
        </a>
        <ul className={`${styles.social} reveal reveal-delay-3`}>
          {SOCIALS.map(({ num, label, href }) => (
            <li key={num}>
              <a href={href} className={styles.socialLink}>
                <span className={styles.socialNum}>{num}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
