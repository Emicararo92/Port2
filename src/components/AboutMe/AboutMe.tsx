"use client";

import { motion } from "framer-motion";
import styles from "../../styles/about.module.css";
import { useState, useRef, useEffect } from "react";

export default function AboutMe() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        {/* Video */}
        <motion.div
          className={styles.videoContainer}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/diefdex1h/video/upload/v1770140254/Gen-4_Turbo_Animaci%C3%B3n_sutil_y_profesional_de_un_escritorio_moderno_de_desarrollo_WordPressLa_c%C3%A1mara_hace_un_movimiento_lento_tipo_dolly-in_hacia_el_monitor_principal_donde_se_ve_el_logo_de_WordPress_vj44uv.mp4"
            className={styles.video}
            muted
            loop
            playsInline
            preload="auto"
            poster="/about-poster.jpg"
          />

          <div className={styles.videoOverlay} />

          <button
            className={styles.playButton}
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
          ></button>
        </motion.div>

        {/* Texto */}
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            <span className={styles.titleAccent}>Sobre</span> Mí
          </h2>

          <div className={styles.description}>
            <p>
              <span className={styles.highlight}>Soy Emiliano</span>,
              especialista en{" "}
              <span className={styles.accent}>WordPress y Elementor</span>, con{" "}
              <span className={styles.accent}>
                más de 3 años de experiencia
              </span>{" "}
              creando y optimizando sitios web profesionales.
            </p>

            <p>
              Trabajo enfocado en{" "}
              <span className={styles.accent}>
                rendimiento, SEO y experiencia de usuario
              </span>
              , desarrollando sitios administrables, escalables y preparados
              para cumplir con{" "}
              <span className={styles.accent}>Core Web Vitals y PageSpeed</span>
              .
            </p>

            <p>
              Tengo experiencia en{" "}
              <span className={styles.accent}>
                WooCommerce, mantenimiento WordPress
              </span>
              , optimización técnica, mejoras continuas y resolución de
              problemas comunes como{" "}
              <span className={styles.accent}>
                errores SEO, rendimiento y estructura
              </span>
              .
            </p>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Años en WordPress</span>
            </motion.div>

            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Sitios y Proyectos</span>
            </motion.div>

            <motion.div
              className={styles.stat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Foco en Performance</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
