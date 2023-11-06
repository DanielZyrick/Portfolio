"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import HomeHero from "./components/HomeHero";
import About from "./components/About";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={styles.main}>
      <HomeHero />
      <About />
    </main>
  );
}
