import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Nav.module.css'
import logo from '../assets/logo.svg'

const links = [
  { num: '01', label: 'Work', href: '#work' },
  { num: '02', label: 'About', href: '#about' },
  { num: '03', label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const navRef = useRef(null)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    requestAnimationFrame(() => {
      navRef.current?.classList.add(styles.visible)
    })
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY.current && y > 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      ref={navRef}
      className={styles.nav}
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <a href="#hero" className={styles.logo}><img src={logo} alt="Lindsey" /></a>
      <ul className={styles.links}>
        {links.map(({ num, label, href }) => (
          <li key={href}>
            <a href={href} className={styles.link}>
              <span className={styles.num}>{num}</span>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a href="mailto:hello@lindsey.dev" className={styles.link}>
            Say hello ↗
          </a>
        </li>
      </ul>
    </motion.nav>
  )
}
