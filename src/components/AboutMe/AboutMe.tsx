"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/about.module.css";

export default function AboutMe() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        {/* Imagen */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://res.cloudinary.com/diefdex1h/image/upload/v1757362457/portimg1_bpg921.jpg"
            alt="Emiliano - Especialista WordPress y Elementor"
            fill
            className={styles.image}
          />
          <div className={styles.imageOverlay}></div>
        </motion.div>

        {/* Texto */}
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={styles.title}>
            <span className={styles.titleAccent}>Sobre</span> Mí
          </h2>

          <div className={styles.description}>
            <p>
              <span className={styles.highlight}>Soy Emiliano</span>,
              especialista en
              <span className={styles.accent}>
                {" "}
                WordPress y Elementor
              </span>
              , con
              <span className={styles.accent}>
                {" "}
                3 años de experiencia   
              </span>
               creando y optimizando sitios web profesionales.
            </p>

            <p>
              Trabajo enfocado en
              <span className={styles.accent}>
                {" "}
                rendimiento, SEO y experiencia de usuario
              </span>
              , desarrollando sitios administrables, escalables y preparados
              para cumplir con
              <span className={styles.accent}>
                {" "}
                Core Web Vitals y PageSpeed
              </span>
              .
            </p>

            <p>
              Tengo experiencia en
              <span className={styles.accent}>
                {" "}
                WooCommerce, mantenimiento WordPress
              </span>
              , optimización técnica, mejoras continuas y resolución de
              problemas comunes como
              <span className={styles.accent}>
                {" "}
                errores SEO, rendimiento y estructura
              </span>
              .
            </p>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2.5+</span>
              <span className={styles.statLabel}>Años en WordPress</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Sitios y Proyectos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Foco en Performance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
