import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RobotOverlay() {
  const [animationData, setAnimationData] = useState(null);
  const [visible, setVisible] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0); // 0: HI THERE, 1: Welcome..., 2: hidden

  // load lottie
  useEffect(() => {
    fetch('/assets/robot.json')
      .then((r) => r.json())
      .then((d) => setAnimationData(d))
      .catch(() => setAnimationData(null));
  }, []);

  // message sequence: HI THERE -> Welcome -> hide
  useEffect(() => {
    if (!visible) return;
    const t1 = setTimeout(() => setMsgIndex(1), 1000);   // after 1s -> show second
    const t2 = setTimeout(() => setMsgIndex(2), 2800);   // after 2.8s total -> hide
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [visible]);

  // hide robot on scroll down a bit
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 120) setVisible(false);
      else setVisible(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:right-8 z-50 pointer-events-none">
      <div className="relative w-[36vw] max-w-[340px] min-w-[220px]">
        {/* Robot animation */}
        {animationData && (
          <Lottie animationData={animationData} loop autoplay className="w-full h-auto" />
        )}
       
{/* Floating logo above the robot */}
<motion.img
  src="/assets/logo.png"
  alt="Patil Ventures"
  className="absolute -top-28 right-0 w-28 md:w-36 pointer-events-none drop-shadow-xl"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
/>


        {/* Speech bubble (anchored near robot headset) */}
        <AnimatePresence>
          {msgIndex < 2 && (
           <motion.div
  className="absolute -top-6 right-0 md:-right-6 bg-white/95 backdrop-blur rounded-2xl shadow-xl px-4 py-3 md:px-5 md:py-4 w-[220px] md:w-[260px] pointer-events-none border border-black/5"
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -8 }}
  transition={{ duration: 0.35 }}
>
  {/* Tail on the right edge */}
  <div className="absolute -bottom-2 right-20 w-4 h-10 rotate-45 bg-white/95 border-r border-b border-black/5" />
  <div className={msgIndex === 0
      ? 'text-2xl md:text-3xl font-semibold text-primary'
      : 'text-xl md:text-2xl font-semibold text-primary'}>
    {msgIndex === 0 ? 'HI THERE' : 'Welcome to Patil Ventures!'}
  </div>
</motion.div>

          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
