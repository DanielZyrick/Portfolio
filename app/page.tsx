"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import HomeHero from "./components/Home/HomeHero";
import About from "./components/Home/About";
import Services from "./components/Services";
import Work from "./components/Home/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Work /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
}
