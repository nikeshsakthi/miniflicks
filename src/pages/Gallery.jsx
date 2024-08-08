import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <motion.div id='gallery' className="flex items-center justify-center h-screen p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-primary ">Gallery</h1>
        <p className="mt-4 text-lg">Take a look at some of the fresh fruits we offer.</p>
        <img src="https://source.unsplash.com/random/800x600?fruit-basket" alt="Gallery" className="object-cover w-full h-64 mt-4 rounded-lg"/>
      </div>
    </motion.div>
  );
}

export default Gallery;
