import { motion } from 'framer-motion';

const EventDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-wedding-sage mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          פרטי האירוע
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Date */}
          <motion.div
            className="text-center p-8 bg-white rounded-2xl shadow-lg border-t-4 border-wedding-gold"
            variants={itemVariants}
          >
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-2xl font-semibold text-wedding-sage mb-3">תאריך</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              יום שלישי
              <br />
              כ״ה באדר תשפ״ה
              <br />
              25 במרץ 2025
            </p>
          </motion.div>

          {/* Time */}
          <motion.div
            className="text-center p-8 bg-white rounded-2xl shadow-lg border-t-4 border-wedding-sage"
            variants={itemVariants}
          >
            <div className="text-5xl mb-4">🕐</div>
            <h3 className="text-2xl font-semibold text-wedding-sage mb-3">שעה</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              קבלת פנים
              <br />
              19:00
              <br />
              חופה 19:30
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            className="text-center p-8 bg-white rounded-2xl shadow-lg border-t-4 border-wedding-gold"
            variants={itemVariants}
          >
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-semibold text-wedding-sage mb-3">מקום</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              אולם אגדות
              <br />
              רחוב הכלניות 15
              <br />
              תל אביב
            </p>
            <a
              href="https://maps.google.com/?q=אולם+אגדות+תל+אביב"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-wedding-gold hover:text-wedding-sage transition-colors underline font-medium"
            >
              נווט לאולם ↗
            </a>
          </motion.div>
        </motion.div>

        {/* Dress Code */}
        <motion.div
          className="mt-12 text-center p-8 bg-wedding-sage/5 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-wedding-sage mb-3">קוד לבוש</h3>
          <p className="text-lg text-gray-700">חגיגי • צבעים בהירים מעודדים • נא להימנע מלבן</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;
