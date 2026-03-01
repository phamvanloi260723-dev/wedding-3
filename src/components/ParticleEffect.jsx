import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleEffect = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 20,
      size: 10 + Math.random() * 15,
      color: ['#e8c4c4', '#f5e6e0', '#d4a574', '#ffd1dc'][Math.floor(Math.random() * 4)],
      rotate: Math.random() * 360
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, x: `${p.x}vw`, opacity: 0, rotate: p.rotate }}
          animate={{ 
            y: '110vh', 
            x: `${p.x + (Math.random() * 10 - 5)}vw`, 
            opacity: [0, 0.6, 0.6, 0],
            rotate: p.rotate + 360
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: '50% 0 50% 50%',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffect;
