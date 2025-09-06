import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Robot mascot that waves and displays messages, hides on scroll
export default function RobotMascot() {
  const messages = ['Hi there!', 'Welcome to PV'];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(messageInterval);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed bottom-0 right-0 z-40 w-[40vw] max-w-md pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute -top-16 right-4 bg-base border border-secondary rounded-xl px-4 py-2 shadow text-primary text-sm"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
      <motion.img
        src="/assets/robot.png"
        alt="Robot mascot"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full h-auto select-none"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
}