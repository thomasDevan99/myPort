import { motion } from "framer-motion";

export default function Section({ name }) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, top: -100, right: 300, bottom: 100 }} 
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "#ff0088",
        borderRadius: "10px",
        cursor: "grab",
      }}
    >
      
    </motion.div>
  );
}
