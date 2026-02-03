"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Tecnologías", href: "#tecnologia" },
    { label: "Sobre mí", href: "#about" },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="#hero" className={styles.logo} onClick={handleLinkClick}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoImageContainer}>
                <Image
                  src="https://res.cloudinary.com/diefdex1h/image/upload/v1757444936/Screenshot_2025-09-09_160842_xuc53r.png"
                  alt="Emiliano Cararo"
                  width={42}
                  height={42}
                  className={styles.logoImage}
                  priority
                />
                <div className={styles.logoGlow} />
              </div>
              <span className={styles.logoText}>
                <span className={styles.logoName}>Emiliano</span>
                <span className={styles.logoLastName}>Cararo</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className={styles.contactButton}
              onClick={handleLinkClick}
            >
              <span className={styles.buttonText}>Contacto</span>
              <MessageCircle size={16} className={styles.buttonIcon} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.open : ""}`}
      >
        <div className={styles.mobileMenu}>
          <div className={styles.mobileHeader}>
            <div className={styles.mobileLogo}>
              <Image
                src="https://res.cloudinary.com/diefdex1h/image/upload/v1757444936/Screenshot_2025-09-09_160842_xuc53r.png"
                alt="Logo"
                width={36}
                height={36}
              />
              <span>Emiliano Cararo</span>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={22} />
            </button>
          </div>

          <div className={styles.mobileLinks}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileLink}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className={styles.mobileContact}
              onClick={handleLinkClick}
            >
              Contacto
            </Link>
          </div>

          <div className={styles.mobileFooter}>
            <p className={styles.footerText}>
              Especialista WordPress & Elementor
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
