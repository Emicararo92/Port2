"use client";

import { motion } from "framer-motion";
import styles from "../../styles/tecnologias.module.css";
import { useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiWordpress,
  SiTailwindcss,
  SiCss3,
  SiSupabase,
  SiTrello,
  SiJira,
  SiGithub,
  SiFigma,
  SiCanva,
  SiElementor,
  SiNodedotjs,
  SiVercel,
  SiWoocommerce,
  SiOpenai,
} from "react-icons/si";
import { FaDatabase, FaMicrosoft, FaVideo } from "react-icons/fa";

// Tecnologías organizadas por categorías
const techCategories = [
  {
    name: "Desarrollo Web",
    color: "#00d9ff",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    name: "WordPress",
    color: "#ff00c8",
    technologies: [
      { name: "WordPress", icon: <SiWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "WooCommerce", icon: <SiWoocommerce /> },
    ],
  },
  {
    name: "Bases de Datos",
    color: "#00ff99",
    technologies: [
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    name: "Herramientas",
    color: "#ff9900",
    technologies: [
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Trello", icon: <SiTrello /> },
      { name: "JIRA", icon: <SiJira /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
  {
    name: "Diseño",
    color: "#ff66ff",
    technologies: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Video Edition", icon: <FaVideo /> },
      { name: "OBS", icon: <FaVideo /> },
    ],
  },
  {
    name: "IA & Asistentes",
    color: "#66ffcc",
    technologies: [
      { name: "ChatGPT", icon: <SiOpenai /> },
      { name: "Copilot", icon: <FaMicrosoft /> },
    ],
  },
];

export default function Technologies3() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Rotación automática de categorías

  return (
    <section className={styles.technologies}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Technologies & Tools
      </motion.h2>

      {/* Selector de categorías */}
      <div className={styles.categorySelector}>
        {techCategories.map((category, index) => (
          <button
            key={index}
            className={`${styles.categoryButton} ${
              activeCategory === index ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(index)}
            style={
              {
                "--category-color": category.color,
                borderColor: category.color,
              } as React.CSSProperties
            }
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Carrusel 3D para desktop */}
      {!isMobile && (
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {techCategories[activeCategory].technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={styles.techItem}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={
                  {
                    "--category-color": techCategories[activeCategory].color,
                    borderColor: techCategories[activeCategory].color,
                  } as React.CSSProperties
                }
              >
                <div className={styles.techIcon}>{tech.icon}</div>
                <div className={styles.techName}>{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Grid para móviles */}
      <motion.div
        className={styles.techGrid}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.categorySection}>
            <h3
              className={styles.categoryTitle}
              style={{ color: category.color }}
            >
              {category.name}
            </h3>
            <div className={styles.categoryGrid}>
              {category.technologies.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  className={styles.gridItem}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  style={
                    {
                      "--category-color": category.color,
                      borderColor: category.color,
                    } as React.CSSProperties
                  }
                >
                  <div className={styles.gridIcon}>{tech.icon}</div>
                  <div className={styles.gridName}>{tech.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
