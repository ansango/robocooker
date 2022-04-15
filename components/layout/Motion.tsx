import React, { FC } from "react";
import { motion } from "framer-motion";

type propTypes = {
  route: string;
};

const Motion: FC<propTypes> = ({ children, route }) => {
  return (
    <motion.div
      key={route}
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
