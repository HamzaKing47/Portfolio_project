// src/components/Loading.jsx
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <motion.div
        className="w-16 h-16 rounded-full border-t-4 border-b-4 border-green-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <motion.p
        className="mt-6 text-lg font-semibold text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Loading, please wait...
      </motion.p>
    </div>
  );
};

export default Loading;