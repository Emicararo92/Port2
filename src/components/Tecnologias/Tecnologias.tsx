"use client";

import { motion } from "framer-motion";
import styles from "../../styles/tecnologias.module.css";
import { useState, useEffect } from "react";
import {
  SiWordpress,
  SiElementor,
  SiWoocommerce,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGoogle,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPagespeedinsights,
  SiGithub,
  SiTrello,
  SiJira,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiCanva,
  SiObsstudio,
} from "react-icons/si";
import { FaCut, FaPalette, FaVideo, FaChevronDown } from "react-icons/fa";

// Categorías con colores pastel
const techCategories = [
  {
    id: "wordpress",
    name: "WordPress",
    color: "#93c5fd",
    iconColor: "#21759B",
    icon: <SiWordpress />,
    technologies: [
      { name: "WordPress Core", icon: <SiWordpress /> },
      { name: "Tipos de contenido personalizados", icon: <SiWordpress /> },
      { name: "WooCommerce", icon: <SiWoocommerce /> },
      { name: "SEO On-Page", icon: <SiWordpress /> },
      { name: "SEO Técnico", icon: <SiWordpress /> },
      { name: "Desarrollo de plugins", icon: <SiWordpress /> },
    ],
  },
  {
    id: "elementor",
    name: "Elementor",
    color: "#c4b5fd",
    iconColor: "#92003B",
    icon: <SiElementor />,
    technologies: [
      { name: "Elementor Pro", icon: <SiElementor /> },
      { name: "Constructor de temas", icon: <SiElementor /> },
      { name: "Diseño responsive", icon: <SiElementor /> },
      { name: "Optimización de rendimiento", icon: <SiElementor /> },
      { name: "Maquetación personalizada", icon: <SiElementor /> },
      { name: "Optimización general", icon: <SiElementor /> },
    ],
  },
  {
    id: "seo",
    name: "SEO y Rendimiento",
    color: "#86efac",
    iconColor: "#00C853",
    icon: <SiPagespeedinsights />,
    technologies: [
      { name: "Core Web Vitals", icon: <SiPagespeedinsights /> },
      { name: "PageSpeed Insights", icon: <SiPagespeedinsights /> },
      { name: "Optimización web", icon: <SiPagespeedinsights /> },
      { name: "SEO Local", icon: <SiGoogle /> },
      { name: "Optimización mobile", icon: <SiPagespeedinsights /> },
    ],
  },
  {
    id: "diseno",
    name: "Diseño y Edición",
    color: "#f9a8d4",
    iconColor: "#7c3aed",
    icon: <FaPalette />,
    technologies: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "CapCut", icon: <FaCut /> },
      { name: "OBS Studio", icon: <SiObsstudio /> },
      { name: "Edición básica de video", icon: <FaVideo /> },
      { name: "Diseño UI / UX", icon: <FaPalette /> },
    ],
  },
  {
    id: "analitica",
    name: "Analítica",
    color: "#fdba74",
    iconColor: "#FF6F00",
    icon: <SiGoogleanalytics />,
    technologies: [
      { name: "Google Analytics 4", icon: <SiGoogleanalytics /> },
      { name: "Google Tag Manager", icon: <SiGoogletagmanager /> },
      { name: "Search Console", icon: <SiGoogle /> },
      { name: "Análisis de datos", icon: <SiGoogleanalytics /> },
    ],
  },
  {
    id: "frontend",
    name: "Frontend y Herramientas",
    color: "#a5b4fc",
    iconColor: "#2962FF",
    icon: <SiReact />,
    technologies: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Trello", icon: <SiTrello /> },
      { name: "Jira", icon: <SiJira /> },
    ],
  },
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "wordpress",
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className={styles.technologies} id="tecnologia">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Mi stack tecnológico
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Especializado en WordPress, Elementor, diseño y optimización de
        rendimiento
      </motion.p>

      {/* DESKTOP */}
      {!isMobile && (
        <>
          <div className={styles.categorySelector}>
            {techCategories.map((category, index) => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${
                  activeCategory === index ? styles.active : ""
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className={styles.carouselContainer}>
            <motion.div
              className={styles.carousel}
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {techCategories[activeCategory].technologies.map(
                (tech, index) => (
                  <motion.div
                    key={index}
                    className={styles.techItem}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    style={{
                      borderColor: techCategories[activeCategory].color,
                    }}
                  >
                    <div
                      className={styles.techIcon}
                      style={{
                        color: techCategories[activeCategory].iconColor,
                      }}
                    >
                      {tech.icon}
                    </div>
                    <div className={styles.techName}>{tech.name}</div>
                  </motion.div>
                ),
              )}
            </motion.div>
          </div>
        </>
      )}

      {/* MOBILE */}
      {isMobile && (
        <div className={styles.mobileAccordion}>
          {techCategories.map((category) => (
            <div
              key={category.id}
              className={`${styles.accordionItem} ${
                openAccordion === category.id ? styles.open : ""
              }`}
              style={{ borderColor: category.color }}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(category.id)}
              >
                <div className={styles.accordionTitle}>
                  <span
                    className={styles.accordionIcon}
                    style={{ color: category.iconColor }}
                  >
                    {category.icon}
                  </span>
                  {category.name}
                </div>
                <FaChevronDown
                  className={styles.accordionIcon}
                  style={{
                    transform:
                      openAccordion === category.id
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>

              <div className={styles.accordionContent}>
                <div className={styles.accordionGrid}>
                  {category.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={styles.accordionTechItem}
                      style={{ borderColor: category.color }}
                    >
                      <div
                        className={styles.accordionTechIcon}
                        style={{ color: category.iconColor }}
                      >
                        {tech.icon}
                      </div>
                      <div className={styles.accordionTechName}>
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
