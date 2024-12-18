import { motion } from 'framer-motion';
import React from 'react';

const Futsirs = () => {
    return (
        <div>

<motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
{( features ).map((feature, index) => {
  const IconComponent = icons[feature.icon];
  if (!feature.title || !feature.description) return null; // إذا كانت العناوين أو الوصف مفقودة

  return (
    <motion.div
      key={feature.title}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#1a1a1a] p-6 rounded-xl hover:bg-[#2a2a2a] transition-all duration-300 transform hover:shadow-xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200 }}
        className="text-[#6f74f5] mb-4"
      >
        {IconComponent && <IconComponent size={24} />}
      </motion.div>
      <h3 className="text-xl font-semibold ">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </motion.div>
  );
})}



        </motion.div>
            {/* Add your component content here */}
        </div>
    );
};

export default Futsirs;