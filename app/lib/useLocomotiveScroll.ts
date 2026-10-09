import { useEffect } from "react";

export default function useLocomotiveScroll() {
  useEffect(() => {
    let isCancelled = false;
    let locomotiveScroll: InstanceType<
      typeof import("locomotive-scroll").default
    > | null = null;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (isCancelled) return;
      locomotiveScroll = new LocomotiveScroll();
    })();

    return () => {
      isCancelled = true;
      locomotiveScroll?.destroy();
    };
  }, []);
}
