'use client';

import { motion } from 'framer-motion';
import styles from './about.module.css';

import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

export default function About() {
  return (
    <motion.main 
      className={styles.aboutMain}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className={styles.card}
        variants={itemVariants}
      >
        <motion.h1 
          className={styles.aboutTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Tentang Saya
        </motion.h1>
        <motion.div 
          className={styles.aboutContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p 
            className={styles.aboutParagraph}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            Lulusan baru Teknik Industri dengan semangat tinggi untuk berkontribusi dalam pengembangan proses bisnis dan peningkatan efisiensi operasional. Memiliki pengalaman berorganisasi sebagai Kepala Komunikasi dan Informasi, yang mengasah keterampilan kepemimpinan, manajemen waktu, dan komunikasi. Aktif dalam program pengabdian kepada masyarakat, kompetisi, dan MBKM, yang membangun pemahaman praktis tentang analisis masalah, kerja sama tim, dan pengambilan keputusan strategis. 
          </motion.p>
          <motion.p 
            className={styles.aboutParagraph}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            Berorientasi pada solusi, dengan dasar yang kuat dalam analisis data dan metode pemecahan masalah, dan mampu bekerja secara efektif dalam lingkungan yang dinamis dan kolaboratif.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        className={`${styles.card} ${styles.educationCard}`}
        variants={itemVariants}
      >
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Pendidikan
        </motion.h2>
        <motion.div 
          className={styles.educationItem}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src="/image/UMC.png"
            alt="Universitas Muhammadiyah Cirebon Logo"
            className={styles.educationLogo}
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          />
          <motion.div 
            className={styles.educationDetails}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <strong>S1 Teknik Industri</strong> – Universitas Muhammadiyah Cirebon<br />
            2020 – 2024<br />
            <span className={styles.gpa}>IPK: 3.49</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

