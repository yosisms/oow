import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-wedding-sage rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-wedding-gold rounded-full blur-3xl" />
      </div>

      <motion.div
        className="text-center relative z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Date */}
        <motion.p
          className="text-wedding-sage text-xl md:text-2xl mb-8 font-light tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          כ״ה באדר תשפ״ה | 25.03.2025
        </motion.p>

        {/* Names */}
        <motion.div
          className="mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-wedding-sage mb-4">עומר & עופיר</h1>
          <div className="h-1 w-32 bg-wedding-gold mx-auto rounded-full" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-5xl font-light text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          מתחתנים!
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          אנו שמחים להזמין אתכם לחגוג איתנו
          <br />
          את היום המיוחד בחיינו
        </motion.p>

        {/* Decorative hearts */}
        <motion.div
          className="mt-12 text-6xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        >
          💍
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        <svg
          className="w-8 h-8 text-wedding-sage"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
