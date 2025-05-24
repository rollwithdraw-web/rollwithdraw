import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#04011C] to-[#0a0415] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-8 max-w-md w-full mx-4"
      >
        <h1 className="text-7xl font-bold text-[#8a4fff] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="bg-[#8a4fff] text-white px-8 py-4 rounded-lg hover:bg-[#9d5fff] transition-colors duration-200 font-medium text-lg shadow-lg shadow-[#8a4fff]/20"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound; 