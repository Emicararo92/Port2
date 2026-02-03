/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/magazine.module.css";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiYoutube,
  FiImage,
} from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  video: string;
  images: string[];
}

const projects: Project[] = [
  // ======================
  // WORDPRESS / ELEMENTOR (Prioridad principal)
  // ======================

  {
    id: 1,
    title: "Simma Wines",
    description:
      "Sitio corporativo completo para bodega de vinos, desarrollado en WordPress con Elementor Pro. Implementación de sistema de reservas para catas, galerías de productos interactivas y optimización SEO avanzada. Diseño elegante que refleja la identidad premium de la marca.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "Advanced Custom Fields",
      "WooCommerce",
      "Optimización SEO",
      "Optimización de Performance",
      "Diseño Responsive",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1757365007/SIMMA_wenjpa.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365373/Screenshot_2025-09-08_180208_uhyixq.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365373/Screenshot_2025-09-08_180217_wjqhqv.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365372/Screenshot_2025-09-08_180228_vrrdpo.png",
    ],
  },
  {
    id: 2,
    title: "Luxury Transport",
    description:
      "Plataforma WordPress para empresa de transporte ejecutivo y turístico de alta gama. Implementación de formularios de reserva personalizados, sistema de cotización en tiempo real y diseño mobile-first optimizado para conversión. Integración con WhatsApp Business para atención inmediata.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "Contact Form 7",
      "Integración WhatsApp",
      "Diseño Mobile-First",
      "Optimización de Performance",
      "Seguridad WordPress",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1770136979/TLA_xebjc9.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1770136974/Screenshot_2026-02-03_134208_m6socw.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1770136976/Screenshot_2026-02-03_134134_nva04a.png",
    ],
  },
  {
    id: 3,
    title: "Julio Vanoli",
    description:
      "E-commerce WordPress para distribuidora mayorista de indumentaria. Implementación de catálogo dinámico con filtros avanzados, integración directa con WhatsApp para pedidos y sistema de gestión de inventario. Diseño optimizado para conversión y velocidad de carga.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "WooCommerce",
      "WhatsApp Commerce",
      "Gestión de Catálogo",
      "Wordfence Security",
      "Optimización de Cache",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1760709748/JV_ez6a2g.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710079/Screenshot_2025-10-17_110436_mcxpuq.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710078/Screenshot_2025-10-17_110504_ssgqcl.png",
    ],
  },
  {
    id: 4,
    title: "Metele Más Diseño",
    description:
      "Tienda online WordPress para marca de indumentaria personalizada y estampados. Implementación de sistema de personalización de productos, integración con métodos de pago locales y diseño visual impactante. Optimización para Core Web Vitals y experiencia de usuario móvil.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "WooCommerce",
      "Personalización de Productos",
      "Smart Slider 3",
      "Integración de Pagos",
      "Optimización UX/UI",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1770137004/MMD_npkkdl.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1770137002/Screenshot_2026-02-03_113139_k3cnr3.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1770136999/Screenshot_2026-02-03_113205_oc01wv.png",
    ],
  },
  {
    id: 5,
    title: "Paso Urbano",
    description:
      "E-commerce WordPress para marca emergente de zapatillas urbanas. Implementación de catálogo visual atractivo, sistema de tallas y guía de medidas, y optimización para motores de búsqueda. Preparación para futura integración de pagos online y logística de envíos.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "WooCommerce",
      "Rank Math SEO",
      "Variantes de Producto",
      "Página Coming Soon",
      "Optimización Pre-lanzamiento",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1770137021/PU_txk03s.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1770137021/Screenshot_2026-02-03_114338_vidlts.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1770137021/Screenshot_2026-02-03_114253_lj4vnh.png",
    ],
  },
  {
    id: 6,
    title: "Valle del Rahue",
    description:
      "E-commerce WordPress para marca de jugos naturales y alimentos saludables. Enfoque en storytelling de marca, experiencia de compra intuitiva y preparación para integración de pagos online. Diseño que comunica frescura y naturalidad del producto.",
    technologies: [
      "WordPress",
      "Elementor Pro",
      "WooCommerce",
      "Storytelling de Marca",
      "Fotografía de Producto",
      "Optimización de Checkout",
      "Estrategia Coming Soon",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1760709735/Valle_oaaglk.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710077/Screenshot_2025-10-17_110709_uttcyu.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710077/Screenshot_2025-10-17_110736_zuo3nh.png",
    ],
  },

  // ======================
  // REACT / NEXT.JS (Desarrollo moderno)
  // ======================

  {
    id: 7,
    title: "Puni Delivery",
    description:
      "Aplicación web corporativa para empresa de cadetería on-demand. Desarrollo completo con React y Next.js, incluyendo sistema de cotización en tiempo real, panel de administración y chatbot integrado. Optimización para velocidad y experiencia de usuario móvil.",
    technologies: [
      "React",
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "EmailJS",
      "Integración Chatbot",
      "Actualizaciones Tiempo Real",
      "Optimización Móvil",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1770137016/Puni_yhyqm0.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1770137010/Screenshot_2026-02-03_113517_g7mtvy.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1770137009/Screenshot_2026-02-03_113500_lxqgep.png",
    ],
  },
  {
    id: 8,
    title: "PuntoCliente CRM",
    description:
      "Sistema de gestión de relaciones con clientes desarrollado desde cero. Panel de control con estadísticas en tiempo real, gestión de contactos, seguimiento de ventas y generación de reportes automatizados. Arquitectura escalable y seguridad empresarial.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Chart.js",
      "Framer Motion",
      "Acceso por Roles",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1757365013/VideoCRMCONBELL_mqkybo.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365236/Screenshot_2025-09-05_115650_rvqubh.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365237/Screenshot_2025-09-05_115638_okmc5i.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365267/Screenshot_2025-09-05_115623_ltw16e.png",
    ],
  },
  {
    id: 9,
    title: "Conbell Web",
    description:
      "Sitio corporativo moderno desarrollado con React y Next.js. Implementación de animaciones fluidas con Framer Motion, diseño responsive avanzado y optimización de performance para Core Web Vitals. Arquitectura componentizada y SEO técnico.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
      "Hosting Vercel",
      "Optimización de Performance",
      "SEO Técnico",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1757365023/CONBELLVIDEOWEB_dcxq8v.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365365/Screenshot_2025-09-05_112907_pprbrb.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365364/Screenshot_2025-09-05_112918_lafeww.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365364/Screenshot_2025-09-05_112929_caknge.png",
    ],
  },
];

