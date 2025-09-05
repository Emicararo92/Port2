"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/hero.module.css";

export default function Hero2() {
  return (
    <section className={styles.hero}>
      {/* Placas decorativas */}
      <div className={`${styles.plate} ${styles.plate1}`} />
      <div className={`${styles.plate} ${styles.plate2}`} />

      <div className={styles.content}>
        {/* Bloque de descripción */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.description}
        >
          Conecto mi realidad con lo digital: pienso, creo, escucho y mejoro. Me
          gusta hacer cosas útiles y ayudar a la gente, siempre buscando la
          forma más simple de lograrlo. Y simple no significa que no pueda ser
          bello; al fin y al cabo, todo entra por los ojos. ¡Gracias por pasar
          por acá! En este espacio vas a poder conocer mis tecnologías, ver
          algunos de mis proyectos y descubrir un poco más sobre mí
        </motion.div>

        {/* Bloque de detalles */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.details}
        >
          <h1 className={styles.name}>Emiliano Cararo</h1>
          <h2 className={styles.role}>Diseñador & Desarrollador Web</h2>

          <div className={styles.tags}>
            <span className={styles.tag}>FullStack</span>
            <span className={styles.tag}>Frontend</span>
          </div>

          <div className={styles.buttons}>
            <a href="#" className={styles.btnPrimary}>
              Contacto
            </a>
            <a href="#" className={styles.btnSecondary}>
              Proyectos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
