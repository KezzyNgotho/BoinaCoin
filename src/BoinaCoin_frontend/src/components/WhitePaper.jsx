import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Whitepaper = ({ content }) => {
  return (
    <div className="whitepaper-container mx-auto p-4">
      <motion.header
        className="whitepaper-header text-center py-8"
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">BOINACOIN White Paper</h1>
        <p className="text-xl mt-4">A comprehensive guide to our Memecoin project</p>
      </motion.header>

      <motion.section
        className="whitepaper-content my-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        {content.map((section, index) => (
          <div key={index} className="section my-8">
            <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
            <p className="text-lg leading-relaxed whitespace-pre-line">{section.text}</p>
          </div>
        ))}
      </motion.section>

      <motion.footer
        className="text-center py-4 border-t mt-8"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p>© 2024 Your Memecoin. All rights reserved.</p>
        <p>
          Join us on social media: <a href="#" className="text-blue-500">Twitter</a> | <a href="#" className="text-blue-400">Telegram</a>
        </p>
      </motion.footer>
    </div>
  );
};

export default Whitepaper;
