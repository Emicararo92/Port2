"use client";

import { motion } from "framer-motion";
import styles from "../../styles/hero.module.css";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        {/* Bloque de descripción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={styles.details}
        >
          <div>
            <h1 className={styles.name}>Emiliano Cararo</h1>
            <h2 className={styles.role}>Especialista WordPress & Elementor</h2>
          </div>

          <div className={styles.tags}>
            <span className={styles.tag}>WordPress</span>
            <span className={styles.tag}>Elementor Pro</span>
            <span className={styles.tag}>WooCommerce</span>
            <span className={styles.tag}>SEO & Performance</span>
          </div>

          <div className={styles.buttons}>
            <a href="#contacto" className={styles.btnPrimary}>
              Contactar ahora
              <ArrowRight size={18} />
            </a>
            <a href="#proyectos" className={styles.btnSecondary}>
              Ver proyectos
              <ChevronDown size={18} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={styles.description}
        >
          <p>
            Diseño, optimizo y mantengo sitios <strong>WordPress</strong> con{" "}
            <strong>Elementor</strong>, enfocados en{" "}
            <strong>rendimiento, SEO y experiencia de usuario</strong>.
          </p>
          <br />
          <p>
            Trabajo con sitios reales, pensados para convertir, posicionar y
            escalar sin problemas.
          </p>
        </motion.div>

        {/* Bloque de detalles */}
      </div>
    </section>
  );
}
