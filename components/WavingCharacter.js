import { motion } from 'framer-motion';

export default function WavingCharacter() {
  // Waving hand animation with a smiling character
  return (
    <div className="flex flex-col items-center justify-center h-80 md:h-96">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-32 md:w-40"
      >
        {/* Character Body - SVG based */}
        <svg
          viewBox="0 0 200 250"
          className="w-full h-auto"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(252, 163, 17, 0.2))' }}
        >
          {/* Head */}
          <circle cx="100" cy="80" r="40" fill="#FCA311" className="drop-shadow-lg" />
          
          {/* Eyes */}
          <circle cx="85" cy="70" r="4" fill="#000000" />
          <circle cx="115" cy="70" r="4" fill="#000000" />
          
          {/* Smile */}
          <path
            d="M 85 85 Q 100 95 115 85"
            stroke="#000000"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Body */}
          <rect x="70" y="120" width="60" height="50" rx="8" fill="#14213D" />
          
          {/* Left Arm */}
          <rect x="40" y="125" width="30" height="12" rx="6" fill="#FCA311" />
          
          {/* Right Arm - Waving */}
          <g>
            <motion.g
              animate={{ rotate: [0, -30, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: '135px 130px' }}
            >
              <rect x="130" y="125" width="30" height="12" rx="6" fill="#FCA311" />
              {/* Hand */}
              <circle cx="162" cy="131" r="8" fill="#FCA311" />
            </motion.g>
          </g>
          
          {/* Left Leg */}
          <rect x="75" y="170" width="12" height="35" rx="6" fill="#14213D" />
          
          {/* Right Leg */}
          <rect x="113" y="170" width="12" height="35" rx="6" fill="#14213D" />
        </svg>
      </motion.div>
      
      {/* Floating Text */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-8 text-center"
      >
        <p className="text-highlight text-lg font-semibold">Hey! Let's Talk 👋</p>
        <p className="text-primaryLight text-sm mt-2">We're excited to help you transform</p>
      </motion.div>
    </div>
  );
}
