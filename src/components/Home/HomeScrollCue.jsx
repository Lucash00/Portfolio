import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "../../i18n/client";

const EXPERIENCES_ID = "home-experiences";
const TOP_THRESHOLD = 32;
const SCROLL_TOP_BUFFER = 40;
const TARGET_WAIT_MS = 2000;

function isHomePage() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return path === "/" || path === "";
}

function getHeaderOffset() {
  const header = document.getElementById("header");
  return Math.ceil(header?.getBoundingClientRect().height ?? 0);
}

function shouldShowCue() {
  return isHomePage() && window.scrollY <= TOP_THRESHOLD;
}

function scrollToElement(target) {
  const top =
    window.scrollY +
    target.getBoundingClientRect().top -
    getHeaderOffset() -
    SCROLL_TOP_BUFFER;

  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function waitForElement(selector, timeoutMs = TARGET_WAIT_MS) {
  return new Promise((resolve) => {
    const existing = document.getElementById(selector);
    if (existing) {
      resolve(existing);
      return;
    }

    const observer = new MutationObserver(() => {
      const el = document.getElementById(selector);
      if (el) {
        observer.disconnect();
        resolve(el);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.setTimeout(() => {
      observer.disconnect();
      resolve(document.getElementById(selector));
    }, timeoutMs);
  });
}

function ArrowDownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="11" y="4" width="2" height="10" rx="1" />
      <path d="M12 17.5 6.5 12h11L12 17.5z" />
    </svg>
  );
}

export default function HomeScrollCue() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const syncVisibility = useCallback(() => {
    setVisible(shouldShowCue());
  }, []);

  const scrollToExperiences = useCallback(async () => {
    const target = await waitForElement(EXPERIENCES_ID);
    if (!target) return;

    scrollToElement(target);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return undefined;

    const runSync = () => syncVisibility();

    runSync();
    requestAnimationFrame(runSync);
    requestAnimationFrame(() => requestAnimationFrame(runSync));

    window.addEventListener("scroll", runSync, { passive: true });
    window.addEventListener("resize", runSync, { passive: true });
    window.addEventListener("load", runSync);
    window.addEventListener("pageshow", runSync);
    document.addEventListener("astro:page-load", runSync);

    return () => {
      window.removeEventListener("scroll", runSync);
      window.removeEventListener("resize", runSync);
      window.removeEventListener("load", runSync);
      window.removeEventListener("pageshow", runSync);
      document.removeEventListener("astro:page-load", runSync);
    };
  }, [mounted, syncVisibility]);

  if (!mounted) return null;

  return createPortal(
    <div
      data-no-scroll-reveal
      className={`home-scroll-cue${visible ? " home-scroll-cue--visible" : ""}`}
      aria-hidden={!visible}
    >
      <button
        type="button"
        className="home-scroll-cue__btn"
        onClick={() => {
          void scrollToExperiences();
        }}
        tabIndex={visible ? 0 : -1}
        aria-label={t("home.scrollCueAria")}
      >
        <span className="home-scroll-cue__icon">
          <ArrowDownIcon />
        </span>
      </button>
    </div>,
    document.body,
  );
}
