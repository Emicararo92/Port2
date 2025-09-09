"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, Briefcase, Cpu, User, Mail } from "lucide-react";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo - Solo Icono */}
        <Link href="#hero" className={styles.logo}>
          <Image
            src="https://res.cloudinary.com/diefdex1h/image/upload/v1757444936/Screenshot_2025-09-09_160842_xuc53r.png"
            alt="Logo"
            width={40}
            height={40}
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Links - Solo Iconos */}
        <div className={styles.desktopLinks}>
          <Link href="#hero" className={styles.navLink}>
            <Home size={20} />
          </Link>
          <Link href="#proyectos" className={styles.navLink}>
            <Briefcase size={20} />
          </Link>
          <Link href="#tecnologia" className={styles.navLink}>
            <Cpu size={20} />
          </Link>
          <Link href="#about" className={styles.navLink}>
            <User size={20} />
          </Link>
          <Link href="#contacto" className={styles.navLink}>
            <Mail size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuButton}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={styles.menuButton}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Solo Iconos */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link
            href="#hero"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <Home size={24} />
          </Link>
          <Link
            href="#proyectos"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <Briefcase size={24} />
          </Link>
          <Link
            href="#tecnologia"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <Cpu size={24} />
          </Link>
          <Link
            href="#about"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <User size={24} />
          </Link>
          <Link
            href="#contacto"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <Mail size={24} />
          </Link>
        </div>
      )}
    </nav>
  );
}
