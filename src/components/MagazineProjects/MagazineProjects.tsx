"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
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

// Tipos para react-pageflip
type HTMLFlipBookType = typeof HTMLFlipBook & {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
  };
};

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

interface PageFlipEvent {
  data: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Plataforma de e-commerce completa con carrito de compras, pasarela de pago y panel administrativo. Desarrollada con React y Node.js, con énfasis en experiencia de usuario y rendimiento.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1556742044-3c6d7b2ebc32?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1556742045-0cfed4f6a45d?w=300&h=200&fit=crop",
    ],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/usuario/ecommerce",
  },
  {
    id: 2,
    title: "WordPress Corporate Site",
    description:
      "Sitio corporativo desarrollado en WordPress con theme personalizado y plugins custom. Optimizado para SEO y rendimiento, con integración de CRM y analytics.",
    technologies: ["WordPress", "PHP", "JavaScript", "CSS3"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5e?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5f?w=300&h=200&fit=crop",
    ],
    liveUrl: "https://corporate-site.com",
    githubUrl: "https://github.com/usuario/wordpress-theme",
  },
  // Agrega los otros 5 proyectos aquí...
];

export default function ProjectsMagazine() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const flipBook = useRef<HTMLFlipBookType>(null);

  const nextPage = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipPrev();
    }
  };

  const handlePageChange = (e: PageFlipEvent) => {
    setCurrentPage(e.data);
  };

  const openVideoInNewTab = (videoUrl: string) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <section className={styles.magazineSection}>
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
          Página {currentPage + 1} de {projects.length}
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

      {/* Revista */}
      <div className={styles.magazineContainer}>
        <HTMLFlipBook
          ref={flipBook}
          width={550}
          height={700}
          size="stretch"
          minWidth={300}
          maxWidth={550}
          minHeight={500}
          maxHeight={700}
          maxShadowOpacity={0.5}
          showCover={false}
          onFlip={handlePageChange}
          className={styles.flipBook}
          style={{}}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={false}
          disableFlipByClick={false}
          mobileScrollSupport={true}
        >
          {projects.map((project) => (
            <div key={project.id} className={styles.page}>
              <div className={styles.pageContent}>
                {/* Lado izquierdo - Video */}
                <div className={styles.leftPage}>
                  <div className={styles.videoContainer}>
                    {project.video.includes("youtube") ||
                    project.video.includes("youtu.be") ? (
                      <iframe
                        src={project.video}
                        className={styles.videoFrame}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={project.title}
                      />
                    ) : (
                      <video
                        src={project.video}
                        muted
                        autoPlay
                        loop
                        className={styles.video}
                        controls
                      />
                    )}

                    <div className={styles.videoOverlay}>
                      <button
                        className={styles.watchFullButton}
                        onClick={() => openVideoInNewTab(project.video)}
                      >
                        <FiYoutube /> Ver video completo
                      </button>
                    </div>
                  </div>
                </div>

                {/* Lado derecho - Contenido */}
                <div className={styles.rightPage}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>

                  <div className={styles.techStack}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.imageGallery}>
                    {project.images.map((image, imageIndex) => (
                      <motion.div
                        key={imageIndex}
                        className={styles.imageThumb}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} ${imageIndex + 1}`}
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

                  <div className={styles.projectLinks}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveLink}
                    >
                      <FiExternalLink /> Ver Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                    >
                      <FiGithub /> Código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </HTMLFlipBook>
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
