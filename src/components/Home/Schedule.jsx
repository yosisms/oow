import { motion } from 'framer-motion';

const Schedule = () => {
  const events = [
    {
      time: '19:00',
      title: 'קבלת פנים',
      description: 'משקאות קלים וכיבוד',
      icon: '🥂',
    },
    {
      time: '19:30',
      title: 'חופה',
      description: 'הטקס המרגש',
      icon: '💐',
    },
    {
      time: '20:15',
      title: 'קוקטייל',
      description: 'אירוח עשיר ומגוון',
      icon: '🍸',
    },
    {
      time: '21:00',
      title: 'ארוחת ערב',
      description: 'ארוחה חגיגית',
      icon: '🍽️',
    },
    {
      time: '22:00',
      title: 'מסיבה!',
      description: 'ריקודים עד השעות הקטנות',
      icon: '💃',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-wedding-sage mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          סדר היום
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute right-[52px] md:right-1/2 top-0 bottom-0 w-0.5 bg-wedding-gold/30" />

          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:flex md:items-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:order-2'}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-wedding-gold hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl flex-shrink-0">{event.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-wedding-sage mb-1">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      <span className="inline-block px-3 py-1 bg-wedding-sage/10 text-wedding-sage font-medium rounded-full text-sm">
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute right-10 md:right-1/2 md:-translate-x-1/2 top-6 w-6 h-6 bg-wedding-gold rounded-full border-4 border-wedding-cream shadow-lg z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
