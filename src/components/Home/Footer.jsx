import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-wedding-sage text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">מצפים לראותכם!</h3>

          <p className="text-xl md:text-2xl font-light mb-8 opacity-90">
            עם אהבה,
            <br />
            עומר ועופיר
          </p>

          <div className="text-6xl mb-8">❤️</div>

          <div className="h-px w-32 bg-white/30 mx-auto mb-8" />

          <p className="text-sm opacity-70">
            כ״ה באדר תשפ״ה • 25.03.2025
            <br />
            אולם אגדות, תל אביב
          </p>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-xs opacity-50">נבנה באהבה לכבוד היום המיוחד שלנו 💍</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
