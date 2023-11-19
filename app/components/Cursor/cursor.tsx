"use client";
import { useEffect } from "react";
import styles from "@/app/components/Cursor/style.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function cursor() {
  const cursorSize = 15;
  const motionValue = useMotionValue(0);
  const mouse = {
    x: motionValue,
    y: motionValue,
  };

  const smoothOptions = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);
  return (
    <>
      <motion.div
        style={{ left: smoothMouse.x, top: smoothMouse.y }}
        className={`bg-black dark:bg-white ${styles.cursor}`}
      ></motion.div>
    </>
  );
}
