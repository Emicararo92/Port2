"use client";

import { motion } from "framer-motion";
import styles from "../../styles/social.module.css";
import {
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiDownload,
  FiPhone,
  FiMail,
} from "react-icons/fi";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FiInstagram />,
      url: "https://instagram.com/tu_usuario",
      color: "#E1306C",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://linkedin.com/in/tu_usuario",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: <FiGithub />,
      url: "https://github.com/tu_usuario",
      color: "#ffffff",
    },
    {
      name: "Descargar CV",
      icon: <FiDownload />,
      url: "/cv-emiliano-cararo.pdf",
      color: "#00d9ff",
      download: true,
    },
    {
      name: "Teléfono",
      icon: <FiPhone />,
      url: "tel:+5491112345678",
      color: "#25D366",
    },
    {
      name: "Email",
      icon: <FiMail />,
      url: "mailto:emiliano@ejemplo.com",
      color: "#FF00C8",
    },
  ];

  return (
    <section className={styles.social}>
      {/* Elementos decorativos de fondo */}
      <div className={styles.plate}></div>
      <div className={styles.plate2}></div>

      <div className={styles.content}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Conectemos
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Estoy disponible para colaborar en proyectos interesantes. ¡No dudes
          en contactarme!
        </motion.p>

        <div className={styles.linksGrid}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className={styles.socialLink}
              target={link.download ? "_blank" : "_blank"}
              rel={
                link.download ? "noopener noreferrer" : "noopener noreferrer"
              }
              download={link.download}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ "--hover-color": link.color } as React.CSSProperties}
            >
              <div className={styles.iconWrapper}>{link.icon}</div>
              <span className={styles.linkName}>{link.name}</span>

              {/* Efecto de brillo al hover */}
              <div className={styles.hoverEffect}></div>
            </motion.a>
          ))}
        </div>

        {/* Información de contacto adicional */}
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.infoItem}>
            <FiPhone className={styles.infoIcon} />
            <span>+54 9 11 1234-5678</span>
          </div>
          <div className={styles.infoItem}>
            <FiMail className={styles.infoIcon} />
            <span>emiliano@ejemplo.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
