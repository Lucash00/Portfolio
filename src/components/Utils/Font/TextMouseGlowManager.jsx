import { useEffect } from "react";
import "../../../styles/textMouseGlow.css";

const GLOW_SELECTOR = "[data-text-glow], [data-icon-glow]";
const ICON_GLOW_LAYER_ID = "portfolio-icon-glow-layer";
const MAX_TEXT_GLOW = 0.4;
const MAX_ICON_GLOW = 0.38;
const MAX_ICON_GLOW_HOVER = 0.62;

function isPointerNearTooltip(clientX, clientY) {
  const tooltip = document.getElementById("tooltip");
  if (!tooltip || tooltip.classList.contains("tooltip-hidden")) {
    return false;
  }

  const rect = tooltip.getBoundingClientRect();
  const padding = 28;

  return (
    clientX >= rect.left - padding &&
    clientX <= rect.right + padding &&
    clientY >= rect.top - padding &&
    clientY <= rect.bottom + padding
  );
}

function getIconGlowLayer() {
  let layer = document.getElementById(ICON_GLOW_LAYER_ID);
  if (!layer) {
    layer = document.createElement("div");
    layer.id = ICON_GLOW_LAYER_ID;
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);
  }
  return layer;
}

function clearIconGlowLayer() {
  const layer = document.getElementById(ICON_GLOW_LAYER_ID);
  if (layer) {
    layer.replaceChildren();
  }
}

function updateTextGlows(clientX, clientY) {
  document.querySelectorAll("[data-text-glow]").forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(clientX - centerX, clientY - centerY);
    const reach = Math.max(rect.width, rect.height) * 1.05 + 165;
    const proximity = Math.max(0, 1 - distance / reach);
    const opacity = proximity * proximity * MAX_TEXT_GLOW;

    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    element.style.setProperty("--glow-opacity", String(opacity));
    element.style.setProperty("--glow-x", `${x}%`);
    element.style.setProperty("--glow-y", `${y}%`);
  });
}

function updateIconGlows(clientX, clientY) {
  const layer = getIconGlowLayer();
  layer.replaceChildren();

  document.querySelectorAll("[data-icon-glow]").forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const isDirectHover = element.matches(":hover");
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(clientX - centerX, clientY - centerY);
    const reach = Math.max(rect.width, rect.height) * 1.15 + 130;
    const proximity = Math.max(0, 1 - distance / reach);
    let opacity = proximity * proximity * MAX_ICON_GLOW;

    if (isDirectHover) {
      opacity = Math.max(opacity, MAX_ICON_GLOW_HOVER);
      element.setAttribute("data-glow-active", "true");
    } else {
      element.removeAttribute("data-glow-active");
    }

    if (opacity < 0.02) return;
    if (isPointerNearTooltip(clientX, clientY)) return;

    const spot = document.createElement("div");
    spot.className = "icon-glow-spot";
    if (isDirectHover) {
      spot.classList.add("icon-glow-spot--active");
    }
    spot.style.setProperty("--spot-opacity", String(opacity));
    spot.style.left = `${clientX}px`;
    spot.style.top = `${clientY}px`;
    layer.appendChild(spot);
  });
}

function resetGlowTargets() {
  document.querySelectorAll("[data-text-glow]").forEach((element) => {
    element.style.setProperty("--glow-opacity", "0");
  });
  document.querySelectorAll("[data-icon-glow]").forEach((element) => {
    element.removeAttribute("data-glow-active");
  });
  clearIconGlowLayer();
}

export default function TextMouseGlowManager() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const onMouseMove = (event) => {
      updateTextGlows(event.clientX, event.clientY);
      updateIconGlows(event.clientX, event.clientY);
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
      document.getElementById(ICON_GLOW_LAYER_ID)?.remove();
    };
  }, []);

  return null;
}
