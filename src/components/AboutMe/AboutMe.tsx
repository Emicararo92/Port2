"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/about.module.css";

export default function AboutMe() {
  return (
    <section className={styles.about}>
      {/* Elementos decorativos de fondo */}

      <div className={styles.content}>
        {/* Imagen que ocupa el 100% del alto */}
        <motion.div
          id="about"
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://res.cloudinary.com/diefdex1h/image/upload/v1757362457/portimg1_bpg921.jpg"
            alt="Emiliano - Desarrollador"
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
              <span className={styles.highlight}>Soy Emiliano</span>, un
              apasionado desarrollador con
              <span className={styles.accent}>
                {" "}
                más de 2 años y medio de experiencia
              </span>{" "}
              en el mundo digital.
            </p>

            <p>
              Mi misión es crear{" "}
              <span className={styles.accent}>
                aplicaciones que resuelvan problemas reales
              </span>
              y{" "}
              <span className={styles.accent}>
                diseñar experiencias web completas
              </span>{" "}
              que marquen la diferencia. Cada línea de código es una oportunidad
              para innovar y mejorar la vida de las personas.
            </p>

            <p>
              Cuando no estoy frente al código, me encontrarás
              <span className={styles.accent}> jugando al fútbol</span>,
              compartiendo momentos con
              <span className={styles.accent}> amigos</span> o disfrutando del
              tiempo en
              <span className={styles.accent}> familia</span>. Creo firmemente
              en el equilibrio entre la pasión profesional y los valores
              personales.
            </p>
          </div>

          {/* Stats o información adicional */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2.5+</span>
              <span className={styles.statLabel}>Años de Experiencia</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Proyectos Completados</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Comprometido</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
