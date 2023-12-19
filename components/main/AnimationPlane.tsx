import { motion } from 'framer-motion';

const Avion = () => {
  return (
    <motion.img
      src="/airbus.png"
      alt="Avion"
      initial={{ x: '100%', y: '-50%', opacity: 0 }}
      animate={{ x: '-100%', y: '50%', opacity: 1 }}
      transition={{ duration: 2, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      style={{
        width: '100%',
        maxWidth:'200px',
        height: 'auto',
        position: 'absolute',
        top: '50%', // Ajustez la valeur pour la position verticale initiale
        left: '50%', // Centre l'avion horizontalement
        translateX: '-50%', // Ajustez pour centrer l'avion
        translateY: '-50%', // Ajustez pour centrer l'avion
      }}
    />
  );
};

export default Avion;
