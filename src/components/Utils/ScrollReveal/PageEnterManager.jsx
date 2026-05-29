import { useEffect } from "react";
import {
  beginNavigationScrollRevealHold,
  markPageEnterNavigation,
  restartPageEnterAnimations,
} from "./pageEnter";

/** Reinicia animaciones de entrada de página en navegación con View Transitions. */
export default function PageEnterManager() {
  useEffect(() => {
    const onBeforeSwap = () => {
      markPageEnterNavigation();
      beginNavigationScrollRevealHold();
    };

    const onAfterSwap = () => restartPageEnterAnimations();

    document.addEventListener("astro:before-swap", onBeforeSwap);
    document.addEventListener("astro:after-swap", onAfterSwap);

    return () => {
      document.removeEventListener("astro:before-swap", onBeforeSwap);
      document.removeEventListener("astro:after-swap", onAfterSwap);
    };
  }, []);

  return null;
}
