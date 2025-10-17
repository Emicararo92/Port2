/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/magazine.module.css";
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
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
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PuntoCliente CRM",
    description:
      "CRM completo para gestión de clientes y vendedores, con estadísticas detalladas, formularios personalizados y control de actividades. Incluye dashboard interactivo y reportes en tiempo real.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "CSS Modules",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Framer Motion",
      "Chart.js",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1757365013/VideoCRMCONBELL_mqkybo.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365236/Screenshot_2025-09-05_115650_rvqubh.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365237/Screenshot_2025-09-05_115638_okmc5i.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365267/Screenshot_2025-09-05_115623_ltw16e.png",
    ],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/usuario/ecommerce",
  },
  {
    id: 2,
    title: "Conbell Web",
    description:
      "Sitio corporativo moderno desarrollado en React, con librerías personalizadas y optimización SEO. Incluye integración de formularios de contacto, chat en vivo y diseño responsivo.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "CSS Modules",
      "Node.js",
      "Vercel",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1757365023/CONBELLVIDEOWEB_dcxq8v.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365365/Screenshot_2025-09-05_112907_pprbrb.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365364/Screenshot_2025-09-05_112918_lafeww.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365364/Screenshot_2025-09-05_112929_caknge.png",
    ],
    liveUrl: "https://corporate-site.com",
    githubUrl: "https://github.com/usuario/wordpress-theme",
  },
  {
    id: 3,
    title: "Simma Wines",
    description:
      "Sitio corporativo para bodega, desarrollado en WordPress con theme personalizado y plugins a medida. Optimizado para SEO, con galerías de productos y reservas de catas online.",
    technologies: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript",
      "CSS",
      "MySQL",
      "ACF",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1757365007/SIMMA_wenjpa.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365373/Screenshot_2025-09-08_180208_uhyixq.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365373/Screenshot_2025-09-08_180217_wjqhqv.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365372/Screenshot_2025-09-08_180228_vrrdpo.png",
    ],
    liveUrl: "https://corporate-site.com",
    githubUrl: "https://github.com/usuario/wordpress-theme",
  },
  {
    id: 4,
    title: "TitanoMaquia Games",
    description:
      "Sitio web para estudio de videojuegos, desarrollado en React con librerías avanzadas de animación y multimedia. Optimizado para SEO y rendimiento, con integración de trailers y demos interactivas.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "CSS Modules",
      "Three.js",
      "Framer Motion",
      "Node.js",
      "Vercel",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1757365015/TITANO_wzbi1x.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365361/Screenshot_2025-09-05_113213_vlz634.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365360/Screenshot_2025-09-05_113232_wubwyw.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365360/Screenshot_2025-09-05_113222_xy0wy2.png",
    ],
    liveUrl: "https://corporate-site.com",
    githubUrl: "https://github.com/usuario/wordpress-theme",
  },
  {
    id: 5,
    title: "FutbolLink",
    description:
      "Plataforma web para gestión de empleo en fútbol, con registro de usuarios, bolsa de trabajo y seguimiento de interacciones entre jugadores, clubes y entrenadores.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "CSS Modules",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Framer Motion",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1757365011/FUTLINK_r4uh4b.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365368/Screenshot_2025-09-05_112526_qgo9y2.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365370/Screenshot_2025-09-05_112505_mqftu6.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1757365369/Screenshot_2025-09-05_112517_cuwwgb.png",
    ],
    liveUrl: "https://www.futbolink.net/",
    githubUrl: "https://github.com/usuario/wordpress-theme",
  },
  {
    id: 6,
    title: "Julio Vanoli",
    description:
      "Plataforma web para distribuidora mayorista de indumentaria, enfocada en ventas al por mayor. Incluye catálogo dinámico, sistema de consultas rápidas, integración con redes sociales y diseño responsivo para maximizar alcance comercial.",
    technologies: [
      "WordPress",
      "Elementor",
      "WordFence",
      "Join Chat",
      "CSS",
      "PHP",
      "HTML",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1760709748/JV_ez6a2g.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710079/Screenshot_2025-10-17_110436_mcxpuq.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710078/Screenshot_2025-10-17_110504_ssgqcl.png",
    ],
    liveUrl: "https://corporate-site.com",
    githubUrl: "https://github.com/usuario/wordpress-theme",
  },
  {
    id: 7,
    title: "Luxury",
    description:
      "Plataforma web para empresa de transporte corporativo y turístico. Permite gestionar reservas, mostrar rutas y servicios, y conectar con clientes de forma rápida y clara. Incluye mapas interactivos, integración con formularios personalizados y diseño moderno optimizado para móviles.",
    technologies: [
      "WordPress",
      "Elementor",
      "WordFence",
      "Contact Form",
      "Join Chat",
      "CSS",
      "PHP",
      "HTML",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1760709730/LUX_oddke2.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710078/Screenshot_2025-10-17_110600_vdjgfv.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710078/Screenshot_2025-10-17_110619_jwoiwj.png",
    ],
    liveUrl: "https://corporate-site.com",
    githubUrl: "https://github.com/usuario/wordpress-theme",
  },
  {
    id: 7,
    title: "Valle del Rahue - Cooming Soon",
    description:
      "Ecommerce para una marca de jugos naturales y productos saludables. Desarrollado con enfoque en una experiencia de compra fluida, diseño limpio y storytelling de marca. Contará con carrito de compras, pasarela de pagos integrada y secciones informativas sobre los productos.",
    technologies: [
      "WordPress",
      "Elementor",
      "WordFence",
      "Contact Form",
      "Join Chat",
      "CSS",
      "PHP",
      "HTML",
    ],
    video:
      "https://res.cloudinary.com/diefdex1h/video/upload/v1760709735/Valle_oaaglk.mp4",
    images: [
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710077/Screenshot_2025-10-17_110709_uttcyu.png",
      "https://res.cloudinary.com/diefdex1h/image/upload/v1760710077/Screenshot_2025-10-17_110736_zuo3nh.png",
    ],
    liveUrl: "https://corporate-site.com",
    githubUrl: "https://github.com/usuario/wordpress-theme",
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
