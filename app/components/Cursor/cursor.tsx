"use client";
import { useEffect } from "react";
import styles from "@/app/components/Cursor/style.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Cursor() {
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [manageMouseMove]);
  return (
    <>
      <motion.div
        style={{ left: smoothMouse.x, top: smoothMouse.y }}
        className={`bg-black dark:bg-white ${styles.cursor}`}
      ></motion.div>
    </>
  );
}
export default Cursor;
