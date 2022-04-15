import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  route: string;
  children: ReactNode;
};

const Motion: FC<Props> = ({ children, route }) => {
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
