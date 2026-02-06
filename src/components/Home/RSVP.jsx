import { motion } from 'framer-motion';

const RSVP = () => {
  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-wedding-sage mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          אישור הגעה
        </motion.h2>

        <motion.p
          className="text-xl text-gray-700 mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          נשמח לראותכם!
          <br />
          אנא אשרו הגעתכם עד ה-1 במרץ 2025
        </motion.p>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* WhatsApp Buttons */}
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://wa.me/972501234567?text=שלום%20עומר,%20מאשר/ת%20הגעה%20לחתונה!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-wedding-sage text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-wedding-sage/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-2xl">📱</span>
              <span>WhatsApp לעומר</span>
            </a>

            <a
              href="https://wa.me/972509876543?text=שלום%20עופיר,%20מאשר/ת%20הגעה%20לחתונה!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-wedding-gold text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-wedding-gold/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span className="text-2xl">📱</span>
              <span>WhatsApp לעופיר</span>
            </a>
          </div>

          {/* Phone Numbers */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">או צרו קשר בטלפון:</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-lg">
              <a
                href="tel:+972501234567"
                className="text-wedding-sage hover:text-wedding-sage/80 font-medium transition-colors"
              >
                עומר: 050-123-4567
              </a>
              <span className="hidden md:inline text-gray-300">|</span>
              <a
                href="tel:+972509876543"
                className="text-wedding-sage hover:text-wedding-sage/80 font-medium transition-colors"
              >
                עופיר: 050-987-6543
              </a>
            </div>
          </div>
        </motion.div>

        {/* Special Note */}
        <motion.div
          className="mt-12 p-6 bg-wedding-gold/10 rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-gray-700 text-lg">
            💝 נשמח מאוד אם תוכלו לאשר את הגעתכם מראש
            <br />
            כדי שנוכל להיערך בהתאם
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
