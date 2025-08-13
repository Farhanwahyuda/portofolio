"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { WhatsappIcon, LinkedinIcon, EmailIcon } from './contact/icons';
import { useEffect } from 'react';


export default function Home() {
  // Handle scroll reveal animations
  const handleScroll = () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-[#f7fafc] relative overflow-hidden"
    >
      {/* Left: Headline, subtext, CTA, logos */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 max-w-xl z-10"
      >
        <motion.h1 
          variants={item}
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight"
        >
          Hallo, I&apos;m<br />Farhan Wahyuda
        </motion.h1>
        <motion.p 
          variants={item}
          className="mb-6 text-gray-700 text-lg md:text-xl max-w-md"
        >
          Make more impact by showing your skills, projects, and experience in a modern, professional way. Explore my work and background to see how I can contribute to your organization.
        </motion.p>
        <motion.div variants={item} className="mb-8">
          <motion.a 
            href="/file/CV ATS Farhan Wahyuda.pdf" 
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 rounded-full shadow transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>
        <motion.div 
          variants={item}
          className="flex gap-4 mb-10"
        >
          <motion.a 
            href="https://wa.me/6285797112298" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp" 
            className="btn bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors flex items-center justify-center"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <WhatsappIcon className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/farhanwahyuda" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn" 
            className="btn bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors flex items-center justify-center"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedinIcon className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="mailto:farhanwahyuda@email.com" 
            aria-label="Email" 
            className="btn bg-gray-400 hover:bg-gray-500 text-white p-3 rounded-full transition-colors flex items-center justify-center"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <EmailIcon className="w-6 h-6" />
          </motion.a>
        </motion.div>

      </motion.div>
      {/* Right: Photo with SVG background */}
      <motion.div 
        className="flex-1 flex justify-center items-center relative mt-12 md:mt-0 z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -15, 0],
        }}
        transition={{ 
          x: { duration: 0.8 },
          y: { 
            duration: 3, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src="/image/profile.png"
            alt="Farhan Wahyuda profile photo"
            width={800}
            height={800}
            className="rounded-2xl shadow-2xl object-cover relative z-10 border-4 border-white"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

