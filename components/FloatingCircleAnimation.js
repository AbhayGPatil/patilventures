import { motion } from 'framer-motion';

export default function FloatingCircleAnimation() {
  // Circular floating animation with orbiting elements
  const orbitItems = [
    { angle: 0, label: 'AI', icon: '⚡' },
    { angle: 120, label: 'Innovation', icon: '💡' },
    { angle: 240, label: 'Excellence', icon: '✨' },
  ];

  return (
    <div className="flex items-center justify-center h-96 md:h-full">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Central Circle */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 60px rgba(252, 163, 17, 0.3)',
              '0 0 100px rgba(252, 163, 17, 0.5)',
              '0 0 60px rgba(252, 163, 17, 0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-highlight to-highlight/80 rounded-full flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl md:text-5xl font-bold text-base mb-2"
            >
              AI
            </motion.div>
            <p className="text-base/80 text-xs md:text-sm font-medium">Transform</p>
          </div>
        </motion.div>

        {/* Orbiting Circles */}
        {orbitItems.map((item, index) => (
          <motion.div
            key={index}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-full h-full"
          >
            <motion.div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                translateX: '-50%',
                translateY: '-50%',
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 'calc(50% + 90px)',
                  transform: 'translateX(-50%)',
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-surface rounded-full border-2 border-highlight flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
                  style={{
                    boxShadow: '0 0 20px rgba(252, 163, 17, 0.2)',
                  }}
                >
                  <div className="text-center">
                    <div className="text-2xl">{item.icon}</div>
                    <p className="text-xs text-primaryLight font-semibold mt-1">{item.label}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Rotating Border Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-highlight border-r-highlight/50"
        />

        {/* Slower Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-8 rounded-full border border-highlight/20"
        />
      </div>
    </div>
  );
}
