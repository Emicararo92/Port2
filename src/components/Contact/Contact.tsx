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
      url: "https://instagram.com/emicararo",
      color: "#E1306C",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/emilianocararo",
      color: "#0077B5",
    },
    {
      name: "GitHub",
      icon: <FiGithub />,
      url: "https://github.com/Emicararo92",
      color: "#ffffff",
    },
    {
      name: "Descargar CV",
      icon: <FiDownload />,
      url: "https://publuu.com/flip-book/965375/2119434",
      color: "#00d9ff",
      download: true,
    },
    {
      name: "Teléfono",
      icon: <FiPhone />,
      url: "https://w.app/o80rwe",
      color: "#25D366",
    },
    {
      name: "Email",
      icon: <FiMail />,
      url: "mailto:emicararo92@gmail.com",
      color: "#FF00C8",
    },
  ];

  return (
    <section className={styles.social}>
      {/* Elementos decorativos de fondo */}
      <div className={styles.plate}></div>
      <div className={styles.plate2}></div>

      <div id="contacto" className={styles.content}>
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
      </div>
    </section>
  );
}
