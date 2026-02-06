import { motion } from 'framer-motion';
import Hero from './Hero';
import EventDetails from './EventDetails';
import Schedule from './Schedule';
import RSVP from './RSVP';
import Footer from './Footer';

const HomeContent = () => {
  return (
    <motion.div
      className="min-h-screen bg-wedding-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <EventDetails />
      <Schedule />
      <RSVP />
      <Footer />
    </motion.div>
  );
};

export default HomeContent;
