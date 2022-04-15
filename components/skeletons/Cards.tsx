import React, { FC } from "react";
import { motion } from "framer-motion";
const Cards: FC<{ length: number }> = ({ length = 9 }) => {
  const render = Array.from({ length }, (_, i) => ({ id: i }));
  return (
    <>
      {render.map(({ id }) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={id}
          className="max-w-sm w-full p-4 mx-auto border border-gray-200 rounded-md shadow-sm max-h-md"
        >
          <div className="flex space-x-4 animate-pulse">
            <div className="flex-1 py-1 space-y-4">
              <div className="w-full h-40 bg-gray-300 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Cards;
