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
    let isCancelled = false;
    let locomotiveScroll: InstanceType<
      typeof import("locomotive-scroll").default
    > | null = null;
    let timeoutId: ReturnType<typeof setTimeout>;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (isCancelled) return;
      locomotiveScroll = new LocomotiveScroll();

      timeoutId = setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    })();

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
      locomotiveScroll?.destroy();
    };
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
