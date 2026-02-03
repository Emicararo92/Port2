"use client";

import { motion } from "framer-motion";
import styles from "../../styles/social.module.css";
import { FiLinkedin, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      name: "WhatsApp",
      handle: "+54 351 517-4441",
      icon: <FaWhatsapp />,
      url: "https://wa.me/543515174441",
      color: "#25D366",
      bgColor: "rgba(37, 211, 102, 0.1)",
    },
    {
      name: "Email",
      handle: "emicararo92@gmail.com",
      icon: <FiMail />,
      url: "mailto:emicararo92@gmail.com",
      color: "#7c3aed",
      bgColor: "rgba(124, 58, 237, 0.1)",
    },
    {
      name: "LinkedIn",
      handle: "in/emilianocararo",
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/emilianocararo",
      color: "#0077B5",
      bgColor: "rgba(0, 119, 181, 0.1)",
    },
  ];

  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.content}>
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>¿Trabajamos juntos?</h2>

          <p className={styles.subtitle}>
            Estoy disponible para proyectos de{" "}
            <strong>WordPress, Elementor, WooCommerce</strong> y{" "}
            <strong>optimización SEO y performance</strong>.
            <br />
            Contáctame y coordinamos una reunión.
          </p>
        </motion.div>

        {/* Grid de contacto */}
        <div className={styles.contactGrid}>
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.cardIcon} style={{ color: link.color }}>
                <div
                  className={styles.cardIconBackground}
                  style={{ backgroundColor: link.color }}
                />
                {link.icon}
              </div>

              <h3 className={styles.cardName}>{link.name}</h3>
              <p className={styles.cardHandle}>{link.handle}</p>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.ctaTitle}>¿Tienes un proyecto en mente?</h3>

          <motion.a
            href="https://wa.me/543515174441"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMessageSquare className={styles.buttonIcon} />
            Iniciar conversación
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className={styles.footerText}>
            Respuesta en menos de 24 horas • Especialista WordPress & Elementor
          </p>
        </motion.div>
      </div>
    </section>
  );
}
