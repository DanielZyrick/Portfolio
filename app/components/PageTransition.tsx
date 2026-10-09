"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition() {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      className="fixed inset-0 z-999 bg-[#121212] dark:bg-white pointer-events-none"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    />
  );
}
