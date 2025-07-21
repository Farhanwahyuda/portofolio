'use client';

import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaUsers } from 'react-icons/fa';
import styles from './experience.module.css';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
  delay: number;
  logo?: string;
}

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

const internshipExperience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Warehouse Staff Intern',
    company: 'PT Samudera Selang',
    period: 'Mei - September 2024',
    description: [
      'Mencatat data stok masuk ke dalam sistem manajemen gudang secara akurat untuk memastikan ketersediaan data real-time, mendukung efisiensi operasional harian gudang hingga 100%.',
      'Mereview secara menyeluruh proses stock opname, termasuk metode pencatatan, penanganan barang, dan prosedur pemeriksaan fisik, yang berkontribusi dalam mengidentifikasi 3 area utama untuk perbaikan proses.',
      'Melakukan audit terhadap data stock-taking dan menemukan selisih antara data fisik dan sistem, serta menganalisis data historis dan wawancara staf guna mengidentifikasi pola kesalahan berulang.',
      'Mengidentifikasi akar penyebab dari kegagalan stock-taking menggunakan metode FMEA dan pendekatan 5 Whys, menghasilkan 6 rekomendasi perbaikan untuk mengurangi kesalahan pencatatan stok.'
    ],
    icon: <FaBriefcase className={styles.experienceIcon} />,
    delay: 0.2,
    logo: '/image/Samudera selang logo.png'
  },
  {
    id: 2,
    role: 'Production Staff Intern',
    company: 'PT Arteria Daya Mulia',
    period: 'November - Oktober 2023',
    description: [
      'Melakukan pengawasan kualitas terhadap hasil produksi benang untuk memastikan kesesuaian dengan standar mutu yang telah ditetapkan',
      'Mengawasi seluruh proses produksi benang dari awal hingga akhir, guna memastikan kelancaran alur kerja dan mendukung identifikasi potensi hambatan proses secara real-time',
      'Membantu dalam alokasi bahan baku sesuai kebutuhan pesanan, sehingga mendukung efisiensi penggunaan material'
    ],
    icon: <FaBriefcase className={styles.experienceIcon} />,
    delay: 0.2,
    logo: '/image/Arida logo.png'
  },
  {
    id: 3,
    role: 'Teacher Assistant',
    company: 'MBKM - Kampus Mengajar 4',
    period: 'Juli - Desember 2022',
    description: [
      'Mendampingi guru dalam pelaksanaan pembelajaran, terutama pada peningkatan kemampuan literasi dan numerasi.',
      'Membantu administrasi sekolah, termasuk pengelolaan data siswa dan pelaporan kegiatan harian.',
      'Mengembangkan modul pembelajaran berbasis teknologi untuk mendukung pembelajaran interaktif dan inklusif.',
      'Berkolaborasi dengan tim untuk menciptakan media pembelajaran yang kreatif dan sesuai dengan kebutuhan siswa.',
    ],
    icon: <FaGraduationCap className={styles.experienceIcon} />,
    delay: 0.2,
    logo: '/image/Logo Kampus Merdeka.png'
  },
];

const organizationalExperience: ExperienceItem[] = [
  {
    id: 1,
    role: 'Ketua Departemen Komunikasi dan Informasi',
    company: 'Himpunan Mahasiswa Teknik Industri',
    period: '2022 - 2023',
    description: [
      'Mengembangkan sistem komunikasi internal yang efektif untuk meningkatkan koordinasi antar anggota.',
      'Membangun dan menjaga komunikasi serta kolaborasi yang baik dengan organisasi mahasiswa lain dan mitra media.',
      'Mengelola media sosial organisasi untuk meningkatkan engagement serta memperkuat citra dan branding kelembagaan.',
      'Memimpin tim dalam pembuatan konten visual dan materi informasi untuk publikasi kegiatan.',
      'Mengawasi dokumentasi dan pengarsipan seluruh aktivitas organisasi secara terstruktur.'
    ],
    icon: <FaUsers className={styles.experienceIcon} />,
    delay: 0.4,
    logo: '/image/Logo HMTI.png'
  },
  {
    id: 2,
    role: 'Member',
    company: 'Industrial Engineering Community Student (IECS)',
    period: 'Februari - Mei 2023',
    description: [
      'Aktif membangun koneksi dengan mahasiswa Teknik Industri di berbagai perguruan tinggi di Indonesia.',
      'Mengikuti berbagai kegiatan yang menunjang pengembangan diri baik secara akademis maupun profesional.',
      'Berpartisipasi dalam diskusi dan proyek kolaboratif untuk mengembangkan wawasan di bidang Teknik Industri.'
    ],
    icon: <FaUsers className={styles.experienceIcon} />,
    delay: 0.6,
    logo: '/image/IESC.png' // Make sure to add the logo file to your public/image directory
  }
];

const experienceItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * i + 0.3,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }),
  hover: {
    x: 10,
    transition: { duration: 0.3 }
  }
};

const ExperienceItem = ({ exp, index }: { exp: ExperienceItem; index: number }) => (
  <motion.div
    className={styles.experienceItem}
    custom={index}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    variants={experienceItemVariants}
  >
    <div className={styles.experienceIconContainer}>
      {exp.icon}
    </div>
    <div className={styles.experienceContent}>
      <div className={styles.experienceHeader}>
        <div>
          <h3 className={styles.experienceRole}>{exp.role}</h3>
          <div className={styles.experienceMeta}>
            <span className={styles.experienceCompany}>{exp.company}</span>
            <span className={styles.experiencePeriod}>{exp.period}</span>
          </div>
        </div>
        {exp.logo && (
          <div className={styles.companyLogoContainer}>
            <img 
              src={exp.logo} 
              alt={`${exp.company} logo`} 
              className={styles.companyLogo}
            />
          </div>
        )}
      </div>
      <ul className={styles.experienceDescription}>
        {exp.description.map((item, i) => (
          <motion.li 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                delay: exp.delay + (i * 0.1),
                duration: 0.4 
              } 
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <motion.main 
      className={styles.aboutMain}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className={styles.aboutTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Pengalaman
      </motion.h1>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaBriefcase className={styles.sectionIcon} />
          Pengalaman Magang
        </h2>
        <div className={styles.experienceContainer}>
          {internshipExperience.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))}
          {internshipExperience.length === 0 && (
            <p className={styles.noExperience}>Tidak ada pengalaman magang yang tersedia.</p>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <FaUsers className={styles.sectionIcon} />
          Pengalaman Organisasi
        </h2>
        <div className={styles.experienceContainer}>
          {organizationalExperience.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))}
          {organizationalExperience.length === 0 && (
            <p className={styles.noExperience}>Tidak ada pengalaman organisasi yang tersedia.</p>
          )}
        </div>
      </section>
    </motion.main>
  );
}
