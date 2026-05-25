import { useEffect } from "react";
import "../../../styles/textMouseGlow.css";

const MAX_GLOW = 0.4;

function updateGlowTargets(clientX, clientY) {
  document.querySelectorAll("[data-text-glow]").forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(clientX - centerX, clientY - centerY);
    const reach = Math.max(rect.width, rect.height) * 1.05 + 165;
    const proximity = Math.max(0, 1 - distance / reach);
    const opacity = proximity * proximity * MAX_GLOW;

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    element.style.setProperty("--glow-opacity", String(opacity));
    element.style.setProperty("--glow-x", `${x}%`);
    element.style.setProperty("--glow-y", `${y}%`);
  });
}

function resetGlowTargets() {
  document.querySelectorAll("[data-text-glow]").forEach((element) => {
    element.style.setProperty("--glow-opacity", "0");
  });
}

export default function TextMouseGlowManager() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const onMouseMove = (event) => {
      updateGlowTargets(event.clientX, event.clientY);
    };

    const onMouseLeave = () => {
      resetGlowTargets();
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      resetGlowTargets();
    };
  }, []);

  return null;
}
