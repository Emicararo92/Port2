"use client";

import { motion } from "framer-motion";
import styles from "../../styles/tecnologias.module.css";
import { useEffect, useState } from "react";
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
import { FaCut, FaPalette, FaVideo } from "react-icons/fa";

// Categorías con colores pastel
const techCategories = [
  {
    name: "WordPress",
    color: "#93c5fd", // Azul pastel
    iconColor: "#21759B",
    icon: <SiWordpress />,
    technologies: [
      { name: "WordPress Core", icon: <SiWordpress /> },
      { name: "Custom Post Types", icon: <SiWordpress /> },
      { name: "WooCommerce", icon: <SiWoocommerce /> },
      { name: "SEO On-Page", icon: <SiWordpress /> },
      { name: "SEO Técnico", icon: <SiWordpress /> },
      { name: "Plugin Development", icon: <SiWordpress /> },
    ],
  },
  {
    name: "Elementor",
    color: "#c4b5fd", // Lila pastel
    iconColor: "#92003B",
    icon: <SiElementor />,
    technologies: [
      { name: "Elementor Pro", icon: <SiElementor /> },
      { name: "Theme Builder", icon: <SiElementor /> },
      { name: "Responsive Design", icon: <SiElementor /> },
      { name: "Performance", icon: <SiElementor /> },
      { name: "Custom Layouts", icon: <SiElementor /> },
      { name: "Optimización", icon: <SiElementor /> },
    ],
  },
  {
    name: "SEO & Performance",
    color: "#86efac", // Verde menta pastel
    iconColor: "#00C853",
    icon: <SiPagespeedinsights />,
    technologies: [
      { name: "Core Web Vitals", icon: <SiPagespeedinsights /> },
      { name: "PageSpeed Insights", icon: <SiPagespeedinsights /> },
      { name: "Optimización Web", icon: <SiPagespeedinsights /> },
      { name: "SEO Local", icon: <SiGoogle /> },
      { name: "Mobile Optimization", icon: <SiPagespeedinsights /> },
    ],
  },
  {
    name: "Diseño & Edición",
    color: "#f9a8d4", // Rosa pastel
    iconColor: "#7c3aed",
    icon: <FaPalette />,
    technologies: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "CapCut", icon: <FaCut /> },
      { name: "OBS Studio", icon: <SiObsstudio /> },
      { name: "Edición Básica Video", icon: <FaVideo /> },
      { name: "Diseño UI/UX", icon: <FaPalette /> },
    ],
  },
  {
    name: "Analítica",
    color: "#fdba74", // Durazno pastel
    iconColor: "#FF6F00",
    icon: <SiGoogleanalytics />,
    technologies: [
      { name: "Google Analytics 4", icon: <SiGoogleanalytics /> },
      { name: "Google Tag Manager", icon: <SiGoogletagmanager /> },
      { name: "Search Console", icon: <SiGoogle /> },
      { name: "Data Analysis", icon: <SiGoogleanalytics /> },
    ],
  },
  {
    name: "Frontend & Tools",
    color: "#a5b4fc", // Índigo pastel
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
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={styles.technologies} id="tecnologia">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Mi Stack Tecnológico
      </motion.h2>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Especializado en WordPress, Elementor, diseño y optimización de
        performance
      </motion.p>

      {/* Selector de categorías */}
      <div className={styles.categorySelector}>
        {techCategories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryButton} ${
              activeCategory === index ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(index)}
            data-category={category.name.toLowerCase().replace(/[ &]/g, "-")}
          >
            <span className={styles.categoryIcon}>{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Vista Desktop (Carousel) */}
      {!isMobile && (
        <div className={styles.carouselContainer}>
          <motion.div
            className={styles.carousel}
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {techCategories[activeCategory].technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`${styles.techItem} ${
                  techCategories[activeCategory].name === "Diseño & Edición"
                    ? styles.designGridItem
                    : ""
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                style={{
                  borderColor: techCategories[activeCategory].color,
                }}
              >
                <div
                  className={`${styles.techIcon} ${
                    techCategories[activeCategory].name === "Diseño & Edición"
                      ? styles.designIcon
                      : ""
                  }`}
                  style={{ color: techCategories[activeCategory].iconColor }}
                >
                  {tech.icon}
                </div>
                <div className={styles.techName}>{tech.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Vista Mobile (Grid completo) */}
      <motion.div
        className={styles.techGrid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {techCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className={styles.categorySection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            style={{
              borderColor: category.color,
            }}
          >
            <h3
              className={styles.categoryTitle}
              style={{ color: category.color }}
            >
              <span className={styles.categoryTitleIcon}>{category.icon}</span>
              {category.name}
            </h3>
            <div className={styles.categoryGrid}>
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  className={`${styles.gridItem} ${
                    category.name === "Diseño & Edición"
                      ? styles.designGridItem
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                  viewport={{ once: true }}
                  style={{
                    borderColor: category.color,
                  }}
                >
                  <div
                    className={`${styles.gridIcon} ${
                      category.name === "Diseño & Edición"
                        ? styles.designIcon
                        : ""
                    }`}
                    style={{ color: category.iconColor }}
                  >
                    {tech.icon}
                  </div>
                  <div className={styles.gridName}>{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
