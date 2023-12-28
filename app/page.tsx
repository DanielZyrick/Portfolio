"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import HomeHero from "./components/Home/HomeHero";
import About from "./components/Home/About";
import Services from "./components/Services";
import Work from "./components/Home/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkCursor from "./components/Cursor/WorkCursor";
import Cursor from "./components/Cursor/Cursor";

interface MyComponentProps {
  setModal: (value: boolean) => void;
  // other props...
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <HomeHero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
      <Cursor />
    </main>
  );
}
