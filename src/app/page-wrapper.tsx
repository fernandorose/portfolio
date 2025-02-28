import { motion } from "framer-motion";

type PageWrapperProps = {
  children: React.ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return <motion.main>{children}</motion.main>;
};
