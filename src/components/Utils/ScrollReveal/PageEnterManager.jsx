import { useEffect } from "react";
import { markPageEnterNavigation, restartPageEnterAnimations } from "./pageEnter";

/** Solo reinicia animaciones de entrada de página (p. ej. /experiencia sin scroll reveal). */
export default function PageEnterManager() {
  useEffect(() => {
    const onBeforeSwap = () => markPageEnterNavigation();

    const onPageLoad = () => restartPageEnterAnimations();

    document.addEventListener("astro:before-swap", onBeforeSwap);
    document.addEventListener("astro:page-load", onPageLoad);

    return () => {
      document.removeEventListener("astro:before-swap", onBeforeSwap);
      document.removeEventListener("astro:page-load", onPageLoad);
    };
  }, []);

  return null;
}
