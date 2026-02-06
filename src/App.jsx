import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import EnvelopeLanding from './components/Envelope/EnvelopeLanding';
import HomeContent from './components/Home/HomeContent';

function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    // Check if user has already seen the envelope animation
    const visited = sessionStorage.getItem('oow_visited');
    if (visited === 'true') {
      setIsEnvelopeOpen(true);
      setHasVisited(true);
    }
  }, []);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
    sessionStorage.setItem('oow_visited', 'true');
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isEnvelopeOpen && !hasVisited && (
          <EnvelopeLanding key="envelope" onOpen={handleEnvelopeOpen} />
        )}
      </AnimatePresence>

      {isEnvelopeOpen && <HomeContent key="content" />}
    </div>
  );
}

export default App;
