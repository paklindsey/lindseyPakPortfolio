import { useState, useRef, useEffect } from "react";
import styles from "./Work.module.css";

const PROJECTS = [
  {
    num: "01",
    title: "Ravelry Redesign",
    tags: ["Creative Direction", "WebGL", "Motion"],
    preview: "aether studio — project image",
    href: "#",
  },
  {
    num: "02",
    title: "Hired or Tired",
    tags: ["Digital Product Design"],
    preview: "folio magazine — project image",
    href: "#",
  },
  {
    num: "03",
    title: "Tomm Hair",
    tags: ["Brand Design"],
    preview: "cascade app — project image",
    href: "#",
  },
  {
    num: "04",
    title: "Reverie Collective",
    tags: ["Web Design", "Webflow"],
    preview: "reverie collective — project image",
    href: "#",
  },
];

export default function Work() {
  const [activePreview, setActivePreview] = useState(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const previewRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (previewRef.current) {
        previewRef.current.style.left = e.clientX + 20 + "px";
        previewRef.current.style.top = e.clientY - 80 + "px";
      }
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="work">
      {/* Floating preview */}
      <div
        ref={previewRef}
        className={`${styles.preview} ${activePreview ? styles.previewVisible : ""}`}
      >
        <div
          className={styles.previewInner}
          style={{
            background: activePreview
              ? `repeating-linear-gradient(-45deg, #e8e4dc, #e8e4dc 8px, rgba(26,23,20,0.04) 8px, rgba(26,23,20,0.04) 16px)`
              : undefined,
          }}
        >
          {activePreview}
        </div>
      </div>

      <div className={`section-header reveal`}>
        <div className="section-label">
          <span className="num">01</span>
          <span>Selected Work</span>
        </div>
        <span className={styles.dateRange}>2022 – 2025</span>
      </div>

      <ul className={styles.list}>
        {PROJECTS.map((p, i) => (
          <li key={p.num} className={`reveal reveal-delay-${i + 1}`}>
            <a
              href={p.href}
              className={styles.item}
              onMouseEnter={() => setActivePreview(p.preview)}
              onMouseLeave={() => setActivePreview(null)}
            >
              <span className={styles.dot} />
              <div className={styles.info}>
                <span className={styles.title}>{p.title}</span>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className={styles.arrow}>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