// Animaciones para el efecto de página
const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  in: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  out: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
    scale: 0.8,
  }),
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export default function ProjectsMagazine() {
  const [[currentPage, direction], setCurrentPage] = useState([0, 0]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const navigateTo = (newPage: number) => {
    const newDirection = newPage > currentPage ? 1 : -1;
    setCurrentPage([newPage, newDirection]);
  };

  const nextPage = () => {
    if (currentPage < projects.length - 1) {
      navigateTo(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      navigateTo(currentPage - 1);
    }
  };

  const openVideoInNewTab = (videoUrl: string) => {
    window.open(videoUrl, "_blank");
  };

  const currentProject = projects[currentPage];

  return (
    <section className={styles.magazineSection}>
      <h1 id="proyectos" className={styles.tittle}>
        Proyectos Recientes
      </h1>
      {/* Controles de navegación */}
      <div className={styles.controls}>
        <motion.button
          onClick={prevPage}
          className={styles.navButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentPage === 0}
        >
          <FiChevronLeft />
        </motion.button>

        <span className={styles.pageCounter}>
          Proyecto {currentPage + 1} de {projects.length}
        </span>

        <motion.button
          onClick={nextPage}
          className={styles.navButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={currentPage === projects.length - 1}
        >
          <FiChevronRight />
        </motion.button>
      </div>

      {/* Contenedor del proyecto actual con animación */}
      <div className={styles.magazineContainer}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
            className={styles.page}
          >
            <div className={styles.pageContent}>
              {/* Lado izquierdo - Video */}
              <div className={styles.leftPage}>
                <div className={styles.videoContainer}>
                  <video
                    src={currentProject.video}
                    muted
                    autoPlay
                    loop
                    className={styles.video}
                    controls
                    preload="auto"
                  />
                  <div className={styles.videoOverlay}>
                    <button
                      className={styles.watchFullButton}
                      onClick={() => openVideoInNewTab(currentProject.video)}
                    >
                      <FiYoutube /> Ver video completo
                    </button>
                  </div>
                </div>
              </div>

              {/* Lado derecho - Contenido */}
              <div className={styles.rightPage}>
                <h3 className={styles.projectTitle}>{currentProject.title}</h3>

                <div className={styles.techStack}>
                  {currentProject.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <p className={styles.projectDescription}>
                  {currentProject.description}
                </p>

                <div className={styles.imageGallery}>
                  {currentProject.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      className={styles.imageThumb}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image}
                        alt={`${currentProject.title} ${imageIndex + 1}`}
                        width={100}
                        height={75}
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/100x75/0a0a12/00d9ff?text=Imagen+${
                            imageIndex + 1
                          }`;
                        }}
                      />
                      <div className={styles.imageHover}>
                        <FiImage />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores de página */}
      <div className={styles.pageIndicators}>
        {projects.map((_, index) => (
          <button
            key={index}
            className={`${styles.pageIndicator} ${
              currentPage === index ? styles.active : ""
            }`}
            onClick={() => navigateTo(index)}
          />
        ))}
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.imageModal}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Preview"
              width={600}
              height={400}
              style={{ objectFit: "contain" }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://via.placeholder.com/600x400/0a0a12/00d9ff?text=Imagen+No+Disponible";
              }}
            />
            <button
              className={styles.closeModal}
              onClick={() => setSelectedImage(null)}
            >
              <FiX />
            </button>
          </div>
        </motion.div>
      )}

      {/* Efectos de fondo cyberpunk */}
      <div className={styles.cyberpunkBg}></div>
    </section>
  );
}
