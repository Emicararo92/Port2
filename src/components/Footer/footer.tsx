"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Tecnologías", href: "#tecnologia" },
    { label: "Sobre mí", href: "#about" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Branding */}
        <div className={styles.brand}>
          <div className={styles.logoWrapper}>
            <Image
              src="https://res.cloudinary.com/diefdex1h/image/upload/v1757444936/Screenshot_2025-09-09_160842_xuc53r.png"
              alt="Emiliano Cararo"
              width={40}
              height={40}
              className={styles.logo}
            />
            <span className={styles.name}>
              <span className={styles.firstName}>Emiliano</span>{" "}
              <span className={styles.lastName}>Cararo</span>
            </span>
          </div>

          <p className={styles.description}>
            Especialista en <strong>WordPress & Elementor</strong>. Diseño,
            optimización y performance orientada a resultados.
          </p>
        </div>

        {/* Navegación */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <Link href="#contacto" className={styles.contactButton}>
            <span>Contacto</span>
            <MessageCircle size={16} />
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <p>
          © Emiliano Cararo · WordPress & Elementor
        </p>
      </div>
    </footer>
  );
}
