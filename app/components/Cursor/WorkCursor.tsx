import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/components/Cursor/style.module.css";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "800%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "800%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "800",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
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

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
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
                <Image
                  src={`/${src}`}
                  alt={`${item.label} image`}
                  width={300}
                  height={0}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
