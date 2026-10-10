import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/components/Cursor/style.module.css";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";

const scaleAnimation: Variants = {
  initial: { opacity: 0, x: "-50%", y: "-50%" },
  enter: {
    opacity: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
  },
  closed: {
    opacity: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as const },
  },
};

export default function WorkCursor({ modal, workItems }) {
  const { active, i } = modal;
  const container = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: i * -100 + "%" }} className={styles.modalSlider}>
          {workItems.map((item, i) => {
            const { src, color } = item;
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${i}`}
              >
                {src && (
                  <Image
                    src={`/${src}`}
                    alt={`${item.label} image`}
                    width={300}
                    height={0}
                    style={{ maxWidth: "auto", height: "auto" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
