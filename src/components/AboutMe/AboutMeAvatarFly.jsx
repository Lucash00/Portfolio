import { useEffect } from "react";

const AVATAR_SRC = "https://avatars.githubusercontent.com/u/168908236?v=4";
const FLY_MS = 750;

function isAboutPage() {
  return /\/sobreMi\/?$/i.test(window.location.pathname);
}

function revealProfileImage() {
  document.dispatchEvent(new CustomEvent("about-profile-revealed"));
}

function getAvatarLink() {
  return document.getElementById("header-avatar-link");
}

function resetHeaderAvatar() {
  const link = getAvatarLink();
  const wrap = document.getElementById("header-avatar-wrap");
  if (link) {
    link.classList.remove("is-flying", "is-about-hidden");
    link.style.removeProperty("--avatar-slot-width");
  }
  if (wrap) {
    wrap.classList.remove("is-flying", "is-about-hidden");
  }
}

function runFlyAnimation() {
  if (!isAboutPage()) return;
  if (!window.matchMedia("(min-width: 768px)").matches) return;

  const avatarLink = getAvatarLink();
  const headerWrap = document.getElementById("header-avatar-wrap");
  const headerImg = document.getElementById("header-avatar-img");
  const slot = document.getElementById("about-profile-slot");
  const profileImg = document.getElementById("about-profile-img");

  if (!avatarLink || !headerWrap || !headerImg || !slot || !profileImg) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    avatarLink.classList.add("is-about-hidden");
    headerWrap.classList.add("is-about-hidden");
    revealProfileImage();
    return;
  }

  const from = avatarLink.getBoundingClientRect();
  const to = slot.getBoundingClientRect();

  if (from.width < 1 || to.width < 1) return;

  avatarLink.style.setProperty(
    "--avatar-slot-width",
    `${Math.round(from.width)}px`,
  );
  avatarLink.classList.add("is-flying");
  headerWrap.classList.add("is-flying");

  const flyer = document.createElement("img");
  flyer.src = headerImg.currentSrc || headerImg.src || AVATAR_SRC;
  flyer.alt = "";
  flyer.decoding = "async";
  flyer.className = "about-avatar-flyer";
  Object.assign(flyer.style, {
    position: "fixed",
    zIndex: "100",
    borderRadius: "9999px",
    objectFit: "cover",
    left: `${from.left}px`,
    top: `${from.top}px`,
    width: `${from.width}px`,
    height: `${from.height}px`,
    margin: "0",
    padding: "0",
    border: "none",
    pointerEvents: "none",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.35)",
    transition: `left ${FLY_MS}ms cubic-bezier(0.33, 1, 0.68, 1), top ${FLY_MS}ms cubic-bezier(0.33, 1, 0.68, 1), width ${FLY_MS}ms cubic-bezier(0.33, 1, 0.68, 1), height ${FLY_MS}ms cubic-bezier(0.33, 1, 0.68, 1)`,
  });

  document.body.appendChild(flyer);

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    window.clearTimeout(fallback);
    flyer.remove();
    avatarLink.classList.remove("is-flying");
    avatarLink.classList.add("is-about-hidden");
    headerWrap.classList.remove("is-flying");
    headerWrap.classList.add("is-about-hidden");
    revealProfileImage();
  };

  const startMove = () => {
    requestAnimationFrame(() => {
      flyer.style.left = `${to.left}px`;
      flyer.style.top = `${to.top}px`;
      flyer.style.width = `${to.width}px`;
      flyer.style.height = `${to.height}px`;
    });
  };

  flyer.addEventListener("transitionend", (e) => {
    if (e.propertyName === "width") finish();
  });

  let fallback = window.setTimeout(finish, FLY_MS + 120);

  if (flyer.complete) {
    startMove();
  } else {
    flyer.addEventListener("load", startMove, { once: true });
  }

  return () => {
    finished = true;
    window.clearTimeout(fallback);
    flyer.remove();
  };
}

export default function AboutMeAvatarFly() {
  useEffect(() => {
    if (!isAboutPage()) {
      resetHeaderAvatar();
      return;
    }

    let cleanupFly;
    const start = () => {
      cleanupFly = runFlyAnimation();
    };

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(start);
    });

    const onPageLoad = () => {
      if (isAboutPage()) {
        resetHeaderAvatar();
        cleanupFly?.();
        requestAnimationFrame(() => {
          requestAnimationFrame(start);
        });
      } else {
        resetHeaderAvatar();
      }
    };

    document.addEventListener("astro:page-load", onPageLoad);

    return () => {
      cancelAnimationFrame(raf);
      cleanupFly?.();
      document.removeEventListener("astro:page-load", onPageLoad);
    };
  }, []);

  return null;
}
