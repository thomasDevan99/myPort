import { motion, animate, press } from "framer-motion";
import { useState } from 'react';

export default function Section({ name }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle box press
  press(`.box-${name}`, (element) => {
    animate(element, { scale: isFlipped ? 1.5 : 0.9 }, { type: "spring", stiffness: 500 });
    return () => {
      animate(element, { scale: isFlipped ? 1.5 : 1 }, { type: "spring", stiffness: 500 });
      setIsFlipped((prev) => !prev); // Toggle flip

    };
  });
  return (
    <motion.div
      className={`box-${name} content-center items-center justify-center`}
      animate={{
        rotateY: isFlipped ? 180 : 0, // Flip box 
        scale: isFlipped ? 1.5 : 1, // Enlarge when flipped
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{
        width: "100px",
        height: "100px",
        borderColor: "#ffffff",
        backgroundColor: "#000000",
        borderWidth: "2px",
        borderRadius: "10px",
        cursor: "grab",
      }}
    >
      <p className={'text-center'}>{isFlipped ? "New Text" : name}</p> 
    </motion.div>
  );
}
