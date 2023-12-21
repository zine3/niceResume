import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Avion = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mobileVariant = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
  };

  const desktopVariant = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: '-100%' },
  };

  const variant = isMobile ? mobileVariant : desktopVariant;

  const translateY = useTransform(scrollY, [0, 500], ['0%', '50%']);

  return (
    <motion.img
      src="/airbus.png"
      alt="Avion"
      initial="hidden"
      animate="visible"
      variants={variant}
      transition={{ duration: 2, ease: 'linear', repeat: 0 }}
      style={{
        width: '100%',
        maxWidth: isMobile ? '100px' : '200px',
        height: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        translateX: '-50%',
        translateY,
      }}
    />
  );
};

export default Avion;
