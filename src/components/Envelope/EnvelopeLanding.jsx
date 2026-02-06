import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import WaxSeal from './WaxSeal';

const EnvelopeLanding = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [sealClicked, setSealClicked] = useState(false);

  const handleSealClick = () => {
    if (isOpening) return;

    setSealClicked(true);
    setIsOpening(true);

    // Trigger onOpen after animation completes
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 bg-wedding-cream flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative"
        style={{ perspective: 1200 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: isOpening ? 1.1 : 1,
          opacity: 1,
          y: isOpening ? -20 : 0,
        }}
        transition={{
          duration: 0.6,
          scale: { duration: isOpening ? 1.2 : 0.6 },
        }}
      >
        {/* Envelope Body */}
        <svg width="400" height="280" viewBox="0 0 400 280" className="drop-shadow-2xl">
          {/* Main envelope body */}
          <rect x="50" y="80" width="300" height="200" fill="#5f7161" rx="4" />

          {/* Inner lining (visible when open) */}
          <motion.rect
            x="50"
            y="80"
            width="300"
            height="60"
            fill="#c5a059"
            opacity={isOpening ? 0.3 : 0}
            animate={{ opacity: isOpening ? 0.3 : 0 }}
          />

          {/* Back flap triangles */}
          <polygon points="50,80 200,20 350,80" fill="#4a5a4d" />

          {/* Front flap */}
          <motion.g
            style={{
              transformOrigin: '200px 80px',
              transformStyle: 'preserve-3d',
            }}
            animate={{
              rotateX: isOpening ? 180 : 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
          >
            <polygon points="50,80 200,20 350,80" fill="#5f7161" />
            {/* Flap shadow for depth */}
            <polygon points="50,80 200,20 350,80" fill="#000" opacity="0.1" />
          </motion.g>
        </svg>

        {/* Wax Seal */}
        <AnimatePresence>
          {!sealClicked && (
            <motion.div
              className="absolute top-[50px] left-1/2 -translate-x-1/2 cursor-pointer"
              onClick={handleSealClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              exit={{
                scale: 0,
                opacity: 0,
                rotate: 180,
              }}
              transition={{ duration: 0.4 }}
            >
              <WaxSeal />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing indicator when not clicked */}
        {!isOpening && (
          <motion.div
            className="absolute top-[50px] left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-2 border-wedding-gold pointer-events-none"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </motion.div>

      {/* Instruction text */}
      {!isOpening && (
        <motion.p
          className="absolute bottom-20 text-wedding-sage text-lg font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          לחצו על החותם לפתיחת ההזמנה
        </motion.p>
      )}
    </div>
  );
};

export default EnvelopeLanding;
