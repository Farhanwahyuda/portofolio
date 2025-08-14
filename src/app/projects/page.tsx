'use client';

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    title: 'Teknologi Hidrodestilasi Pala di Perkebunan Pala Desa Gunungmanik Kecamatan Ciniru Kabupaten Kuningan',
    description:`Proyek ini merupakan bagian dari kompetisi nasional Lomba Inovasi Program Pemberdayaan dan Pembangunan Desa (LIP3D) yang bertujuan mendorong kontribusi mahasiswa dalam memperkuat kapasitas desa untuk mencapai target Rencana Pembangunan Jangka Menengah (RPJM) nasional. Fokus program adalah merancang solusi berbasis riset dan teknologi untuk meningkatkan produktivitas desa, khususnya melalui pengembangan kewirausahaan lokal, peningkatan kualitas SDM, dan pemulihan infrastruktur pasca pandemi`,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/PERKEBUNAN.jpg`,
    tags: ['Pengembangan Masyarakat', 'Inovasi', 'Pemecahan Masalah','Proyek Akademik','Kolaborasi','Kompetisi Nasional','Pengembangan Teknologi']
  },
  {
    title: 'Production Line Optimization',
    description: `Improved throughput by 15% by analyzing bottlenecks and implementing lean manufacturing techniques.`,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Process Improvement', 'Lean Manufacturing', 'Data Analysis']
  },
  {
    title: 'Inventory Management System',
    description: `Developed a data-driven inventory tracking system to reduce stockouts and excess inventory.`,
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['System Development', 'Data Analysis', 'Automation']
  },
  {
    title: 'Supply Chain Simulation',
    description: `Built simulation models to optimize logistics and reduce transportation costs for a regional distributor.`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Simulation', 'Logistics', 'Optimization']
  }
];

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
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }),
  hover: {
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    transition: { 
      y: { duration: 0.2 },
      boxShadow: { duration: 0.3 }
    }
  }
};

const imageVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{[key: number]: boolean}>({});

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <motion.main 
      className="max-w-6xl mx-auto py-16 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        variants={itemVariants}
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            variants={itemVariants}
            custom={index}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="relative h-48 w-full overflow-hidden cursor-pointer"
              variants={imageVariants}
              onClick={() => openModal(project.image)}
            >
              <Image 
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
              />
            </motion.div>
            <div className="p-6">
              <motion.h2 
                className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                whileHover={{ color: '#3b82f6' }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h2>
              <div 
                className="relative overflow-hidden cursor-pointer mb-4"
                onClick={() => toggleDescription(index)}
              >
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 text-justify"
                  initial={false}
                  animate={{
                    maxHeight: expandedDescriptions[index] ? '1000px' : '4.5rem',
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: expandedDescriptions[index] ? 'unset' : 3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent dark:from-gray-800 dark:via-gray-800/80"
                  initial={false}
                  animate={{
                    opacity: expandedDescriptions[index] ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div 
                  className="text-sm text-blue-500 mt-1 text-right"
                  initial={false}
                  animate={{
                    opacity: expandedDescriptions[index] ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Read more...
                </motion.div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span 
                    key={tagIndex} 
                    className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button 
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={closeModal}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
