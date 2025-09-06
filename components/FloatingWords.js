import { motion } from 'framer-motion';

const words = ['Chatbot', 'App Dev', 'Web Apps', 'AI Agent', 'Gen AI', 'LLM'];

// Predefined positions as percentage values for responsive placement
// Place the floating words down the right side of the hero. All share the
// same horizontal offset (60%) to align them vertically. Top positions are
// staggered evenly from top to bottom. This creates a neat column of
// floating words on larger screens while leaving the centre-left portion
// of the hero available for the main headline and CTA.
const positions = [
  { top: '10%', left: '48%' },
  { top: '34%', left: '56%' },
  { top: '45%', left: '41%' },
  { top: '60%', left: '58%' },
  { top: '20%', left: '69%' },
  { top: '78%', left: '55%' },
];

export default function FloatingWords() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {words.map((word, idx) => (
        <motion.span
          key={word}
          className="absolute text-primaryLight text-lg md:text-2xl font-display font-semibold select-none"
          style={{ ...positions[idx] }}
          animate={{ y: [ -10, 10, -10 ] }}
          transition={{ duration: 6 + idx, repeat: Infinity, ease: 'easeInOut' }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}