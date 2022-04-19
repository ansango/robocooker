import Footer from "components/common/Footer/Footer";
import Navbar from "components/common/Navbar/Navbar";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
type Props = {
  children?: ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  const { route } = useRouter();
  return (
    <>
      <Navbar />
      <motion.main
        key={route}
        initial="initial"
        animate="animate"
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }}
        transition={{ delay: 0.5 }}
        className="h-full"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default AuthLayout;
